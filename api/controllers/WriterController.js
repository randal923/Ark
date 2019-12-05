const mongoose = require('mongoose');

const Writer = mongoose.model('Writer');
const Movie = mongoose.model('Movie');

class WriterController {
	async create(req, res, next) {
		const { name, movies } = req.body;
		try {
			const writer = new Writer({ name, movies });

			if (movies) {
				await Promise.all(
					movies.map(async id => {
						const movie = await Movie.findById(id);
						movie.writers.push(writer._id.toString());
						await movie.save();
					})
				);
			}

			await writer.save();
			return res.send({ writer });
		} catch (e) {
			next(e);
		}
	}

	async index(req, res, next) {
		try {
			const writers = await Writer.find();

			return res.send({ writers });
		} catch (e) {
			next(e);
		}
	}

	async show(req, res, next) {
		try {
			const writer = await Writer.findOne({ _id: req.params.id })
				.select('_id movies name')
				.populate({ path: 'movies', select: 'title posters price salePrice' });
			return res.send({ writer });
		} catch (e) {
			next(e);
		}
	}

	async update(req, res, next) {
		const { name, movies } = req.body;
		try {
			const writer = await Writer.findById(req.params.id);

			if (name) writer.name = name;
			if (movies) writer.movies = movies;

			await writer.save();
			return res.send({ writer });
		} catch (e) {
			next(e);
		}
	}

	// DELETE /:id
	async delete(req, res, next) {
		try {
			const writer = await Writer.findById(req.params.id);

			let _movies = await Movie.find({ _id: { $in: writer.movies } });

			_movies = await Promise.all(
				_movies.map(async movie => {
					movie.writers = movie.writers.filter(item => item.toString() !== writer._id.toString());
					await movie.save();
				})
			);

			await writer.remove();
			return res.send({ deleted: true });
		} catch (e) {
			next(e);
		}
	}

	/**
	 * MOVIES
	 */

	// GET /:id/movies
	async showMovies(req, res, next) {
		const { offset, limit } = req.query;
		try {
			const movies = await Movie.paginate(
				{ writers: req.params.id },
				{ offset: Number(offset) || 0, limit: Number(limit) || 30 }
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = WriterController;

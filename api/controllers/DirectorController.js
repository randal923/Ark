const mongoose = require('mongoose');

const Director = mongoose.model('Director');
const Movie = mongoose.model('Movie');

class DirectorController {
	async create(req, res, next) {
		const { name, movies } = req.body;
		try {
			const director = new Director({ name });

			if (movies) {
				await Promise.all(
					movies.map(async id => {
						const movie = await Movie.findById(id);
						movie.directors.push(director._id.toString());
						await movie.save();
					})
				);
			}

			await director.save();
			return res.send({ director });
		} catch (e) {
			next(e);
		}
	}

	async index(req, res, next) {
		try {
			const directors = await Director.find();

			return res.send({ directors });
		} catch (e) {
			next(e);
		}
	}

	async show(req, res, next) {
		try {
			const director = await Director.findOne({ _id: req.params.id })
				.select('_id movies name')
				.populate({ path: 'movies', select: 'title posters price salePrice' });
			return res.send({ director });
		} catch (e) {
			next(e);
		}
	}

	async update(req, res, next) {
		const { name, movies } = req.body;
		try {
			const director = await Director.findById(req.params.id);

			if (name) director.name = name;
			if (movies) director.movies = movies;

			await director.save();
			return res.send({ director });
		} catch (e) {
			next(e);
		}
	}

	// DELETE /:id
	async delete(req, res, next) {
		try {
			const director = await Director.findById(req.params.id);

			let _movies = await Movie.find({ _id: { $in: director.movies } });

			_movies = await Promise.all(
				_movies.map(async movie => {
					movie.directors = movie.directors.filter(item => item.toString() !== director._id.toString());
					await movie.save();
				})
			);

			await director.remove();
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
				{ directors: req.params.id },
				{ offset: Number(offset) || 0, limit: Number(limit) || 30 }
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = DirectorController;

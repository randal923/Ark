const mongoose = require('mongoose');

const Genre = mongoose.model('Genre');
const Movie = mongoose.model('Movie');

class GenreController {
	// POST /
	async create(req, res, next) {
		const { name, movies } = req.body;
		try {
			const genre = await new Genre({ name });

			if (movies) {
				await Promise.all(
					movies.map(async id => {
						const movie = await Movie.findById(id);
						movie.genre.push(genre._id.toString());
						await movie.save();
					})
				);
			}

			await genre.save();
			res.send({ genre });
		} catch (e) {
			next(e);
		}
	}

	// GET /
	async index(req, res, next) {
		try {
			const genres = await Genre.find().select('_id movies name');
			res.send({ genres });
		} catch (e) {
			next(e);
		}
	}

	// GET /:id
	async show(req, res, next) {
		try {
			const genre = await Genre.findOne({ _id: req.params.id });
			return res.send({ genre });
		} catch (e) {
			next(e);
		}
	}

	// PUT /:id
	async update(req, res, next) {
		const { name, movies } = req.body;
		try {
			const genre = await Genre.findById(req.params.id);

			if (name) genre.name = name;
			if (movies) genre.movies = movies;

			await genre.save();
			return res.send({ genre });
		} catch (e) {
			next(e);
		}
	}

	// DELETE /:id
	async delete(req, res, next) {
		try {
			const genre = await Genre.findById(req.params.id);

			let _movies = await Movie.find({ _id: { $in: genre.movies } });

			_movies = await Promise.all(
				_movies.map(async movie => {
					movie.genre = movie.genre.filter(item => item.toString() !== genre._id.toString());
					await movie.save();
				})
			);

			await genre.remove();
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
				{ genre: req.params.id },
				{ offset: Number(offset) || 0, limit: Number(limit) || 30 }
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = GenreController;

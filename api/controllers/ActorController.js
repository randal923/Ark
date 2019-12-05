const mongoose = require('mongoose');

const Actor = mongoose.model('Actor');
const Movie = mongoose.model('Movie');

class ActorController {
	async create(req, res, next) {
		const { name, movies } = req.body;
		try {
			const actor = new Actor({ name, movies });

			if (movies) {
				await Promise.all(
					movies.map(async id => {
						const movie = await Movie.findById(id);
						movie.actors.push(actor._id.toString());
						await movie.save();
					})
				);
			}

			await actor.save();
			return res.send({ actor });
		} catch (e) {
			next(e);
		}
	}

	async index(req, res, next) {
		try {
			const actors = await Actor.find();

			return res.send({ actors });
		} catch (e) {
			next(e);
		}
	}

	async show(req, res, next) {
		try {
			const actor = await Actor.findOne({ _id: req.params.id })
				.select('_id movies name')
				.populate({ path: 'movies', select: 'title posters price salePrice' });
			return res.send({ actor });
		} catch (e) {
			next(e);
		}
	}

	async update(req, res, next) {
		const { name, movies } = req.body;
		try {
			const actor = await Actor.findById(req.params.id);

			if (name) actor.name = name;
			if (movies) actor.movies = movies;

			await actor.save();
			return res.send({ actor });
		} catch (e) {
			next(e);
		}
	}

	// DELETE /:id
	async delete(req, res, next) {
		try {
			const actor = await Actor.findById(req.params.id);

			let _movies = await Movie.find({ _id: { $in: actor.movies } });

			_movies = await Promise.all(
				_movies.map(async movie => {
					movie.actors = movie.actors.filter(item => item.toString() !== actor._id.toString());
					await movie.save();
				})
			);

			await actor.remove();
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
				{ actors: req.params.id },
				{ offset: Number(offset) || 0, limit: Number(limit) || 30 }
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = ActorController;

const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');
const Genre = mongoose.model('Genre');
const Director = mongoose.model('Director');
const Writer = mongoose.model('Writer');
const Actor = mongoose.model('Actor');

const getSort = sortType => {
	switch (sortType) {
		case 'alphabetical_a-z':
			return { title: 1 };
		case 'alphabetical_z-a':
			return { title: -1 };
		case 'lowest-to-highest':
			return { price: 1 };
		case 'highest-to-lowest':
			return { price: -1 };
		default:
			return {};
	}
};

class MovieController {
	// ADMIN

	// POST / - create
	async create(req, res, next) {
		const {
			title,
			releasedate,
			availability,
			duration,
			subtitles,
			genre,
			directors,
			writers,
			actors,
			country,
			price,
			salePrice,
			description,
		} = req.body;

		try {
			const movie = new Movie({
				title,
				releasedate,
				availability,
				duration,
				subtitles,
				country,
				genre,
				directors,
				actors,
				writers,
				price,
				salePrice,
				description,
			});

			// Push directors to movies
			Promise.all(
				directors.map(async id => {
					const director = await Director.findById(id);
					director.movies.push(movie._id);

					await director.save();
				})
			);

			// Push genres tom movies
			Promise.all(
				genre.map(async id => {
					const genre = await Genre.findById(id);
					genre.movies.push(movie._id);

					await genre.save();
				})
			);

			// Push actors to movies
			Promise.all(
				actors.map(async id => {
					const actor = await Actor.findById(id);
					actor.movies.push(movie._id);

					await actor.save();
				})
			);

			// Push writers to movies
			Promise.all(
				writers.map(async id => {
					const writer = await Writer.findById(id);
					writer.movies.push(movie._id);

					await writer.save();
				})
			);

			await movie.save();

			return res.send({ movie });
		} catch (e) {
			next(e);
		}
	}

	// PUT /:id

	async update(req, res, next) {
		const {
			title,
			releasedate,
			availability,
			duration,
			posters,
			country,
			subtitles,
			price,
			salePrice,
			description,
			genre,
			writers,
			directors,
			actors,
		} = req.body;

		try {
			const movie = await Movie.findById(req.params.id);
			if (!movie) return res.status(400).send({ error: 'Movie not found' });

			if (title) movie.title = title;
			if (releasedate) movie.releasedate = releasedate;
			if (availability !== undefined) movie.availability = availability;
			if (duration) movie.duration = duration;
			if (posters) movie.posters = posters;
			if (country) movie.country = country;
			if (subtitles) movie.subtitles = subtitles;
			if (price) movie.price = price;
			if (salePrice) movie.sale = sale;
			if (description) movie.description = description;
			if (genre) movie.genre = genre;
			if (writers) movie.writers = writers;
			if (directors) movie.directors = directors;
			if (actors) movie.actors = actors;

			await movie.save();

			return res.send({ movie });
		} catch (e) {
			next(e);
		}
	}

	// PUT /images/:id
	async updateImages(req, res, next) {
		try {
			const movie = await Movie.findOne({ _id: req.params.id });
			if (!movie) return res.status(400).send({ error: 'Movie not found' });

			const newImages = req.files.map(item => item.filename);
			movie.posters = movie.posters.filter(item => item).concat(newImages);

			await movie.save();

			return res.send({ movie });
		} catch (e) {
			next(e);
		}
	}

	// DELETE /:id
	async delete(req, res, next) {
		try {
			const movie = await Movie.findOne({ _id: req.params.id });
			if (!movie) return res.status(400).send({ error: 'Movie not found' });

			let _genres = await Genre.find({ _id: { $in: movie.genre } });

			_genres = await Promise.all(
				_genres.map(async genre => {
					genre.movies = genre.movies.filter(item => item.toString() !== movie._id.toString());
					await genre.save();
					return genre;
				})
			);

			let _directors = await Director.find({ _id: { $in: movie.directors } });

			_directors = await Promise.all(
				_directors.map(async director => {
					director.movies = director.movies.filter(item => item.toString() !== movie._id.toString());
					await director.save();
					return director;
				})
			);

			await movie.remove();
			return res.send({ deleted: true });
		} catch (e) {
			next(e);
		}
	}

	// VISITOR

	// GET /
	async index(req, res, next) {
		const offset = Number(req.query.offset) || 0;
		const limit = Number(req.query.limit) || 30;
		try {
			const movies = await Movie.paginate(
				{},
				{
					offset,
					limit,
					sort: getSort(req.query.sortType),
					populate: ['genre'],
				}
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}

	// GET /search/:search
	async search(req, res, next) {
		const offset = Number(req.query.offset) || 0;
		const limit = Number(req.query.limit) || 30;
		const search = new RegExp(req.params.search, 'i');
		try {
			const movies = await Movie.paginate(
				{
					$or: [{ title: { $regex: search } }, { description: { $regex: search } }],
				},
				{ offset, limit, sort: getSort(req.query.sortType), populate: ['genre'] }
			);

			return res.send({ movies });
		} catch (e) {
			next(e);
		}
	}

	// GET /:id
	async show(req, res, next) {
		try {
			const movie = await Movie.findById(req.params.id).populate('genre writers directors actors');

			return res.send({ movie });
		} catch (e) {
			next(e);
		}
	}

	// REVIEWS
	// GET /:id/reviews - showReviews
	async showReviews(req, res, next) {
		try {
			const reviews = await Review.find({ movie: req.params.id });
			return res.send({ reviews });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = MovieController;

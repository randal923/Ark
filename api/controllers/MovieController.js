const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");

const getSort = sortType => {
  switch (sortType) {
    case "alphabetical_a-z":
      return { title: 1 };
    case "alphabetical_z-a":
      return { title: -1 };
    case "lowest-to-highest":
      return { price: 1 };
    case "highest-to-lowest":
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
      country,
      price,
      salePrice,
      description
    } = req.body;

    try {
      const movie = new Movie({
        title,
        releasedate,
        availability,
        duration,
        country,
        price,
        salePrice,
        description
      });

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
      country,
      price,
      salePrice,
      description
    } = req.body;

    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(400).send({ error: "Movie not found" });

      if (title) movie.title = title;
      if (releasedate) movie.releasedate = releasedate;
      if (availability !== undefined) movie.availability = availability;
      if (duration) movie.duration = duration;
      if (country) movie.country = country;
      if (price) movie.price = price;
      if (salePrice) movie.sale = sale;
      if (description) movie.description = description;

      await movie.save();

      return res.send({ movie });
    } catch (e) {
      next(e);
    }
  }

  // PUT /images/:id
  async updateImages(req, res, next) {
    try {
      const movie = await Movie.findOne({ _id: req.params.id});
      if (!movie) return res.status(400).send({ error: "Movie not found" });

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
      const movie = await Movie.findOne({ _id: req.params.id});
      if (!movie) return res.status(400).send({ error: "Movie not found" });

      /*
      const category = await Category.findById(movie.category);
      if (category) {
        category.movies.filter(item => item !== movie._id);

        await category.save();
      }
      */

      movie.remove();

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
        { offset, limit, sort: getSort(req.query.sortType) }
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
    const search = new RegExp(req.params.search, "i");
    try {
      const movies = await Movie.paginate(
        {
          title: { $regex: search },
          description: { $regex: search },
          sku: { $regex: search } 
        },
        { offset, limit, sort: getSort(req.query.sortType) }
      );

      return res.send({ movies });
    } catch (e) {
      next(e);
    }
  }

  // GET /:id
  async show(req, res, next) {
    try {
      const movie = await Movie.findById(req.params.id).populate([
        //"reviews",
        //"variations",
        //"staff"
      ]);

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
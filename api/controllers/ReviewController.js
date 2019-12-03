const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");
const User = mongoose.model("User");
const Review = mongoose.model("Review");

class ReviewController {

  // GET /
  async index(req, res, next) {
    const { movie, user } = req.query;
    try {
      const reviews = await Review.find({ $or: [{ movie }, { user }] });

      return res.send({ reviews });
    } catch (e) {
      next(e);
    }
  }

  // GET /:id
  async show(req, res, next) {
    const { movie, user } = req.query;
    const { id: _id } = req.params;

    try {
      const review = await Review.findOne({ _id, $or: [{ movie }, { user }] });
      return res.send({ review });
    } catch (e) {
      next(e);
    }
  }

  // POST /
  async create(req, res, next) {
    const { text, stars } = req.body;
    const { movie, user } = req.query;


    try {
      const review = new Review({ name: req.payload.name, text, stars, movie, user });

      const _movie = await Movie.findById(movie);
      if (!_movie) return res.status(422).send({ error: "Movie doesn't exist." });

      const _user = await User.findById(user);
      if (!_user) return res.status(422).send({ error: "User not logged in." });

      _user.reviews.push(review._id);
      _movie.reviews.push(review._id);

      await _user.save();
      await _movie.save();
      await review.save();

      return res.send({ review });
    } catch (e) {
      next(e);
    }
  }

  // DELETE /:id
  async delete(req, res, next) {
    try {
      const review = await Review.findById(req.params.id);
      const movie = await Movie.findById(review.movie);
      const user = await User.findById(review.user);

      if (!user.reviews.includes(req.params.id)) return res.status(401).send({ error: "User not authorized to edit this review." });


      user.reviews = movie.reviews.filter(
        item => item.toString() !== review._id.toString()
      );

      movie.reviews = movie.reviews.filter(
        item => item.toString() !== review._id.toString()
      );

      await movie.save();
      await user.save();
      await review.remove();

      return res.send({ deleted: true });
    } catch (e) {
      next(e);
    }
  }

  // PUT /:id
  async update(req, res, next) {
    const { text, stars } = req.body;

    try {
      const review = await Review.findById(req.params.id);
      if (!review) return res.status(400).send({ error: "Review not found" });
      const user = await User.findById(review.user);

      if (!user.reviews.includes(req.params.id)) return res.status(401).send({ error: "User not authorized to edit this review." });

      if (text) review.text = text;
      if (stars) review.stars = stars;


      await review.save();

      return res.send({ review });
    } catch (e) {
      next(e);
    }
  }

}

module.exports = ReviewController;
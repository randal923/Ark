const router = require("express").Router();
const GenreController = require("../../../controllers/GenreController");
const auth = require("../../auth");

const genreController = new GenreController();

// Visitor
router.get("/", genreController.index);
router.get("/:id", genreController.show);

// Admin
router.post("/", auth.required, auth.admin, genreController.create);
router.put("/:id", auth.required, auth.admin, genreController.update);
router.delete("/:id", auth.required, auth.admin, genreController.delete);

// Routes to movies
router.get("/:id/movies", genreController.showMovies);
router.put("/:id/movies", auth.required, auth.admin, genreController.updateMovies);

module.exports = router;
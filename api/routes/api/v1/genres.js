const router = require('express').Router();
const GenreController = require('../../../controllers/GenreController');
const auth = require('../../auth');

// Validations
const Validation = require('express-validation');
const { GenreValidation } = require('../../../controllers/validations/GenreValidation');

const genreController = new GenreController();

// Visitor
router.get('/', genreController.index);
router.get('/:id', Validation(GenreValidation.show), genreController.show);

// Admin
router.post('/', auth.required, Validation(GenreValidation.create), auth.admin, genreController.create);
router.put('/:id', auth.required, auth.admin, Validation(GenreValidation.update), genreController.update);
router.delete('/:id', auth.required, auth.admin, Validation(GenreValidation.delete), genreController.delete);

// Routes to movies
router.get('/:id/movies', Validation(GenreValidation.showMovies), genreController.showMovies);

module.exports = router;

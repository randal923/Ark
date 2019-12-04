const router = require('express').Router();
const DirectorController = require('../../../controllers/DirectorController');
const auth = require('../../auth');

// Validations
const Validation = require('express-validation');
const { DirectorValidation } = require('../../../controllers/validations/DirectorValidation');

const directorController = new DirectorController();

// Visitor
router.get('/', directorController.index);
router.get('/:id', Validation(DirectorValidation.show), directorController.show);

// Admin
router.post('/', auth.required, auth.admin, Validation(DirectorValidation.create), directorController.create);
router.put('/:id', auth.required, auth.admin, Validation(DirectorValidation.update), directorController.update);
router.delete('/:id', auth.required, auth.admin, Validation(DirectorValidation.delete), directorController.delete);

// Route to Movies
router.get('/:id/movies', Validation(DirectorValidation.showMovies), directorController.showMovies);

module.exports = router;

const router = require('express').Router();
const WriterController = require('../../../controllers/WriterController');
const auth = require('../../auth');

// Validations
const Validation = require('express-validation');
const { WriterValidation } = require('../../../controllers/validations/WriterValidation');

const writerController = new WriterController();

// Visitor
router.get('/', writerController.index);
router.get('/:id', Validation(WriterValidation.show), writerController.show);

// Admin
router.post('/', auth.required, auth.admin, Validation(WriterValidation.create), writerController.create);
router.put('/:id', auth.required, auth.admin, Validation(WriterValidation.update), writerController.update);
router.delete('/:id', auth.required, auth.admin, Validation(WriterValidation.delete), writerController.delete);

// Route to Movies
router.get('/:id/movies', Validation(WriterValidation.showMovies), writerController.showMovies);

module.exports = router;

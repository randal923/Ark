const router = require('express').Router();
const MovieController = require('../../../controllers/MovieController');
const auth = require('../../auth');
const upload = require('../../../config/multer');

// Validations
const Validation = require('express-validation');
const { MovieValidation } = require('../../../controllers/validations/MovieValidation');

const movieController = new MovieController();

// ADMIN
router.post('/', auth.required, auth.admin, Validation(MovieValidation.create), movieController.create);
router.put('/:id', auth.required, auth.admin, Validation(MovieValidation.update), movieController.update);
router.put(
	'/images/:id',
	auth.required,
	auth.admin,
	Validation(MovieValidation.updateImages),
	upload.array('files', 4),
	movieController.updateImages
);
router.delete('/:id', auth.required, auth.admin, Validation(MovieValidation.delete), movieController.delete);

// CUSTOMER
router.get('/', movieController.index);
router.get('/search/:search', Validation(MovieValidation.search), movieController.search);
router.get('/:id', Validation(MovieValidation.show), movieController.show);

// REVIEWS
router.get('/:id/reviews', Validation(MovieValidation.showReviews), movieController.showReviews);
module.exports = router;

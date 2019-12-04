const router = require('express').Router();
const ReviewController = require('../../../controllers/ReviewController');
const auth = require('../../auth');

// Validations
const Validation = require('express-validation');
const { ReviewValidation } = require('../../../controllers/validations/ReviewValidation');

const reviewController = new ReviewController();

// VISITORS
router.get('/', Validation(ReviewValidation.index), reviewController.index);
router.get('/:id', Validation(ReviewValidation.show), reviewController.show);

// Users
router.post('/', auth.required, Validation(ReviewValidation.create), reviewController.create);
router.put('/:id', auth.required, Validation(ReviewValidation.update), reviewController.update);
router.delete('/:id', auth.required, Validation(ReviewValidation.delete), reviewController.delete);

module.exports = router;

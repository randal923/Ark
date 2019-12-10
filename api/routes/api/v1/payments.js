const router = require('express').Router();

const PaymentController = require('../../../controllers/PaymentController');
const auth = require('../../auth');

//Validation
const Validation = require('express-validation');
//const { PaymentValidation } = require('../../../controllers/validations/paymentValidation');

const paymentController = new PaymentController();
router.get('/', paymentController.payment);
router.post('/charge/:id', paymentController.charge);

module.exports = router;

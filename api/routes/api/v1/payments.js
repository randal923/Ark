const router = require('express').Router();

const PaymentController = require('../../../controllers/PaymentController');
const auth = require('../../auth');

//Validation
const Validation = require('express-validation');
//const { PaymentValidation } = require('../../../controllers/validations/paymentValidation');

const paymentController = new PaymentController();


module.exports = router;

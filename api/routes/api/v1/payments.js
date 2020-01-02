const router = require('express').Router();

const PaymentController = require('../../../controllers/PaymentController');
const auth = require('../../auth');

//Validation
const Validation = require('express-validation');
//const { PaymentValidation } = require('../../../controllers/validations/paymentValidation');

const paymentController = new PaymentController();
router.get('/', paymentController.payment);
router.get('/:id', paymentController.show);
router.post('/charge/:id', paymentController.charge);

// ADMIN
router.put('/:id', auth.required, auth.admin, paymentController.update);
module.exports = router;

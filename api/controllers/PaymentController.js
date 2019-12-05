const mongoose = require('mongoose');
const stripe = require('stripe')('sk_test_GR18qvv1tSMa4TmzdFVXnElO00cZU5pb61');

//const EmailController = require('./emailController');

const Payment = mongoose.model('Payment');
const Movie = mongoose.model('Movie');
const Order = mongoose.model('Order');
const OrderRegistration = mongoose.model('OrderRegistration');

class PaymentController {
}

module.exports = PaymentController;

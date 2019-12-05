const router = require('express').Router();
const auth = require('../../auth');
const OrderController = require('../../../controllers/OrderController');

// Validation
const Validation = require('express-validation');

const orderController = new OrderController();

// ADMIN
router.get('/admin', auth.required, auth.admin, orderController.indexAdmin);
router.get('/admin/:id', auth.required, auth.admin, orderController.showAdmin);

router.delete('/admin/:id', auth.required, auth.admin, orderController.deleteAdmin);

// -- cart
router.get('/admin/:id/cart', auth.required, auth.admin, orderController.showCartOrderAdmin);

// CLIENTE
router.get('/', auth.required, orderController.index);
router.get('/:id', auth.required, orderController.show);

router.post('/', auth.required, orderController.create);
router.delete('/:id', auth.required, orderController.delete);

// -- cart
router.get('/:id/cart', auth.required, orderController.showCartOrder);

module.exports = router;

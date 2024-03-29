const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));
router.use('/genres', require('./genres'));
router.use('/reviews', require('./reviews'));
router.use('/directors', require('./directors'));
router.use('/writers', require('./writers'));
router.use('/actors', require('./actors'));
router.use('/orders', require('./orders'));
router.use('/payments', require('./payments'));

module.exports = router;

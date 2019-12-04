const router = require('express').Router();
const auth = require('../../auth');
const UserController = require('../../../controllers/UserController');
const Validation = require('express-validation');
const { UserValidation } = require('../../../controllers/validations/UserValidation');
const userController = new UserController();

// Visitor
router.post('/register', Validation(UserValidation.create), userController.create);
router.post('/login', Validation(UserValidation.login), userController.login);

router.get('/', auth.required, userController.index);
router.get('/:id', auth.required, Validation(UserValidation.show), userController.show);

router.put('/', auth.required, Validation(UserValidation.update), userController.update);

router.delete('/:id', auth.required, Validation(UserValidation.delete), userController.delete);

module.exports = router;

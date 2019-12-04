const router = require('express').Router();
const ActorController = require('../../../controllers/ActorController');
const auth = require('../../auth');

// Validations
const Validation = require('express-validation');
const { ActorValidation } = require('../../../controllers/validations/ActorValidation');

const actorController = new ActorController();

// Visitor
router.get('/', actorController.index);
router.get('/:id', Validation(ActorValidation.show), actorController.show);

// Admin
router.post('/', auth.required, auth.admin, Validation(ActorValidation.create), actorController.create);
router.put('/:id', auth.required, auth.admin, Validation(ActorValidation.update), actorController.update);
router.delete('/:id', auth.required, auth.admin, Validation(ActorValidation.delete), actorController.delete);

// Route to Movies
router.get('/:id/movies', Validation(ActorValidation.showMovies), actorController.showMovies);

module.exports = router;

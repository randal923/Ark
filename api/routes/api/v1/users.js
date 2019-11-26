const router = require("express").Router();
const auth = require("../../auth");
const UserController = require("../../../controllers/UserController");

const userController = new UserController();

// Visitor
router.post("/register", userController.create);
router.post("/login", userController.login);

router.get("/", auth.required, userController.index);
router.get("/:id", auth.required, userController.show);

router.put("/", auth.required, userController.update);

router.delete("/", auth.required, userController.delete);

module.exports = router;
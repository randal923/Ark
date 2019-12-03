const router = require("express").Router();
const DirectorController = require("../../../controllers/DirectorController");
const auth = require("../../auth");

const directorController = new DirectorController();

// Visitor
router.get("/", directorController.index);
router.get("/:id", directorController.show);

// Admin
router.post("/", auth.required, auth.admin, directorController.create);
router.put("/:id", auth.required, auth.admin, directorController.update);
router.delete("/:id", auth.required, auth.admin, directorController.delete);

module.exports = router;
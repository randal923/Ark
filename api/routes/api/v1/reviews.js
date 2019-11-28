const router = require("express").Router();
const ReviewController = require("../../../controllers/ReviewController");
const auth = require("../../auth");

const reviewController = new ReviewController();

// VISITORS
router.get("/", reviewController.index);
router.get("/:id", reviewController.show);

// Users
router.post("/", auth.required, reviewController.create);
router.put("/:id", auth.required, reviewController.update);
router.delete("/:id", auth.required, reviewController.delete);

module.exports = router;
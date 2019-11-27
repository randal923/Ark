const router = require("express").Router();
const MovieController = require("../../../controllers/MovieController");
const auth = require("../../auth");
const upload = require("../../../config/multer");

const movieController = new MovieController();

// ADMIN
router.post("/", auth.required, auth.admin, movieController.create);
router.put("/:id", auth.required, auth.admin, movieController.update);
router.put("/images/:id", auth.required, auth.admin, upload.array("files", 4), movieController.updateImages);
router.delete("/:id", auth.required, auth.admin, movieController.delete);

// CUSTOMER
router.get("/", movieController.index);
router.get("/search/:search", movieController.search);
router.get("/:id", movieController.show);

// REVIEWS
router.get("/:id/reviews", movieController.showReviews);
module.exports = router;
const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/movies", require("./movies"));
router.use("/genres", require("./genres"));
router.use("/reviews", require("./reviews"));

module.exports = router;
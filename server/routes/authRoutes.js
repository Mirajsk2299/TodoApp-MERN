const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, require("../controllers/authController").me);

module.exports = router;

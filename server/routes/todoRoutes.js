const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.get("/", auth, getTodos);
router.post("/", auth, addTodo);
router.delete("/:id", auth, deleteTodo);
router.put("/:id", auth, updateTodo);

module.exports = router;

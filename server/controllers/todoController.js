const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.userId });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    user: req.userId,
  });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title }, // update title
      { new: true } // return updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

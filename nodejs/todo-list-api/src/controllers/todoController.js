const TodoService = require("../services/todoService");

exports.get = async (req, res) => {
  let id = req.params.id;
  try {
    const todo = await TodoService.getTodoById(id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodos();
    if (!todos) {
      return res.status(404).json("There is no todos available");
    }
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.add = async (req, res) => {
  try {
    const todo = await TodoService.createTodo(req.body);
    if (!todo) {
      return res.status(404).json("There is no todos available");
    }
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.update = async (req, res) => {
  let id = req.params.id;
  try {
    const t = {};
    t.title = req.body.title;
    t.description = req.body.description;
    t.status = req.body.status;

    const updatedTodo = await TodoService.updateTodo(id, t);

    if (updatedTodo.nModified === 0) {
      return res.status(404).json({});
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.delete = async (req, res) => {
  let id = req.params.id;

  try {
    const deleteResponse = await TodoService.deleteTodo(id);
    res.json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

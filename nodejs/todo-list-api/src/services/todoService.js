const Todo = require("../models/todo");

module.exports = class TodoService {
  static async getTodoById(todoId) {
    try {
      return await Todo.findById({ _id: todoId });
    } catch (error) {
      console.log(`Something goes wrong ${error}`);
    }
  }

  static async getAllTodos() {
    try {
      return await Todo.find();
    } catch (error) {
      console.log(`Something goes wrong ${error}`);
    }
  }

  static async createTodo(todo) {
    try {
      const t = {
        title: todo.title,
        description: todo.description,
        status: todo.status,
      };
      return await new Todo(t).save();
    } catch (error) {
      console.log(`Something goes wrong ${error}`);
    }
  }

  static async updateTodo(id, todo) {
    try {
      return await Todo.updateOne({ _id: id }, { ...todo });
    } catch (error) {
      console.log(`Something goes wrong ${error}`);
    }
  }

  static async deleteTodo(todoId) {
    try {
      const deletedResponse = await Todo.findOneAndDelete({ _id: todoId });
      return deletedResponse;
    } catch (error) {
      console.log(`Something goes wrong ${error}`);
    }
  }
};

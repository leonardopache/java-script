const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = doc._id;
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

module.exports = Todo = mongoose.model("todos", todoSchema);

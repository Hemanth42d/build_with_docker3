const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    minLen: 5,
    required: true,
  },
  isDone: {
    type: Boolean,
  },
  priority: {
    type: String,
  },
});

module.exports = mongoose.model("task", taskSchema);

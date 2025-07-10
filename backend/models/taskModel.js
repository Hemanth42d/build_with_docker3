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
});

module.exports = mongoose.model("task", taskSchema);

const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    minLen: 5,
    required: true,
  },
  description: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
  priority: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);

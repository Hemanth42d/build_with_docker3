const taskModel = require("../models/taskModel");

module.exports.addTodo = async (req, res) => {
  try {
    let { title, description, priority, isDone } = req.body;
    if (!title) {
      return res.status(400).json({
        error: true,
        message: "Title is required",
      });
    }

    const task = await taskModel.create({
      title,
      description,
      priority: priority || "none",
      isDone: isDone || false,
      userId: req.user._id,
    });

    res.status(201).json({
      error: false,
      task,
      message: "Task added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel
      .find({
        userId: req.user._id,
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      error: false,
      tasks,
      message: "All tasks retrieved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports.deleteTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const task = await taskModel.findOne({
      _id: taskId,
      userId: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        error: true,
        message: "Task not found",
      });
    }

    await taskModel.findByIdAndDelete(taskId);

    return res.status(200).json({
      error: false,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

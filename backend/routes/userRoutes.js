const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authControllers");
const {
  getAllTasks,
  addTodo,
  deleteTask,
  toggleTaskStatus,
} = require("../controllers/todoControllers");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express();

router.post("/", loginUser);
router.post("/signup", registerUser);
router.post("/logout", logout);
router.post("/addTodo", isLoggedIn, addTodo);
router.get("/getAllTasks", isLoggedIn, getAllTasks);
router.delete("/delete-task/:taskId", isLoggedIn, deleteTask);
router.patch("/toggle-task/:taskId", isLoggedIn, toggleTaskStatus);

module.exports = router;

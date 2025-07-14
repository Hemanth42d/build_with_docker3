import TodoInputsSection from "../components/TodoInputsSection";
import TodoSection from "../components/TodoSection";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllTasks = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/getAllTasks");

      console.log("API Response:", response.data);
      console.log("Tasks received:", response.data.tasks);

      setTasks(response.data.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to fetch tasks");
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  };

  const addTaskToState = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    toast.success("Task added successfully!");
  };

  const deleteTaskFromState = async (taskId) => {
    try {
      await axiosInstance.delete(`/delete-task/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully!");
      console.log("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
      setError("Failed to delete task");
    }
  };
  const toggleTaskStatus = async (taskId) => {
    const taskToToggle = tasks.find((task) => task._id === taskId);

    try {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, isDone: !task.isDone } : task
        )
      );
      const response = await axiosInstance.patch(`/toggle-task/${taskId}`);
      console.log("Task toggled successfully:", response.data.message);
      const newStatus = !taskToToggle.isDone;
      toast.success(`Task marked as ${newStatus ? "completed" : "pending"}!`);
      if (response.data.task) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? response.data.task : task
          )
        );
      }
    } catch (error) {
      console.error("Error toggling task:", error);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, isDone: !task.isDone } : task
        )
      );

      toast.error("Failed to update task");
      setError("Failed to update task");
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full w-full bg-gray-100 flex justify-center items-center">
        <p className="text-lg">Loading tasks...</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-full w-full bg-gray-100 flex justify-center items-center gap-1">
        <div className="w-1/4 h-full rounded-md">
          <TodoInputsSection onTaskAdded={addTaskToState} />
        </div>
        <div className="w-3/4 h-full bg-amber-100 rounded-md">
          {error && (
            <div className="p-4 text-center text-red-500 mb-4">
              {error}
              <button
                onClick={() => setError("")}
                className="ml-2 text-blue-500 underline"
              >
                Dismiss
              </button>
            </div>
          )}
          <TodoSection
            data={tasks}
            onDeleteTask={deleteTaskFromState}
            onToggleTask={toggleTaskStatus}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;

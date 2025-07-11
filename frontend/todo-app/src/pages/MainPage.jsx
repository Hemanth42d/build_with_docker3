import TodoInputsSection from "../components/TodoInputsSection";
import TodoSection from "../components/TodoSection";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [isDone, setIsDone] = useState(false);

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
  };

  const createTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      console.log(description);
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/addTodo`,
        {
          title: title.trim(),
          description,
          priority,
          isDone,
        },
        {
          withCredentials: true,
        }
      );
      // console.log("Task created:", response.data.task);
      if (onTaskAdded) {
        onTaskAdded(response.data.task);
      }
      setTitle("");
      setDescription("");
      setPriority("medium");
      setIsDone(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create task";
      setError(errorMessage);
      console.error("Error creating task:", error);
    } finally {
      setIsLoading(false);
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
          <TodoInputsSection
            onTaskAdded={addTaskToState}
            createTask={createTask}
            title={title}
            description={description}
            isDone={isDone}
            priority={priority}
            isLoading={isLoading}
            error={error}
          />
        </div>
        <div className="w-3/4 h-full bg-amber-100 rounded-md">
          {error ? (
            <div className="p-4 text-center text-red-500">{error}</div>
          ) : (
            <TodoSection data={tasks} />
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;

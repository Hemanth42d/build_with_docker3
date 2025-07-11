import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const TodoInputsSection = ({
  onTaskAdded,
  createTask,
  title,
  description,
  isDone,
  priority,
  isLoading,
  error,
}) => {
  return (
    <>
      <div className="flex justify-center items-start pt-10 h-full w-full">
        <form onSubmit={createTask} className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            className="border-1 p-2 mx-5 rounded-md outline-none text-lg"
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
            required
          />
          <textarea
            placeholder="Enter Description"
            value={description}
            rows={4}
            cols={10}
            className="border-1 p-2 mx-5 rounded-md outline-none text-lg resize-none"
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoading}
          />
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mx-5 border-1 cursor-pointer p-2 rounded-md outline-none"
            disabled={isLoading}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          {error && (
            <p className="text-center my-2 text-red-500 mx-5">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 mx-5 p-2 text-white text-lg rounded-md cursor-pointer hover:bg-blue-600 hover:transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating..." : "Create Todo"}
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInputsSection;

import { useState } from "react";

const TodoInputsSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <>
      <div className="flex justify-center items-start pt-10 h-full w-full">
        <form action="" className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="Enter Title"
            className="border-1 p-2 mx-5 rounded-md outline-none text-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter Description"
            rows={4}
            cols={10}
            className="border-1 p-2 mx-5 rounded-md outline-none text-lg resize-none"
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mx-5 border-1 cursor-pointer p-2 rounded-md outline-none"
          >
            <option value="none">Priority (None)</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 mx-5 p-2 text-white text-lg rounded-md cursor-pointer hover:bg-blue-600 hover:transition-colors"
          >
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInputsSection;

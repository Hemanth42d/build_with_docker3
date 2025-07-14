import { Trash2, Check, X } from "lucide-react";

const TodoSection = ({ data, onDeleteTask, onToggleTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-600 text-white";
      case "medium":
        return "bg-orange-500 text-white";
      case "low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="p-2 h-full w-full flex justify-center items-center rounded-md">
        <p className="text-lg text-gray-500">
          No tasks found. Create your first task!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="p-2 h-full w-full flex flex-col rounded-md">
        <h2 className="text-xl font-bold text-center mb-4">Your Tasks</h2>
        <div className="flex-1 overflow-y-auto">
          {data.map((task) => (
            <div
              key={task._id}
              className={`border-1 mt-3 w-3/4 mx-auto p-2 rounded-md flex justify-between px-4 items-center transition-all duration-200 ${
                task.isDone
                  ? "bg-green-100 border-green-300"
                  : "bg-orange-200 border-orange-300"
              }`}
            >
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <p
                    className={`text-xl font-semibold transition-all duration-200 ${
                      task.isDone
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </p>
                  <span
                    className={`${getPriorityColor(task.priority)} ${
                      task.isDone ? "opacity-50" : "opacity-100"
                    } px-2 py-1 mr-2 rounded-md font-semibold text-sm transition-opacity duration-200`}
                  >
                    {task.priority || "none"}
                  </span>
                </div>
                {task.description && (
                  <p
                    className={`transition-all duration-200 ${
                      task.isDone
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {task.description}
                  </p>
                )}
              </div>
              <div className="flex gap-3 p-2">
                <Trash2
                  size={35}
                  className="cursor-pointer bg-red-500 text-xl rounded-full text-white p-2 hover:bg-red-600 transition-colors duration-200"
                  onClick={() => {
                    onDeleteTask(task._id);
                  }}
                />
                <div
                  className={`cursor-pointer rounded-full p-2 transition-all duration-200 ${
                    task.isDone
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-400 hover:bg-green-500 text-white"
                  }`}
                  onClick={() => {
                    onToggleTask(task._id);
                  }}
                >
                  {task.isDone ? <Check size={19} /> : <X size={19} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoSection;

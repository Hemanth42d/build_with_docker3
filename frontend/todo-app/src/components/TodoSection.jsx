import { Trash2, Check } from "lucide-react";

const TodoSection = ({ data }) => {
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
        {data.map((task) => (
          <div
            key={task._id || task.title}
            className="border-1 mt-3 w-3/4 bg-orange-200 mx-auto p-2 rounded-md flex justify-between px-4 items-center"
          >
            <div className="flex-1">
              <div className="flex justify-between items-center w-1/4 mb-2">
                <p
                  className={`text-xl font-semibold ${
                    task.isDone && "line-through"
                  } `}
                >
                  {task.title}
                </p>
                <span
                  className={`${getPriorityColor(task.priority)} ${
                    task.isDone && "line-through"
                  } px-2 py-1 mr-2 rounded-md font-semibold text-sm`}
                >
                  {task.priority || "none"}
                </span>
              </div>
              {task.description && (
                <p className={`text-gray-700 ${task.isDone && "line-through"}`}>
                  {task.description}
                </p>
              )}
            </div>
            <div className="flex gap-3 p-2">
              <Trash2
                size={35}
                className="cursor-pointer bg-red-500 text-xl rounded-full text-white p-2 hover:bg-red-600 transition-colors"
              />
              <Check
                size={35}
                className={`cursor-pointer ${
                  task.isDone ? "bg-green-600" : "bg-emerald-500"
                } text-lg rounded-full p-2 hover:bg-green-600 transition-colors`}
                onClick={() => {
                  task.isDone = !task.isDone;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoSection;

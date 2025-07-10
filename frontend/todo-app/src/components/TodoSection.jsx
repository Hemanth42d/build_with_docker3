import { Trash2, Check } from "lucide-react";

const TodoSection = () => {
  const data = [
    {
      title: "Go to Gym",
      description: "Go to gym at 5:30 in the morning",
      priority: "high",
    },
    {
      title: "Go to Gym",
      description: "Go to gym at 5:30 in the morning",
      priority: "low",
    },
  ];
  return (
    <>
      <div className="p-2 h-full w-full flex flex-col rounded-md">
        {data.map((task) => {
          return (
            <>
              <div className="border-1 mt-3 w-3/4 bg-orange-200 mx-auto p-2 rounded-md flex justify-between px-4 items-center">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">{task.title}</p>
                    <p
                      className={`${
                        task.priority === "high"
                          ? "bg-red-600 text-white px-2 mr-2 rounded-md"
                          : "bg-cyan-500 text-white px-2 mr-2 rounded-md"
                      } font-semibold `}
                    >
                      {task.priority}
                    </p>
                  </div>
                  <p>{task.description}</p>
                </div>
                <p className="flex gap-3 p-2 w-[7vw]">
                  <Trash2
                    size={35}
                    className="cursor-pointer bg-red-500 text-xl rounded-full text-white p-2"
                  />
                  <Check
                    size={35}
                    className="cursor-pointer bg-emerald-500 text-lg rounded-full p-2"
                  />
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoSection;

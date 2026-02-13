import React, { useContext, useMemo, memo } from "react";
import { TaskContext } from "../Context/TaskContext";
import UnitTask from "./UnitTask";
import { filterData } from "../Data";

const RenderTasks = () => {
  const { Tasks, setcategory, category, CompTask } = useContext(TaskContext);
  return (
    <>
      <div className="flex gap-4 justify-center mb-8">
        {Tasks.length === 0
          ? null
          : filterData.map((value) => (
              <button
                key={value.id}
                onClick={() => setcategory(value.category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 border${
                  category === value.category
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
                }`}
              >
                {value.category}
              </button>
            ))}
      </div>
      <div>
        {Tasks.length === 0 ? (
          <div>
            {" "}
            <h3>No Task Found</h3>{" "}
          </div>
        ) : category === "all" ? (
          Tasks.map((task) => {
            return <UnitTask key={task.id} task={task} />;
          })
        ) : category === "complete" ? (
          CompTask.map((task) => {
            return <UnitTask key={task.id} task={task} />;
          })
        ) : null}
      </div>
    </>
  );
};

export default RenderTasks;

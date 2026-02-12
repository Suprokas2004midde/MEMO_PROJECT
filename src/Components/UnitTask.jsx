import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";

const UnitTask = ({task}) => {
  const { btnhandler, cancelHandler } = useContext(TaskContext);
  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-gray-800 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center gap-1 pr-3">
        <button onClick={() => btnhandler(task)} className="shrink-0">
          {task.completed === true ? (
            <IoMdCheckmarkCircleOutline className="text-green-400" />
          ) : (
            <FaRegCircle className="text-gray-400 hover:text-blue-400" />
          )}
        </button>
      </div>
      <div
        className={`text-lg flex-1 min-w-0 break-all whitespace-normal ${
          task.completed ? "line-through text-gray-500" : "text-gray-100"
        }`}
      >
        <p>{task.task_name}</p>
      </div>
      <div className="shrink-0 pl-3">
        <button
          onClick={() => cancelHandler(task.id)}
          className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
        >
          <ImCancelCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default UnitTask;

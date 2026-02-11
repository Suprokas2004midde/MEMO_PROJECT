import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import UnitTask from "./UnitTask";

const RenderTasks = () => {
  const { Tasks } = useContext(TaskContext);
  return (
    <div>
      {Tasks.map((task) => {
        return <UnitTask key={task.id} task={task} />;
      })}
    </div>
  );
};

export default RenderTasks;

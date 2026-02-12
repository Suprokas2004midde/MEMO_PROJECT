import React, { useContext, useMemo } from "react";
import { TaskContext } from "../Context/TaskContext";
import UnitTask from "./UnitTask";

const RenderTasks = () => {
  const { Tasks, filterData, setcategory, category, CompTask } = useContext(TaskContext);
  console.log(Tasks);
  console.log(CompTask);
  // const categoryvalue = useMemo(
  //   (category) => {
  //     return category;
  //   },
  //   [category],
  // );

  return (
    <>
      <div>
        {Tasks.length === 0
          ? null
          : filterData.map((value) => (
              <button
                key={value.id}
                onClick={() => setcategory(value.category)}
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
        ) : 
          category === 'all' ? 
          Tasks.map((task) => {
            return <UnitTask key={task.id} task={task} />
          }) : category === 'complete' ?
              CompTask.map((task)=>{
                return <UnitTask key={task.id} task={task}/>
              }) : null
        }
      </div>
    </>
  );
};

export default RenderTasks;

import { createContext, useEffect, useState } from "react";

//Create context
export const TaskContext = createContext();

//
export function TaskContextProvider({ children }) {
  const [Tasks, Settasks] = useState([]);
  const [CompTask, SetCompTask] = useState([]);
  const [category, setcategory] = useState("all");
  const filterData = [
    {
      id: 1,
      category: "all",
    },
    {
      id: 2,
      category: "complete",
    },
  ];

  function btnhandler(mtask) {
    // This operation is done explicitely to pass the value in thhe second set-Operation...
    // As both the value can not be change at same time...
    const temp = !mtask.completed;

    const tempobj = {
      ...mtask,
      completed: temp,
    };

    //Manages the Tasks State.....
    Settasks((prev) => {
      return prev.map((t) => {
        return t.id === mtask.id ? { ...t, completed: !t.complete } : t;
      });
    });

    //Manages the CompTask state only...
    SetCompTask((prev) => {
      const isAlreadyAdded = prev.includes(mtask);
      if (isAlreadyAdded) {
        return prev.filter((task) => {
          task.id !== mtask.id;
        });
      } else {
        return [...prev, tempobj];
      }
    });
  }

  function cancelHandler(id) {
    Settasks((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
    SetCompTask((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  const value = {
    Tasks,
    Settasks,
    CompTask,
    SetCompTask,
    btnhandler,
    cancelHandler,
    filterData,
    setcategory,
    category,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

import { createContext, useCallback, useMemo, useState } from "react";

//Create context
export const TaskContext = createContext();

//
export function TaskContextProvider({ children }) {
  const [Tasks, Settasks] = useState([]);
  const [CompTask, SetCompTask] = useState([]);
  const [category, setcategory] = useState("all");

  console.log(Tasks);
  console.log(CompTask);


  const btnhandler = useCallback((mtask) => {
    // This operation is done explicitely to pass the value in thhe second set-Operation...
    // As both the value can not be change at same time...
    const temp = !mtask.completed;

    //Manages the Tasks State.....
    Settasks((prev) => {
      return prev.map((t) => {
        return t.id === mtask.id ? { ...t, completed: !t.completed } : t;
      });
    });

    //Manages the CompTask state only...
    SetCompTask((prev) => {
      const isAlreadyAdded = prev.find((task) => task.id === mtask.id);
      if (isAlreadyAdded) {
        return prev.filter((task) => {
          return task.id !== mtask.id; 
        });
      } else {
        return [...prev, { ...mtask, completed: temp }]; 
        // First parameter is- All previous stored data of compTask & 2nd parameter is- updated state with completed: value 
      }
    });
  }, []);

  const cancelHandler = useCallback((id) => {
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
  }, []);

  const value = useMemo(
    () => ({
      Tasks,
      Settasks,
      CompTask,
      SetCompTask,
      btnhandler,
      cancelHandler,
      // filterData,
      setcategory,
      category,
    }),
    [Tasks, CompTask, category, btnhandler, cancelHandler],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

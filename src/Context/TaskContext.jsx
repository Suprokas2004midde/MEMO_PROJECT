import { createContext, useState } from "react";


//Create context
export const TaskContext = createContext();

//
export function TaskContextProvider({children}){
    const [Tasks, Settasks] = useState([]);
    const [CompTask, SetCompTask] = useState([]);


    const value = {
        Tasks,
        Settasks,
        CompTask,
        SetCompTask,
    }

    return <TaskContext.Provider value={value}>
        {children}
        </TaskContext.Provider>
}

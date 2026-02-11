import { createContext, useState } from "react";


//Create context
export const TaskContext = createContext();

//
export function TaskContextProvider({children}){
    const [Tasks, Settasks] = useState([]);
    const [CompTask, SetCompTask] = useState([]);

    function btnhandler(id){
        Settasks((task)=>{
            return task.map((t)=>{
                return t.id === id ? {...t, completed: !t.completed} : t
            })
        })
    }

    function cancelHandler(id){
        Settasks((prev)=>{
            return prev.filter((item)=>{
                return item.id !== id;
            })
        })
    }

    const value = {
        Tasks,
        Settasks,
        CompTask,
        SetCompTask,
        btnhandler,
        cancelHandler,
    }

    return <TaskContext.Provider value={value}>
        {children}
        </TaskContext.Provider>
}

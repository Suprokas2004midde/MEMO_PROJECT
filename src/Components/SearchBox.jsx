import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { toast } from "react-toastify";

const SearchBox = ({ children }) => {
  const { Settasks } = useContext(TaskContext);
  const [NewData, Setnewdata] = useState({
    task_name: " ",
    id: null,
    completed: false,
  });

  //This function only saves the task name...
  function HandelChange(event) {
    Setnewdata((prev) => {
      return { ...prev, task_name: event.target.value };
    });
    // console.log(NewData);
  }

  //This function submit the form....
  function Handelsubmit(event) {
    event.preventDefault();
    const uniqueid = Date.now(); //Generates an unique number...

    //update the newdata state by adding the final unique id
    const tempvalue = {
        ...NewData,
        id: uniqueid,
      };
      // IMPORTANT THING TO NOTICE:- WE CAN NOT UPDATE MULTIPLE SETSTATE VALUE WHICH ARE INTER-DEPENDENT ON EACH OTHER IN A SIMGLE FUNCCTION
      //                             BECAUSE THEY ARE ASYNCHRONOUS IN NATURE SO IT UPDATE THE VALUE LATER...(SO,, USE TEMP VARIABLE)
    //This portion save the task data to the main store as array format...
    {
      if(NewData.task_name.trim() === ""){
        toast.error("Fill the task");
      }
      else{
        Settasks((prev)=>{
          return [...prev, tempvalue];
        })
      }
    }

    //Resetting the value of newData after submiting the form...
    Setnewdata({
      task_name: " ",
      id: null,
      completed: false,
    });
    // console.log(NewData);
  }

  return (
    <div className="sticky top-0 z-10 bg-[#242424]/80 backdrop-blur-md py-6 px-4 mb-6 border-b border-gray-700">
      <form onSubmit={Handelsubmit} className="max-w-xl mx-auto flex gap-2">
        <input
          type="text"
          onChange={HandelChange}
          value={NewData.task_name}
          placeholder="Add New Task"
          required
          className="w-full bg-gray-800 text-gray-100 px-5 py-3 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-500"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20 active:scale-95">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

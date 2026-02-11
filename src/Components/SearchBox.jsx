import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { toast } from "react-toastify";

const SearchBox = ({ children }) => {
  const { Tasks, Settasks } = useContext(TaskContext);
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
    console.log(NewData);
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
      if(NewData.task_name.trim === ""){
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
    console.log(NewData);
  }

  return (
    <div>
      <form onSubmit={Handelsubmit}>
        <input
          type="text"
          onChange={HandelChange}
          value={NewData.task_name}
          placeholder="Add New Task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default SearchBox;

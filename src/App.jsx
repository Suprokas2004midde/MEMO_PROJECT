import { useContext, useState,useEffect } from "react";
import './App.css'
import { toast } from "react-toastify"
import { TaskContext } from "./Context/TaskContext";
import RenderSearch from "./Components/RenderSearch";


function App() {
  // const{Tasks} = useContext(TaskContext);

  return (
    <>
      <h1>To_Do_App</h1>
      <RenderSearch>
        <>
        </>
      </RenderSearch>
    </>
  );
}

export default App;

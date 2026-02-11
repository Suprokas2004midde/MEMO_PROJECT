import { useContext, useState, useEffect } from "react";
import "./App.css";
import { toast } from "react-toastify";
import { TaskContext } from "./Context/TaskContext";
import RenderSearch from "./Components/RenderSearch";
import RenderTasks from "./Components/RenderTasks";

function App() {
  // const{Tasks} = useContext(TaskContext);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans selection:bg-blue-500/30">
      <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        To_Do_App
      </h1>
      <main className="max-w-2xl mx-auto px-4 pb-20">
        <div className="space-y-8">
          <section className="bg-[#1e1e1e] rounded-2xl shadow-xl border border-gray-800 p-2">
            <RenderSearch>
              <></>
            </RenderSearch>
          </section>
          <section>
            <div className="flex items-center justify-center mb-4 px-2">
              <h2 className="text-xl font-bold text-gray-200 underline">
                Your Tasks
              </h2>
            </div>
            <RenderTasks />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

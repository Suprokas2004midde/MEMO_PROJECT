import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from "react-toastify";
import {TaskContextProvider} from "./Context/TaskContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <App />
    <ToastContainer />
  </TaskContextProvider>,
);

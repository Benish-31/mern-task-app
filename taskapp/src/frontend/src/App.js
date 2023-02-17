import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";

export const URL = "https://app-task.onrender.com/";

function App() {
  return (
    <div className='app'>
      <div className='task-container'>
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

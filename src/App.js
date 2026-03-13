import Header from "./components/header.js"
import TaskForm from './components/taskform.js'
import {useState} from 'react'
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName }]);
    console.log("New Task Added:", taskName);
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask}/>
    </div>
  );
}

export default App;
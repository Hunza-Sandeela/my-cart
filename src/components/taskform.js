import {useState} from 'react'
function TaskForm({addTask}){
    const [name, setName] = useState("")
const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Study");
  const [completed, setCompleted] = useState(false);
    function changeHandler(e){
        setName(e.target.value)
    }
    function HandleSubmit(e){
        addTask=(name)
        e.preventDefault();
    }
    return (
        <>
        <form onSubmit={HandleSubmit}>

            <label>TASK NAME DONE</label>
        <input type='text' value={name} onChange={changeHandler}/>
 <button type="submit">Add Task</button>
        </form>
        </>
    )
}
export default TaskForm
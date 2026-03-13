import {useState} from 'react'
function TaskForm({addTask}){
    const [name, setName] = useState("")
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
            <label>TASK NAME </label>
        <input type='text' value={name} onChange={changeHandler}/>
 <button type="submit">Add Task</button>
        </form>
        </>
    )
}
export default TaskForm
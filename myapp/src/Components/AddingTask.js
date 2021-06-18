import React,{useState,useContext,useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../ContextApi/TaskContext';
import ToDoList from './ToDoList';
const AddingTask=()=>{
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [task,setTask] = useContext(TaskContext);
    const modal=useRef();
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDate=(e)=>{
        setDate(e.target.value);
    }
    const addToTaskList=(e)=>{
        e.preventDefault();
        let utasks=JSON.parse(localStorage.getItem("TaskList"));
        let findIndex=utasks.findIndex(n=>n.date==date);
        let finded=utasks[findIndex];
        let updated={...finded,task:title}
        utasks.splice(findIndex,1,updated);
        localStorage.setItem('TaskList',JSON.stringify(utasks));
        setTask(JSON.parse(localStorage.getItem('TaskList')));
        setTitle("")
        setDate("")

    }
   
    return(
        <div className="tasks_part">
            <input type="checkbox" id="check_input"/>
            <label htmlFor="check_input" className="add_btn"><FontAwesomeIcon className="plus_icon" icon={faPlus}/><span>Add a task</span></label>
            <form ref={modal} className="task_form">
                <input  value={title} type="text" placeholder="Task" onChange={handleTitle}/>
                <input  value={date} type="number" placeholder="Date" min="1" max="30" onChange={handleDate}/>
                <input type="submit" value="submit" onClick={addToTaskList}/>
            </form>
            <ToDoList/>
        </div>
    )
}
export default AddingTask;
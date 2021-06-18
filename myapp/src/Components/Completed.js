import React,{useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../ContextApi/TaskContext'
const Completed=()=>{
    const [task,setTask] = useContext(TaskContext);
    return(
        <div className="completed">
            <div>completed<FontAwesomeIcon className="down_icon" icon={faAngleDown}/></div>
            {
                task.map((n,i)=>{
                    return(
                        n.taskstatus=="Done"?<div className="completed_task" key={i}>{n.task}</div>:""
                    )
                })
            }
            </div>
    )
}
export default Completed;
import React,{useContext} from 'react'
import {TaskContext} from '../ContextApi/TaskContext';
const Table=()=>{
    const [task,setTask] = useContext(TaskContext);
    
   
    return(
   <div className="table">
       <div className="thead">
           <div>Sun</div>
           <div>Mon</div>
           <div>Tue</div>
           <div>Wed</div> 
           <div>Thu</div>
           <div>Fri</div>
           <div>Sat</div>

       </div>
       <div className="tbody">
           {
               task.map((n,i)=>{
                   return(
                       <div className="td" key={i}><div>{n.date}</div><div className="task_design">{n.task}</div></div>
                   )
               })
           }
       </div>

   </div>
    )
}
export default Table;
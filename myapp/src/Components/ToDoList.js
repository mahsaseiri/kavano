import React,{useContext,useState} from 'react';
import { TaskContext } from '../ContextApi/TaskContext';
const ToDoList=()=>{
    const da=new Date();
    const [task,setTask] = useContext(TaskContext);
    const [today, setToday] = useState(da.getDate())

    const changeStatus=(d)=>{

        let utasks=JSON.parse(localStorage.getItem("TaskList"));
        let findIndex=utasks.findIndex(n=>n.date==d);
        let finded=utasks[findIndex];
        let updated={...finded,taskstatus:"Done"}
        utasks.splice(findIndex,1,updated);
        localStorage.setItem('TaskList',JSON.stringify(utasks));
        setTask(JSON.parse(localStorage.getItem('TaskList')));

    }
    return(
        <div className="to_do">
       {
           
            task.map((n,i)=>{
                return(
                    n.task!="" && n.taskstatus==""?<div className="mytasks" key={i}><span className="circle" onClick={()=>changeStatus(n.date)}></span><span>{n.task}</span><br/><span className="task_time">({today>Number(n.date)?today-Number(n.date)+"days ago":today<Number(n.date)?"next "+(Number(n.date)-today)+"days":"today"})</span></div>:""
                    
                )
                
            })
        }
        </div>
    )
}
export default ToDoList;
import React,{useState,useEffect} from 'react'
export const TaskContext=React.createContext();
export const TaskProvider=(props)=>{
    const [task, setTask] = useState([])
    let calendar=[{date:"",task:"",taskstatus:""},{date:"",task:"",taskstatus:""},{date:1,task:"",taskstatus:""},{date:2,task:"",taskstatus:""},
    {date:3,task:"",taskstatus:""}, {date:4,task:"",taskstatus:""},{date:5,task:"",taskstatus:""},{date:6,task:"",taskstatus:""},{date:7,task:"",taskstatus:""},
    {date:8,task:"",taskstatus:""},{date:9,task:"",taskstatus:""},{date:10,task:"",taskstatus:""},{date:11,task:"",taskstatus:""}, {date:12,task:"",taskstatus:""},
     {date:13,task:"",taskstatus:""},{date:14,task:"",taskstatus:""},{date:15,task:"",taskstatus:""},{date:16,task:"",taskstatus:""},{date:17,task:"",taskstatus:""},
    {date:18,task:"",taskstatus:""},{date:19,task:"",taskstatus:""},{date:20,task:"",taskstatus:""},{date:21,task:"",taskstatus:""},{date:22,task:"",taskstatus:""},
    {date:23,task:"",taskstatus:""},{date:24,task:"",taskstatus:""},{date:25,task:"",taskstatus:""},{date:26,task:"",taskstatus:""},{date:27,task:"",taskstatus:""},
    {date:28,task:"",taskstatus:""},{date:29,task:"",taskstatus:""},{date:30,task:"",taskstatus:""},{date:"",task:"",taskstatus:""},{date:"",task:"",taskstatus:""},
    {date:"",task:"",taskstatus:""}
    ];
    useEffect(() => {
        let userTasks=JSON.parse(localStorage.getItem('TaskList'));
        
        if(!userTasks){
            localStorage.setItem('TaskList',JSON.stringify(calendar))
          
           
        }
        setTask(JSON.parse(localStorage.getItem('TaskList')))
     
    }, [])
    return(
        <TaskContext.Provider value={[task,setTask]}>
            {props.children}
            </TaskContext.Provider>
    )
}
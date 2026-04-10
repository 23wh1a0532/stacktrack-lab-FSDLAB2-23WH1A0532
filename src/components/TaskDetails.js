import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
function TaskDetails(){
    const{id}=useParams();
    const[task,setTask]=useState(null);
    useEffect(()=>{
        fetch("http://bvrithcloud.com/api/tasks",{
            headers:{
                "x-student-id":"23WH1A0532"
            }
        })
        .then((res)=>res.json())
        .then((data)=>setTask(data))
        .catch((err)=>console.log(err));
    },[id]);

    if(!task) return <p>Loading</p>;
    return(
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>status:{task.status}</p>
        </div>
    );

    
}
export default TaskDetails;
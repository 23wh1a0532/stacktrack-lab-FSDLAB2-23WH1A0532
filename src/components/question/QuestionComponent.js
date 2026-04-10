
import {useState,useEffect} from "react";
import 

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [tasks,setTasks] = useState([]);
  useEffect(()=>{
    fetch("http://bvrithcloud.com/api/tasks",{
      headers:{
        "x-student-id":"23WH1A0532"
      }

    })
    .then((res) => res.json())
    .then((data)=>setTasks(data))
    .catch((err)=>console.log(err));
  },[]);
  return(
    <div>
      <h2>Task List</h2>
      {tasks.map((task)=>(
        <div key={task._id}>
          <h4>{task.title}</h4>
          </div>
      ))}
    </div>
  );
}

  

  // TODO: Implement data fetching inside a useEffect hook
 

    
  

  // TODO: Implement any event handlers required by your question set
  

  

export default QuestionComponent;

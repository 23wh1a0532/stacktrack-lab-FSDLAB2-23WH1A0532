import {link} from "react-router-dom";
function TaskList({tasks}){
    return(
        <div>
            {tasks.map((task)=>(
                <div key={task._id}>
                    <h3>{task.title}</h3>
                    <Link to={`/task/$task._id'}`}>View Details</Link>
                    </div>
            ))}
        </div>
    );
}

export default TaskList;
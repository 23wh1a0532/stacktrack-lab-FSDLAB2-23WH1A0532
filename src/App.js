import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path="/task/:id" element={<TaskDetails/>}/>
      </Routes>
    </Router>
     
  );
}

export default App;

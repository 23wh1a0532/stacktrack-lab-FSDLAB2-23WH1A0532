import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import {Link} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/task/:id" element={<TaskDetails/>}/>
      </Routes>
    </Router>
     
  );
}

export default App;

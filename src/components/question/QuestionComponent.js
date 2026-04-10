import React from 'react';
import react,{useState,useEffect} from "react-router-dom";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  return(
    <Router>
      <Routes>
        <Route path="/" element={TaskS.List.js}/>;
        <Route path="/" element={TasksDetails.js}/>;
      </Routes>
    </Router>
  )

  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(()=>{
    fetch("http://bvrithcloud.com/api/tasks"={
      "method":"GET",
      "Headers":{
        "content-type":"application/json",
        "x-studentid":"23WH1A0532"
      }
    })

    
  })

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      <h1> Tasks</h1>
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;

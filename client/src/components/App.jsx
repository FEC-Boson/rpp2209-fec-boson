import React from "react";
import { useState, useEffect } from "react";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswer from "./Q&A/Q&A.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import Related from "./Related/Related.jsx";
import axios from "axios";

var App = () => {
  //add state data as needed here


  //utilize useEffect to trigger desired actions on page load
  useEffect(() => {

  })

  return (
    <div>
      {/* <div><Overview /></div> */}
      {/* <div><Related /></div> */}
      <div><QuestionAndAnswer /></div>
      {/* <div><Ratings /></div> */}
    </div>
  )
}

export default App;
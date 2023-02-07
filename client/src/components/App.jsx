  import React from "react";
  import { useState, useEffect } from "react";
  import Overview from "./Overview/Overview.jsx";
  import QuestionAndAnswer from "./Q&A/Q&A.jsx";
  import Ratings from "./Ratings/Ratings.jsx";
  import { Related } from "./Related/Related.jsx";
  import axios from 'axios';
  import ErrorBoundary from '../Utils/ErrorBoundary.jsx';

  const withConditionalFeedback = (Component) => (props) => {
    let clickers = (e) => {
      e.preventDefault();
      //ex: overview components passed in is the baseOverview
      // this converts the entire function in to a string
      //the string is then checked to see if my component(baseOverview) has the widget
      //the function then checks which component was clicked
      // note that Overview has the flick function listed as a prop; each widget will need it
      let funcString = Component.toString();
      var widget = () => {
        if (funcString.includes('Overview')) {
          return 'Overview'
        } else if (funcString.includes('Related')) {
          return 'Related'
        } else if (funcString.includes('QuestionAndAnswer')) {
          return 'QuestionAndAnswer'
        } else if (funcString.includes('Ratings')) {
          return 'Ratings'
        } else {
          console.log('Error')
          return;
        }
      }
      console.log('DataInfo:', Date.now(), widget(), e.target);
    }
    if (!props) {return <div>Data is empty.</div>;}
    else {return <Component {...props} func={clickers}/>;}
  };

  // These functions render Overview
  const baseOverview = ({data, tester, func}) => {
    let comp = 'Overview';
    return (
      <div className="overviewMain" onClick={func}><Overview initial={data} tester={tester}/></div>
    );
  };

  const OverviewRender = withConditionalFeedback(baseOverview);

  var App = () => {
    //add state data as needed here
    const [productId, setProductId] = useState(71701);

    return (
      <div>
        <OverviewRender data={productId}/>
        <div><Related productId={productId} setProductId={setProductId} /></div>
        <div><QuestionAndAnswer productId={productId} /></div>
        <div><Ratings productId={productId} /></div>
      </div>
    )
  }

  export default App;
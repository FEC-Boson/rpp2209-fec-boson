import React from 'react';
import QuestionList from './qaComponents/QuestionList.jsx';
import AnswerList from './qaComponents/AnswerList.jsx';
import SearchQuestions from './qaComponents/SearchQuestions.jsx';
import { useState, useEffect } from "react";
import axios from 'axios';

function QuestionAndAnswer (props) {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //on component render
    //make axios req to server endpoint
    axios.get('/questions', { params : {product_id: 71698}})
      .then((results) => {
        console.log('get questions results:', results);
         //set questions state equal to the results of this call
      })
      .catch((err) => {
        console.log('error in axios get req in QA use effect:', err);
      });
  });

return (
  <div>
    <h4>QUESTIONS AND ANSWERS</h4>
    <SearchQuestions />
    <QuestionList />
    <AnswerList />
  </div>

)
}

export default QuestionAndAnswer;
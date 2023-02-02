import React from 'react';
import Question from './Question.jsx';
import { useState, useEffect } from "react";

export var renderQuestions = function (count, questionsArr) {

  var sortedQuestions = questionsArr.sort((a, b) => {
    return b.rating - a.rating;
  });

  var components = [];

  for (var i = 0; i < sortedQuestions.length; i++) {
    var question = questionsArr[i];
    if (i < count) {
      components.push(<Question key={question.question_id} questionBody={question.question_body} answers={question.answers}/>);
    } else {
      break;
    }
  }
  return components;
}

export var QuestionList = (props) => {

  const [questionsCount, setQuestionsCount] = useState(2)

  var handleClick = () => {
    var newCount = questionsCount + 2;
    setQuestionsCount(newCount);
  }

  if (props.term.length >= 3 && props.filteredQuestions) {
    var questions = renderQuestions(questionsCount, props.filteredQuestions);
    var length = props.filteredQuestions.length;
  } else {
    var questions = renderQuestions(questionsCount, props.questions);
    var length = props.questions.length;
  }

  return (

  <div>
  Question List
  {questions}
  {length > 2 && questionsCount < length && <button onClick={handleClick}>More Answered Questions</button>}
  </div>
  )
}

/*

"The questions and their corresponding answers within this list will be displayed in an expanding and collapsing accordion.
By default, on page load up to two questions should be displayed.
Up to two answers should display for each question.

The list will contain all questions by default,
but will have the potential to be filtered to a subset based on user searches (section 1.3.3).

/*/

//on page load render Question component for two questions, these should be the two
//  with the most number of users who have indicated the question was helpful
//'More Answered Questions' button appears if there are more than 2 questions
//    on click, up to 2 more answered questions appear
//    questions should show in order below the previously loaded questions.
//    more answered questions button should disappear when all questions are displayed.
//    maximum height of the questions list should be capped such that the entire
//    Questions & Answers module should fit on a single screen.
//    The questions list should become scrollable.
//    The search bar and buttons should remain fixed outside of the scrollable list.


//if no questions have been asked, button to submit new question appears near top of module
//questions appear in descending order of how many users indicated question was helpful

//Add a Question button
//on click, modal window opens overlaying product page with question form
//    title: "Ask Your Question"
//    subtitle: "About the [Product Name Here]"
//    Form Fields:
//    Your Question* (mandatory) - up to 1000 chars text input
//    What is your nickname* (mandatory) - up to 60 chars - placeholder: "Example: jackson11!"
//      below nickname field: “For privacy reasons, do not use your full name or email address”
//    Your email* (mandatory) - up to 60 chars placeholder: “Why did you like the product or not?”.
//      below email field" “For authentication reasons, you will not be emailed”
//    Submit question (button)
//      on click the form’s inputs should be validated.
//      If there are any invalid entries, the submission should be prevented,
//      and a warning message will appear. This message should be titled “You must enter the following:”
//        This error will occur if : Any mandatory fields are blank
//        The email address provided is not in correct email format

require("dotenv").config();
const axios = require('axios');

//this file will contain the functions for making requests to the API for
//question and answer data

//create helper method for retrieving a sorted list of questions from the API
var fetchQuestions = (queryString) => {
  //make a get request to the Atelier API using axios
  return axios({
    //specify method
    method: 'get',
    //specify url
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/${queryString}`,
    //include authorization headers
    headers: {
      authorization: `${process.env.TOKEN}`
    }
  });
};

module.exports.fetchQuestions = fetchQuestions;



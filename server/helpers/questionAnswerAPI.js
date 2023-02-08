require("dotenv").config();
const axios = require('axios');

//this file will contain the functions for making requests to the API for
//question and answer data

//create helper method for retrieving a sorted list of questions from the API
var fetchQuestions = (params) => {
  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    params: {
      product_id: params.product_id,
      page: params.page,
      count: 100
    }
  };
  //make a get request to the Atelier API using axios
  return axios.get(options.url, { headers: options.headers, params: options.params});
};

var postQuestion = (params) => {
  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    body: {
      body: params.body,
      name: params.name,
      email: params.email,
      product_id: params.product_id
    }
  };
  //make a get request to the Atelier API using axios
  return axios.post(options.url, options.body, { headers: options.headers});
};

var postAnswer = (reqBody, params) => {
  //send question id as a param
  //sned other info as body
  let options = {
    url: `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    body: {
      body: reqBody.body,
      name: reqBody.name,
      email: reqBody.email
    },
    params: {
      question_id: params.question_id
    }
  };
  //make a get request to the Atelier API using axios
  console.log(options.body);
  return axios.post(options.url, options.body, { headers: options.headers, params: options.params});
};

module.exports.fetchQuestions = fetchQuestions;
module.exports.postQuestion = postQuestion;
module.exports.postAnswer = postAnswer;



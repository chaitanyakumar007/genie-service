const express = require("express");
const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://prod.emea.api.fiservapps.com/sandbox/exp/v1/authorisations',
    params: {limit: '100', offset: '0'},
    headers: {Accept: 'application/json', 'Api-Key': 'dq88FJFoBEz9gBOw8G5L3fbmXyN1GAvm'}
  };

  
  const mockData = require('../mock/authorisations-data.json');

// function to get the data from the API 
let callDevPortalApi = async () => {
let response = await axios(options);
return response;
};


//controller function 
module.exports = async (req, res) => {
let response = await callDevPortalApi();
//console.log(response);
var  data =new Array();
 data = response.data;
data.push(mockData);
res.send(data);
}; 

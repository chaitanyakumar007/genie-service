const express = require("express");
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions",
  params: { limit: "100", offset: "0" },
  headers: {
    Accept: "application/json",
    "Api-Key": "dq88FJFoBEz9gBOw8G5L3fbmXyN1GAvm",
  },
};

const mockData = require("../mock/transactions-data.json");

// function to get the data from the API
let callDevPortalApi = async () => {
  let response = await axios(options);
  return response;
};

//controller function
module.exports = async (req, res) => {
  let response = await callDevPortalApi();
  console.log(response.data.length);
  var data = new Array();
  var mockDataCount = 0;
  data = response.data.map((value) => {
    if (mockDataCount < 30)
      value.posted = value.posted.replace("2022-07", "2022-04");
    else if (mockDataCount > 30 && mockDataCount < 90)
      value.posted = value.posted.replace("2022-07", "2022-05");
    else value.posted = value.posted.replace("2022-07", "2022-06");
    mockDataCount++;
    return value;
  });
  data.push(...mockData);
  res.send(data);
};

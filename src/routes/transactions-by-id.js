const express = require("express");
const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions',
    params: {limit: '20', offset: '0'},
    headers: {Accept: 'application/json', 'Api-Key': 'dq88FJFoBEz9gBOw8G5L3fbmXyN1GAvm'}
  };

const newJsonData = {
    "id": "1020",
    "posted": "2022-06-29T18:00:19Z",
    "authorised": "2022-06-28T14:00:19Z",
    "status": "CLEARED",
    "type": "PURCHASE",
    "channel": "ECOMMERCE",
    "merchant": {
        "id": "1337",
        "name": "Epic Board Games Inc.",
        "countryCode": "GBR",
        "mcc": "1234",
        "allianceCode": "FISV",
        "partnerCode": null,
        "storeId": "9876"
    },
    "meta": {
        "orderId": "8000019",
        "authorisationCode": "451019",
        "fundingDetailId": "1001",
        "retrievalReferenceNumber": "130237163512",
        "originalReference": "12345678900",
        "terminalBatchNumber": "EPV190917_01",
        "merchantTransactionReference": "GGIC-FK-432432-AB"
    },
    "paymentInstrument": {
        "category": "CARD",
        "brand": "MC",
        "subType": "MPL",
        "number": "555555******4444"
    },
    "financial": {
        "amounts": {
            "currencyCode": "GBP",
            "transacted": "67.93",
            "cashback": null,
            "tip": null
        },
        "fees": [
            {
                "type": "INTERCHANGE",
                "currencyCode": "GBP",
                "amount": "3.06"
            }
        ],
        "funding": {
            "currencyCode": "GBP",
            "gross": "67.93",
            "charges": "3.06",
            "net": "64.88"
        }
    },
    "captureEnvironment": {
        "platform": "OMNIPAY",
        "captureMethod": "CHIP_CONTACTLESS",
        "threeDS": "NON_3DS",
        "terminal": {
            "id": "TID1019"
        }
    }
};

// function to get the data from the API 
let getTransactions = async () => {
let response = await axios(options);
return response;
};


//controller function 
module.exports = async (req, res) => {
let response = await getTransactions();
//console.log(response);
var  data =new Array();
 data = response.data;
data.push(newJsonData);
res.send(data);
}; 

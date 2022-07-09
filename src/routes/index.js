const express = require("express");
const router = express.Router();
const fact = require("./fact");
router.get("/facts", fact);

const transactions = require("./transactions");
router.get("/transactions", transactions);

const authorisations = require("./authorisations");
router.get("/authorisations", authorisations);

const fundings = require("./fundings");
router.get("/fundings", fundings);

module.exports = router;

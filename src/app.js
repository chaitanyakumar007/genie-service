const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const middleware = require("../src/routes");
app.use("/cat", middleware);
app.use("/portal-api", middleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
var morgan = require('morgan')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("Hello")
  });




app.listen(3000, function()
{
    console.log("Server has started");
})
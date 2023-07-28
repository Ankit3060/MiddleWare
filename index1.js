const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
  });


app.post("/submit",(req,res)=>{
    console.log(req.body);
})



app.listen(3000, function()
{
    console.log("Server has started");
})






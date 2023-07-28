const express = require("express");
const bodyParser = require("body-parser");
var morgan = require('morgan');

const app = express();

var bandName = "";

// let bandName=[];

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res, next) {
    console.log(req.body);
    bandName = req.body["street"] +" "+ req.body["pet"];
    next();
  }

app.use(bandNameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });


  app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
  });


// app.get("/",function(req,res){
//     res.sendFile(__dirname+'/public/index.html');
// });

// app.post("/submit",function(req,res){
//     const bandNa ={ 
//         streetName : req.body.street,
//         petName : req.body.pet
//     }
//     bandName.push(bandNa);
//     // res.redirect("/")
//     res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
// })

app.listen(3000, function()
{
    console.log("Server has started");
})






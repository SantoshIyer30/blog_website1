const { constants } = require("buffer");
const express= require ("express");
const https= require("https");
const bodyParser= require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// for a app.get, only one res.send can be used. That is why we use res.send

app.get("/", function(req,res){
    res.sendFile( __dirname + '/index.html');
})

// app.get("/", function(req, res){ 
//     // const query = req.body.cityName;
//     // const apikey = "362f5795fdf914e4b09312babf359d71"
//     const url = "https://adg-rec-task.herokuapp.com/getBlog/624c6e505f149bf0b41076d5"
//     https.get(url , function(response){
//         console.log(response,statusCode);

//         response.on("data", function(data){
//             const Data= JSON.parse(data)
//             const id= Data._id
//             const title= Data.title
//             const details = Data.details

//             res.setHeader("Content-Type", "text/html");
//             res.write("<h3>The id </h3>" + id);
//             // res.write("<p>The weather description is " + weatherDescription + ".</p>");
//             // res.write("<img src =" +imageurl+">")
//              res.send()
//         })
//     })


// })

// Get all blogs
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://adg-rec-task.herokuapp.com/',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


// Get blog by id

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://adg-rec-task.herokuapp.com/getBlog/624c6e505f149bf0b41076d5',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


app.listen(3000, function(req,res){
    console.log("server is running at port 3000");
})
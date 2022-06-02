const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",  function(req, res){

var firstName = req.body.fname;
var lastName = req.body.lname;
var email = req.body.email;

console.log(firstName, lastName, email);

})

app.listen(3000, function(){
    console.log("Server is Running on 3000");
});


// api Key
// 269bc75a1b6042ae6258da7d38b42e19-us10

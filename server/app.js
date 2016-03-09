var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var scottsData = require("./public/data/data");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", (process.env.PORT || 5000));

app.get("/data/:id", function(req,res){

    var gremlins = req.params.id;

    if(gremlins == "scott"){
       res.send(scottsData);
    } else {
       res.send("You are not Scott");
    }

    //take id
    //query the Database with that ID in mind
    //Look for a match on ID
    //Send back info from the DB based on what it finds with the ID
    //res.send("Totally works");
});

app.get("/data/scott", function(req,res){
    res.send("Totally got Scott");
});



app.post("/data", function(req,res){
    console.log(req.body);
    res.send(req.body);
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});



app.listen(app.get("port"), function(){
    console.log("Listening on port: " , app.get("port"));
});

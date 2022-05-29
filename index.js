const express = require("express");
const bodyParser = require("body-parser");



const app = express();


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/index.html", function(req, res){

  let num1 = Number(req.body.n1);
   
    let num2 = Number(req.body.n2)

      let result = num1 + num2;
  
res.send("Your result is equal to: " + "<h3 style=color:red;>" + result + "</h3>")
})





app.listen(3000, function(){
  console.log("You are now connected to port 3000")
})
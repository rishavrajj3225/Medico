const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/service",(req,res)=>{
    res.render("service");
})

app.listen(3000, function() {
    console.log("Server starting on port 3000");
}); 
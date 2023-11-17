const express = require("express");
const app = express();
const path = require("path");

app.get("/sports",(req,res)=>{
    res.sendFile(path.join(__dirname,"sports.html"));
})

app.get("/news",(req,res)=>{
    res.sendFile(path.join(__dirname,"news.html"));
})

app.get("/food",(req,res)=>{
    res.sendFile(path.join(__dirname,"food.html"));
})

app.listen(2879,()=>{
    console.log("server is running");
})

const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser =require("body-parser");

var items =["cook","Buy vegetables"];
var workList =[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))




app.get("/",(req,res)=>{
    let d = new Date();
    let options = { weekday: 'long',day:'numeric' , month: 'long'} 
    let day=d.toLocaleDateString("en-US", options)
    
    res.render('index',{listTitle:day, newItems:items});
})

app.post("/",(req,res)=>{
    var item =req.body.newItems
   if (req.body.list ==="work"){
    workList.push(item)
    res.redirect("/work");

   }
   else{
    items.push(item);

    res.redirect("/");
   }
    
    
})

app.get("/work",(req,res)=>{
    res.render('index',{listTitle:"work", newItems:workList})
})

app.listen (process.env.PORT||3000,()=>{
    console.log("Your server is listening at port 3000");
})
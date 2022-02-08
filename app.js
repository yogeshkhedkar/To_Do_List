const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["So", "Many", "Things"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    var today = new Date();

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }

    var day = today.toLocaleDateString("en-US" , options)

    res.render("list",{
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res){
    var new_Item = req.body.newItem;
    items.push(new_Item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server Has Started working on Port 3000");
});

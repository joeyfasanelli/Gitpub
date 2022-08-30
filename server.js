const express = require("express");
const app = express();
const port = 3000;
app.listen(3000, function(){
    console.log("Server is running...")
});

app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App!")
})

const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

app.get("/drinks", (req, res)=>{
    res.render('drinks_index.ejs', {
        drinks, food,
    });
});

app.get("/drinks/:id", (req, res)=>{
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});

app.get("/food/:id", (req, res)=>{
    res.render('food_show.ejs', {
        food: food[req.params.id],
    });
});




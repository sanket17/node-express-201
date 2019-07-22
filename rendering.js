const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
// use static files
app.use(express.static('public'));
app.use(helmet());
// use helmet, json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// How does the rendering happens
// 1. Express as we know it happens. The File
// 2. We define a view Engine.
// - EJS
// - Mustache
// - Dust 
// - Jade/Pug 
// 3. Inside of one of routes we have res.render()
// 4. We pass res.render 2 things:
// - File that we want to use
// - Data that we want to send to the file
// 5. Express uses the node module for our specified view engine and parses the file. 
// - that means, it takes the HTML/JS/CSS and combines it with whatever "node" is in that file. 
// 6. The final result of this process is a compiled product of the things. 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// app.set() takes two argument:
// 1. key , 2. value

app.get('/', (req, res, next)=>{
    res.render("index");
});

app.listen(3000);
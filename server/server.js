const path = require('path');
const express = require('express');

var app = express();
const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

app.use(express.static(clientPath));
// console.log(__dirname + '/../public');
// console.log(clientPath);

app.listen(3000, ()=>{
    console.log(`Server is up on ${port}`);
})
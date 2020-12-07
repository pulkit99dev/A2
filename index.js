const port = 8000;
const express = require('express');

let app = express();

app.listen(port, function(err){
    if(err){
        console.log('Server Down');
    }
    console.log('Server is created successfully')
})
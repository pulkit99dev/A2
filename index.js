const port = 8000;
const express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log('Server Down');
    }
    console.log('Server is created successfully')
})
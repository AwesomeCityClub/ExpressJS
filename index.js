const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')


app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(__dirname + '/public'));


app.get("/" ,(req,res)=> {
    res.render('index')
    
})

app.listen(3000,()=>{
    console.log('server is runnning ')
})
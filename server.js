const express = require('express'); //importance d'express
const app = express(); // initialiser express

app.listen(3500, function(){
    console.log('server started successfuly');
});

app.get('toto', function(req, res){
    res.send('hello esther');
})

app.get('/isig', function(req, res){
   res.send('fier et plein de dignité');
});
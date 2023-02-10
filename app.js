const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});
app.get("/", function(req, res){
    res.sendFile('');
});
app.get("/", function(req, res){
    res.sendFile('');
});


app.listen(3000, function() {
    
    console.log("servidor rodando")
})
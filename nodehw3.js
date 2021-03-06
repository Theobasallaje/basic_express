var express = require('express')
var app = express()
const fs = require('fs');
var contents = fs.readFileSync('departments.json', 'utf8');
app.get('/', function (req, res) {
    // res.send(contents)
    res.sendFile('HW3 Heroku.html' , { root : __dirname});
});

app.get('/json', function (req, res) {
    return res.json(contents)
});
app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
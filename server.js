var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '')));

app.listen(9999, function() {
    console.log(__dirname)
 console.log('App listening at port 9999;');
});

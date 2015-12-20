/**
 * Created by hanqilin on 15/12/20.
 */


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000);
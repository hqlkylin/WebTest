/**
 * Created by hanqilin on 15/12/20.
 */


var express = require('express');
var path=require("path");
var app = express();
app.use(express.static(path.join(__dirname,"app","public")));
//app.get('/', function (req, res) {
//    res.send('Hello World')
//})

app.listen(3000);
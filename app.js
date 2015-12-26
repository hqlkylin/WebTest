/**
 * Created by hanqilin on 15/12/20.
 */


var express = require('express');
var path=require("path");
var app = express();
var bodyParser=require("body-parser");
var users=require("./routes/users");
app.use(express.static(path.join(__dirname,"app","public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/users",users);

app.listen(3000);
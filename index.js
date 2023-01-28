const CONST = require('./includes/const');
const express = require("express");
const { exec } = require("child_process");
const app = express();
var ip = require("ip");
const cookieParser = require('cookie-parser');
const lowdb = require('lowdb');
const bodyParser = require('body-parser');
const FileSync = require('lowdb/adapters/FileSync'),
    path = require('path'),
    adapter = new FileSync('maindb.json'),
    db = lowdb(adapter);

app.listen(CONST.web);

app.set('view-engine','ejs');
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/webpublic/')); 
app.use(require('./includes/route'));

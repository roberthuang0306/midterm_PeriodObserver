const express = require("express");
const path = require('path');
let  app = express();
var mongoose = require('mongoose');
const ClientModel = require('./models/ClientModel')

var uri = "mongodb+srv://new-Robert:1234@cluster0-r7rxv.mongodb.net/test?retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true , useFindAndModify: false });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', error => {
    console.log(error)
})
db.once('open', () => {
    console.log('MongoDB connected!');
    /*
    var newClient = new ClientModel({
        account:'test',
        password:'test',
        period:'27',
        duration:'6',
        dataNum:'1',
        lastStart:'2019-05-16',
        lastEnd:'2019-05-22'
    })
    newClient.save(function (err) {
        if (err) return console.log(err);
        // saved!
    })
    */
})

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/',(req,res)=>{
    console.log('/ posting')
    const client = {
        account: req.body.account,
        password: req.body.password,
    };
    if (!client.account || !client.password) {
        res.json({error:'field empty!'})
    }
    else {
        ClientModel.findOne({account:client.account},(err,data)=>{
            if (!data) res.json({error:'no client',
                                 account: client.account,
                                 password: client.password})
            else if (data.password !== client.password ){
                res.json({error:'password wrong!'})
            }
            else res.json(data)
        })
    }
})
app.post('/homepage/save',(req,res)=>{
    console.log('/homepage/save posting');
    const client = req.body;
    if (!client) {
        res.json({error:'empty!'})
    }
    else {
        console.log('save')
        ClientModel.findOneAndUpdate({account:client.account},client,(err,data)=>{
           res.json(data)
        })
    }
})
app.post('/homepage/delete',(req,res)=>{
    console.log('/homepage/delete posting');
    const client = req.body;
    if (!client) {
        res.json({error:'empty!'})
    }
    else {
        console.log('delete')
        ClientModel.findOneAndDelete({account:client.account},(err,data)=>{
            res.json(data)
        })
    }
})
app.post('/homepagenew',(req,res)=>{
    console.log('/homepagenew posting');
    const client = req.body;
    if (!client) {
        res.json({error:'empty!'})
    }
    else {
        console.log('new')
        var newClient = new ClientModel(client)
        newClient.save(function (err) {
            if (err) return console.log(err);
            // saved!
        })
    }
})

const port = process.env.PORT || 3000
app.use(express.static('public'))
app.listen(port,  () => console.log(`Example app listening on port ${port}!`));



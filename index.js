var firebase = require("firebase");
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

firebase.initializeApp({
    serviceAccount: "privkey.json",
    databaseURL: "https://coffeestop-820c3.firebaseio.com"
});
var fireRef = firebase.database().ref('coffeestop');

var port = process.env.PORT || 3000;

app.post('/newUser', function (req, res) {
    console.log("New req");
    console.log("Client wants to create todo: '" + req.body.todoText + "'");
    fireRef.push({"text": req.body.todoText}, function () {
        res.send("OK!");
    }).catch(function(){
        res.status(403);
    });
});

});
app.get('/index.html', function (req, res) {
    console.log("Requested Homepage");
    res.send("OK!");
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});

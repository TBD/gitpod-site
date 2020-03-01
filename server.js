var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/",  { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;

    db = client.db("temp");

    // Start the application after the database connection is ready
    app.listen(3000);
    console.log("Listening on port 3000");
});

app.use(express.static('src'))

// Reuse database object in request handlers
app.get("/db", function (req, res) {
    var response = []
    db.collection("temp").find({}).toArray(function (e, d) {
        d.forEach(function (doc) { response.push(doc.text) })
        res.send(response)
    })
})
const express = require("express");
const server = express();
const cors = require("cors");


const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(cors())
const port = 4000;

// << db setup >>
const db = require("./mongoDB");
const dbName = "sample_analytics";
const collectionName = "accounts";

// << db init >>

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items 
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
        });

    // << db CRUD routes >>
    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

    server.get("/items/:id", (request, response) => {
        const itemId = request.params.id;
    
        dbCollection.findOne({ id: itemId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

}, 

function(err) { // failureCallback
    throw (err);
});
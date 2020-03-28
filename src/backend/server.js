const express = require('express');
const env = require('dotenv');
const app = express();
const route = express.Route();

const port = process.env.PORT || 5000 // Create a port number on 5000

app.get('/', function(req, res, err) {
    if(err) console.log('error loading the page')
    else res.send('Hello world...')
})

// Listen to the port
app.listen(port, function(err) {
    if(err) console.log("Could not start the server: " + err) 
    console.log(`Connection to localhost has been established on port http://localhost:${port}`)
})
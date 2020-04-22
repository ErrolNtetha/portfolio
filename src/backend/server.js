const express = require('express');
const env = require('dotenv');
const app = express();
const route = express.Route();

const port = process.env.PORT || 5000 // Create a port number on 5000

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.get('/blogs', function(req, res, err) {
    res.render('./components/About')
})

// Listen to the port
app.listen(port, function(err) {
    if(err) console.log("Could not start the server: " + err) 
    console.log(`Connection to localhost has been established on port http://localhost:${port}`)
})

/*server.js*/
/*
var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('../index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
*/

const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000


app.use('/', routes)

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})
module.exports = app



/*server.js*/
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
/*
const express = require('express')
const hbs = require('hbs')
const routes = require('./routes/routes')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine', hbs)
app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})
module.exports = app
*/

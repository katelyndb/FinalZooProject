
var http = require('http'); // 1 - Import Node.js core module
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {

    
    switch (req.url) {
        case "/css/small.css" :
            fs.readFile(__dirname + "/css/small.css")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(contents);
            })
            
            break;
        default :    
            fs.readFile(__dirname + "/index.html")
            .then(contents => {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(contents);
            })
    };
    //res.end();
    /*
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
            
            /*
            res.setHeader("Content-Type", "application/json");
            
            switch (req.url) {
                case "/animals":
                   res.writeHead(200);
                   res.end(books);
                   break
                case "/authors":
                   res.writeHead(200);
                   res.end(authors);
                   break
                default:
                  res.writeHead(404);
                  res.end(JSON.stringify({error:"Resource not found"}));
    }*/
            
            /*
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
        */
        
};


const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

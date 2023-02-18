
/*
import http from 'http';
//import api from './scripts/api.mjs';
import * as fs from 'fs';
*/

var http = require('http'); // 1 - Import Node.js core module
//import { getAnimalInfo } from './scripts/api.mjs';

async function getApi(animal){
    const api = await import('./scripts/api.mjs');
    console.log("ANIMAL INFORMATION: " + api.getAnimalInfo(animal) );
    return;
}

//import('./scripts/api.mjs');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;



const requestListener = function (req, res) {
    switch (req.url) {
        
        case "/scripts/api.mjs" :
            fs.readFile(__dirname + "/scripts/api.mjs")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });

            /*
        case "/scripts/index.mjs" :
            fs.readFile(__dirname + "/scripts/index.mjs")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            */

        case "/css/medium.css" :
            fs.readFile(__dirname + "/css/medium.css")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            
        case "/css/large.css" :
            fs.readFile(__dirname + "/css/large.css")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            

         case "/css/small.css" :
            fs.readFile(__dirname + "/css/small.css")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            
            break;
         case "/ticket.html" :
            fs.readFile(__dirname + "/ticket.html")
            .then(contents => {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
                
                break;
        default :    
            
            fs.readFile(__dirname + "/index.html")
            .then(contents => {
                
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end( contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
    };
        
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

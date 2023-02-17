

import http from 'http';
//import api from './scripts/api.mjs';
import * as fs from 'fs';

/*
var http = require('http'); // 1 - Import Node.js core module
const api = require('./scripts/api.mjs');
const fs = require('fs').promises;
*/
const host = 'localhost';
const port = 8000;

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const requestListener = function (req, res) {
    switch (req.url) {
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
                //res.write("ANIMAL INFORMATION: " + api.getAnimalInfo('turtle'));
                res.end(contents);
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

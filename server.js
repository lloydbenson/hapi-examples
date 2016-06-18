'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Inert = require('inert');
const Lout = require('lout');
const Vision = require('vision');
const Examples = require('./lib');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 8080 });

server.register([ Inert, Vision, Lout, Examples ], (err) => {

    if (err) {
        console.log('plugins did not load:' + err);
    }

    server.on('log', (event) => {

       console.log(JSON.stringify(event));
    });

    server.on('internalError', (request, error) => {

        console.error(JSON.stringify(error));
    });
});


server.start((err) => {

    Hoek.assert(!err, err);
    console.log('started server: ' + server.info.uri);
    //console.log(server.connections);
    //console.log(server.connections[0]._load.settings);
});

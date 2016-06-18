'use strict';

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');

const internals = {};

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

internals.prepareServer = function (callback) {

    const server = new Hapi.Server();
    server.connection();

    server.register({

        register: require('..'),
        options: internals.defaults
    }, (err) => {

        expect(err).to.not.exist();
        callback(server);
    });
};


describe('hello world', () => {

    it('GET /examples/helloworld', (done) => {

        internals.prepareServer((server) => {

            server.inject({ method: 'GET', url: '/examples/helloworld' }, (response) => {

                expect(response.statusCode).to.equal(200);
                expect(response.payload).to.exist();
                done();
            });
        });
    });
});

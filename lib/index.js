var Hapi = require('hapi');
var Hoek = require('hoek');
var Joi = require('joi');

var Hello = require('./hello');

var internals = {};

internals.defaults = {

    basePath: "/examples"
};

exports.register = function (plugin, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);
        
    plugin.route([
        { method: 'GET', path: settings.basePath+'/hello1', config: { handler: Hello.get, description: "output hello" } }
    ]);

    next();
};

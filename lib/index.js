'use strict';

const Hoek = require('hoek');

const Hello = require('./hello');

const internals = {};

internals.defaults = {

    basePath: '/examples'
};

exports.register = function (plugin, options, next) {

    const settings = Hoek.applyToDefaults(internals.defaults, options);
    plugin.route([
        {
            method: 'GET',
            path: settings.basePath + '/helloworld',
            config: {
                handler: Hello.get,
                description: 'output hello world'
            }
        }
    ]);
    next();
};

exports.register.attributes = {

    pkg: require('../package.json')
};

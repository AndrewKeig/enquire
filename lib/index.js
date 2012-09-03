
exports.register = function(environment, path, paths) {
    if (environment === '')
        throw new Error('Please provide an environment');

    if (path === '')
        throw new Error('Please provide a path');

    paths[environment] = path;
}

exports.load = function(module_request, environment, paths) {

    //var util = require('util');
    //console.log(' - paths %s', util.inspect(paths));

    if (module_request === '')
        throw new Error('Please provide a module request');

        var env, module, module_return, path;
        env = process.env.NODE_ENV;
        module = module_request;

        if (environment != null)
            env = environment;

        try {
            path = paths[env];
        } catch(e) {
            path = '';
        }

        //console.log(' - loading module %s for environment %s located %s', module, env, path);

        if (env != null && env !== null && env !== 'null')
            module = [path, module_request, "-", env]
                .join('');

        try {
            module_return = require(module);
        } catch(err) {
            throw new Error('Error module not found');
        }

        return module_return;
};
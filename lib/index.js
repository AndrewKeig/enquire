
exports.load = function(module_request, environment) {
    if (module_request === '')
        throw new Error('Please provide a module request');

        var env, module, module_return;
        env = process.env.NODE_ENV;
        module = module_request;

        if (environment != null)
            env = environment;

        //console.log(' - loading module %s for environment', module, env);

        if (env != null && env !== null && env !== 'null')
            module = [module_request, "-", env].join('');

        try {
            module_return = require(module);
        } catch(err) {
            throw new Error('Error module not found');
        }

        return module_return;
};
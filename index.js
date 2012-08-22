/*!
 * enquire
 * Copyright(c) 2012 Andrew Keig <andrew.keig@gmail.com>
 * MIT Licensed
 */

/* dependencies */
var path = require('path');
var lib = require(path.join(__dirname, './lib'));

/* library version */
exports.version = '0.0.1';

/* api */
module.exports = function (module_request) {
    return lib.load(module_request);
}
var util = require('util');
var enquire = require('../');
var data = enquire.load('../examples/data');

exports.execute = function() {
    return data();
};
process.env.NODE_ENV = 'unit';
var assert = require("assert");
var enquire = require('../');

enquire.register('unit', '../examples/');
enquire.register('integration', '../examples/');

describe('enquire.load() ' + process.env.NODE_ENV, function(){
    describe('when running a unit test ', function(){
        it('should call unit based environment modules ', function(){
            var query = require('../examples/query');
            assert.equal(query.execute(), process.env.NODE_ENV);
        })
    })
})

process.env.NODE_ENV = 'integration';

describe('enquire.load() ' + process.env.NODE_ENV, function(){
    describe('when running a integration test ', function(){
        it('should call integration based environment modules ', function(){
            var query = require('../examples/query');
            assert.equal(query.execute(), process.env.NODE_ENV);
        })
    })
})
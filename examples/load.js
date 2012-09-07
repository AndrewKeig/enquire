process.env.NODE_ENV = 'unit';

var assert = require("assert");
var enquire = require('../');

enquire.register('unit', '../examples/');
enquire.register('integration', '../examples/');

describe('enquire.load()', function(){
    describe('when running a unit test ', function(){
        it('should cal unit based environment modules ', function(){
            var query = require('../examples/query');
            assert.equal(query.execute(), process.env.NODE_ENV);
        })
    })
})

process.env.NODE_ENV = 'integration';

describe('enquire.load()', function(){
    describe('when running a unit test ', function(){
        it('should cal unit based environment modules ', function(){
            var query = require('../examples/query');
            assert.equal(query.execute(), process.env.NODE_ENV);
        })
    })
})
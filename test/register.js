var assert = require("assert");
var path = require('path');
var lib = require(path.join(__dirname, '../lib'));
var enquire = require('../');

describe('enquire.register()', function(){
    describe('when adding a valid path/env pair to path list', function(){
        it('should add path/env pair ', function(){

            enquire.register('uat', '/here/');
            var env_path = enquire.paths['uat'];
            assert.equal(env_path, '/here/');
        })
    }),
    describe('when adding a path/env pair with invalid env to path list', function(){
        it('should throw error ', function(){
            var expected = new Error("Please provide an environment")
            var recorded_error;

             try {
                enquire.register('', '/here/');
            } catch(err) {
                recorded_error = err;
            }

            assert.equal(recorded_error.message, expected.message);
        })
    }),
    describe('when adding a path/env pair with invalid path to path list', function(){
        it('should throw error ', function(){
            var expected = new Error("Please provide a path")
            var recorded_error;

            try {
                enquire.register('uat', '');
            } catch(err) {
                recorded_error = err;
            }

            assert.equal(recorded_error.message, expected.message);
        })
    })
})

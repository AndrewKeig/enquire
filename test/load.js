var assert = require("assert");
var path = require('path');
var lib = require(path.join(__dirname, '../lib'));
var enquire = require('../');

describe('enquire.load()', function(){
    describe('when no module request is provided', function(){
        it('should throw error ', function(){
            var expected = new Error("Please provide a module request")
            var recorded_error;

            try {
                enquire('');
            } catch(err) {
                recorded_error = err;
            }

            assert.equal(recorded_error.message, expected.message);
        })
    })

    describe('when invalid module request is provided', function(){
        it('should throw error ', function(){
            var expected = new Error("Error module not found")
            var recorded_error;

            try {
                enquire('./test/doubles');
            } catch(err) {
                recorded_error = err;
            }

            assert.equal(recorded_error.message, expected.message);
        })
    })

    describe('when valid module request is provided with empty environment', function(){
        it('should return module ', function(){
            process.env.NODE_ENV = null;
            var module = enquire('../test/doubles');
            assert.notEqual(module, null);
            assert.notEqual(module(), 'true');
        })
    })

    describe('when valid module request is provided for development environment', function(){
        it('should return module ', function(){
            process.env.NODE_ENV = "development";
            var module = enquire('../test/doubles');
            assert.notEqual(module, null);
            assert.notEqual(module(), 'true');
        })
    })

    describe('when valid module request is provided for missing environment', function(){
        it('should return module ', function(){
            process.env.NODE_ENV = "uat";
            var expected = new Error("Error module not found")
            var recorded_error;

            try {
                enquire('../test/doubles');
            } catch(err) {
                recorded_error = err;
            }

            assert.equal(recorded_error.message, expected.message);
        })
    })


    describe('when valid module request is provided for development environment as a parameter', function(){
        it('should return module ', function(){
            process.env.NODE_ENV = null;
            var module = enquire('../test/doubles', "development");
            assert.notEqual(module, null);
            assert.notEqual(module(), 'true');
        })
    })
})


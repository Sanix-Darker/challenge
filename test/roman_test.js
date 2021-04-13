var assert = require('assert');
var funcs = require('../utils/helpers.js');


describe('Roman basic test', function() {

    it('should return XII for the value of 12', function() {
      assert.strictEqual(funcs._test.converter("12"), "XII");
    });

    it('should return XXXV for the value of 35', function() {
        assert.strictEqual(funcs._test.converter("35"), "XXXV");
    });

    it('should return MMIII for the value of 2003', function() {
        assert.strictEqual(funcs._test.converter("2003"), "MMIII");
    });
});

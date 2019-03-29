define(["require", "exports", "module", "test","test","../../../../../../trailingComma/a"], function(require, exports, module) {
var test = require('test');
var pass = false;
var test = require('test');
try {
    require('../../../../../../trailingComma/a');
} catch (exception) {
    pass = true;
}
test.assert(pass, 'require does not fall back to relative modules when absolutes are not available.')

});

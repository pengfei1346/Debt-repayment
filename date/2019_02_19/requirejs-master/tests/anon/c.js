define(function (require) {
    var a = require('../trailingComma/a');
    return {
        name: 'c',
        aName: a.name
    };
});

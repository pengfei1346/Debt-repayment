define(function (require) {
    var b =  require("../nestedRelativeRequire/sub/b");
    return {
        name: "a",
        bName: b.f()
    };
});

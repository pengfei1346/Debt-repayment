//
//  Test comment
//
define('one',
    [
     "require", "domReady/two"
    ],
  function(require) {
    var one = {
      size: "large",
      doSomething: function() {
        return require("domReady/two");
      }
    };

    return one;
  }
)

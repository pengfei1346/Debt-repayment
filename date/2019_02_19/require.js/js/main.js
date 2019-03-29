require.config({
    baseUrl:"js",
});

// require(["app"],function($,test){
//     test.fun();
//     console.log($().jquery);
// });

require(['app'], function (con){
    alert(con.add(1,1));
});






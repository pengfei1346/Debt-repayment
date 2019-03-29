
// define(["ax"],function ($) {
//     function fun(){
//         console.log("lzj")
//     }
//     //Do setup work here
//     return   {
//         fun:fun
//     }
//
// });

define(function (){
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };
});
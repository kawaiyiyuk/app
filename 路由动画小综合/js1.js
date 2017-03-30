var app = angular.module("myapp",[
    "ngRoute","ngAnimate","bookcontro"
]);

app.config(function($routeProvider){
    $routeProvider.when("/hello",{
        templateUrl:"tlp/hello.html",
        controller:"Helloctrl"
    }).when("/list",{
        templateUrl:"tlp/list.html",
        controller:"Listctrl"
    }).otherwise({
        redirectTo:"/hello"
    })
})


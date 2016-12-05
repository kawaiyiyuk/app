var bookapp = angular.module("bookapp",['ngRoute','ngAnimate']);

bookapp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		tempalteUrl:'tpls/hello.html',
		controller:'Helloctrl'
	}).when('/list',{
		templateUrl:'tpls/list.html'
		controller:'listctrl'
	}).otherwise({
		redirectTo:'/hello'
	})
})
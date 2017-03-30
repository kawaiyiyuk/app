var app = angular.module("myapp",[]);
app.factory("factoryName",function(){
	return {
		message:"张三"
	}
})
app.service("serviceName",function(){
	return {
		message:"李四"
	}
})
app.controller("firstController",function($scope,factoryName,serviceName){
	$scope.name = "张三";
	console.log(factoryName);
	console.log(serviceName)
})



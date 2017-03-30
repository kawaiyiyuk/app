var app = angular.module("myapp",[]);
app.controller("firstController",["$scope",function($scope){
    $scope.today = new Date();
}])


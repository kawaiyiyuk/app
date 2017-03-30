var app = angular.module('myapp',[]);
app.directive('dir',function(){
    return {
        restrict:'EA',
        scope:{},
        controller:function($scope){

        },
        templateUrl:'tlp/tlp1.html',
        transclude:true
    }
});

app.controller('firstController',['$scope',function($scope){

}])
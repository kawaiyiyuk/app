var app = angular.module('myapp',[]);
app.directive('dir',function(){
    return {
        restrict:'ECAM',
        templateUrl:'tlp/tlp1.html',
        transclude:true
        
    }
})
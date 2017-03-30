var app = angular.module('myapp',[]);
app.directive('dir',function(){
    return {
        restrict:'EA',
        template:'<div>我是通过template加载进来的 <span ng-transclude>111</span></div>',
        transclude:true,
        replace:true
        
    }
})
app.controller('somecontroller',function($scope){

});
app.controller('secondController',function($scope){
    
})
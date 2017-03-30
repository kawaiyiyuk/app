var app = angular.module('myapp', []);
app.controller('firstController',['$scope','$http',function($scope,$http){
   $scope.str = '';
   $scope.arr = [];
   $scope.$watch('str',function(){
       $http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
           params:{
               wd:$scope.str,
               cb:'JSON_CALLBACK'
           }
       }).success(function(json){
           $scope.arr = json.s;
       }).error(function(){
           alert('请求错误')
       })
   })
}])

//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=xqqa&cb=show
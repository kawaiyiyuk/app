var app = angular.module('myapp', []);
app.controller('firstController',['$scope','$interval',function($scope,$interval){
    $scope.a = 0;
   /* setInterval(function(){
        $scope.a++;
        //$scope.$apply();  如果想用原生的js不带这个是无法显示的，但是可以在console.log()内显示
        console.log($scope.a)  //这样也是有效的
    },500)*/


    //angular自带的定时器 使用的时候必须通过依赖注入注入进来
    var timer = $interval(function(){
        $scope.a ++;

        if($scope.a>=10){
            $interval.cancel(timer)   //$interval.cancel()是停止定时器的用法
        }
    },500)
}])



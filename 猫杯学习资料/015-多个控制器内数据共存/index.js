var app = angular.module("myapp",[]);
app.factory("Name",function(){
    return {
        message:"共享的数据在这"
    }
})
app.controller("firstController",["$scope","Name",function($scope,Name){
    /*
    这里需要注意的是外部创建服务以后一定要注入到控制器才能生效
    并且这里用的是数组的形式，那么数组内也一定要加入你创建的服务
    这样在函数里才可以使用
    */
    $scope.name = "张三";
    $scope.Data = Name;
}]);

app.controller("secondController",["$scope","Name",function($scope,Name){
    $scope.name2 = "李四";
    $scope.Data = Name;
}]);


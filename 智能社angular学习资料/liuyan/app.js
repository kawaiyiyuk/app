var app = angular.module('myapp',[]);
app.controller('firstController',['$scope','$http',function($scope,$http){
     $scope.exps = [
                {id: 1, content: "内容1", time: 1483937835, acc: 11, ref: 11},
                {id: 2, content: "内容2", time: 1483937835, acc: 22, ref: 22},
                {id: 3, content: "内容3", time: 1483937835, acc: 33, ref: 33}
            ]
    $scope.contents = [];
    $http.get('weibo.php',{
        params:{
            act:'get',
            page:1
        }
    }).success(function(arr){
        console.log(arr)
    }).error(function(){
        alert('数据获取出错');
    })

    //添加一条内容
    // $scope.sublitMsg = function(){
    //     $http.get('weibo.php',{
    //         params:{
    //             act:'add',
    //             content:$scope.textInput
    //         }
    //     }).success(function(data){
    //        console.log(data)
         
    //     }).error(function(){
    //         alert('数据获取出错');
    //     })
    // }

}])

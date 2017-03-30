
var app = angular.module("myapp",[]);
app.factory("$apples",function(){
    return [
        {
            id:1234,
            name:"iphone",
            price:4500
        },
        {
            id:5678,
            name:"ipad",
            price:2500
        },
        {
            id:789,
            name:"imac",
            price:14500
        },
        {
            id:123,
            name:"ipod",
            price:1500
        }
    ]
});

app.controller("myctrl",function($scope,$apples){
    $scope.proct = $apples;
    $scope.orderType = 'id';
    $scope.order = '-';
    $scope.changeOrder = function(type){
        $scope.orderType = type;
        if($scope.order === ''){
            $scope.order = '-';
        }else{
            $scope.order = '';
        }

    }
})
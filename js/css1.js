var app = angular.module("myapp",[]);
app.controller("myctrl",["$scope",function($scope){
    $scope.color = "red";
    $scope.setGreen = function(){
        if($scope.color=="red"){
             $scope.color = "green";
        }else{
            $scope.color = "red";
        }
       
    };
}])
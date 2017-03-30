var app = angular.module("myapp", []);
app.controller("myctrl", ["$scope", function ($scope) {
    $scope.useerInfo = {
        email: "399599243@qq.com",
        password: "399599243",
        box: true
    }

    $scope.getuser = function () {
        console.log($scope.useerInfo)
    };

    $scope.setuser = function () {
        $scope.useerInfo = {
            email: "12345678@qq.com",
            password: "1234567",
            box: false
        }
    }
}])
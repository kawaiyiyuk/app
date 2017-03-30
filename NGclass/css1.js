var app = angular.module("myapp", []);
app.controller("myctrl", ["$scope",
    function ($scope) {
        $scope.imerror = false;
        $scope.imwarning = false;

        $scope.showError = function () {
            $scope.imerror = true;
            $scope.imwarning = false;
            $scope.testMassage = "error"
        };
        $scope.showWarning = function () {
            $scope.imerror = false;
            $scope.imwarning = true;
            $scope.testMassage = "warning"
        }
    }
])
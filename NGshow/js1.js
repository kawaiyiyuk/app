var app = angular.module("myapp", []);
app.controller("myctrl", ["$scope",
    function ($scope) {
        $scope.meanStat = {
            hide: true
        };
        $scope.togle = function () {
            $scope.meanStat.hide = !$scope.meanStat.hide;
        }


    }
])

app.controller("myctrl2", ["$scope",
    function ($scope) {
        $scope.meanstat = {
            show: false
        };

        $scope.togle = function () {
            $scope.meanstat.show = !$scope.meanstat.show
        }
    }
])
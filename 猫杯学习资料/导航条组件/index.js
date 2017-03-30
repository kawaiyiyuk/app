var app = angular.module('myapp', []);
app.service('Data', function () {
    return [{
        title: 'Home'
    }, {
        title: 'Profile'
    }, {
        title: 'Messages'
    }]
});
app.directive('dir', function () {
    return {
        restrict: 'EA',

        controller: function ($scope) {

            $scope.data = $scope.n;
            $scope.isActive = 'Home';
           // console.log($scope.data[0].title)
            $scope.change = function(obj){
                $scope.isActive = obj
            }
          
        },
        scope: {

            n: '=transfer'
        },
        transclude: true,
        templateUrl: 'tlp/tlp1.html'
    }
});
app.controller('firstController', ['$scope', 'Data', function ($scope, Data) {

    $scope.data = Data;



}])
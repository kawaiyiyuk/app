var app = angular.module('myapp', []);
app.service('ser', function () {
    return [{
        id: 99,
        src: 'http://haidou-10052359.cos.myqcloud.com/img/title/1.jpg'
    }, {
        id: 199,
        src: 'http://haidou-10052359.cos.myqcloud.com/img/title/2.jpg'
    }, {
        id: 299,
        src: 'http://haidou-10052359.cos.myqcloud.com/img/title/3.jpg'
    }]
})
app.service('title', function () {
    return [{
        title: '全部'
    }, {
        title: '第一页'
    }, {
        title: '第二页'
    }, {
        title: '第三页'
    }]
});
app.filter('filterId', function () {
    return function (obj) {
        var newArr = [];
        angular.forEach(obj, function (value, key) {
            if (value.id < 100) {
                newArr.push(value);
            }
        })
        return newArr;
    }
});

app.filter('filterId200', function () {
    return function (obj) {
        var newArr = [];
        angular.forEach(obj, function (value, key) {
            if (value.id < 200 && value.id > 100) {
                newArr.push(value);
            }
        })
        return newArr;
    }
});

app.filter('filterId300', function () {
    return function (obj) {
        var newArr = [];
        angular.forEach(obj, function (value, key) {
            if (value.id < 300 && value.id > 200) {
                newArr.push(value);
            }
        })
        return newArr;
    }
});
app.controller('firstController', ['$scope', 'ser', 'title', '$filter',function ($scope, ser, title, $filter) {
    $scope.sers = ser;
    $scope.titles = title;
    $scope.now = 0;
    $scope.change = function (index) {
        //index是通过$index传进来的 就是循环出来的下角标
        if (index == 1) {
            //配合视图的ng-class实现class切换
            $scope.now = 1;
            //每次都将数组重置为原来，否则筛选的时候会出错
            $scope.sers = ser;
            //使用过滤器先把数据过滤后，再赋给数据，其实就是执行以下过滤器了
            $scope.sers = $filter('filterId')($scope.sers);
        } else if (index == 2) {
            $scope.now = 2;
            $scope.sers = ser;
            $scope.sers = $filter('filterId200')($scope.sers);
        } else if (index == 3) {
            $scope.now = 3;
            $scope.sers = ser;
            $scope.sers = $filter('filterId300')($scope.sers);
        } else {
            $scope.now = 0;
            $scope.sers = ser;
        }
    }
}])
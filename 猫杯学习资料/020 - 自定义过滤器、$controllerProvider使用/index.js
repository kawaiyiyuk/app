var app = angular.module('myapp', [])

app.service('$Date', function () {
    return [{
        name: '张三',
        age: 20,
        city: '上海'
    }, {
        name: '李四',
        age: 30,
        city: '北京'
    }]
});

app.filter('filterAge', function () {
    return function (obj) {
        //注意这里一定要返回一个对象，否则视图上会没数据
        var newArr = [];
        angular.forEach(obj, function (o) {
            if (o.age > 20) {
                newArr.push(o)
            }
        });
        return newArr;
    }
})
app.controller('firstController', function ($scope, $Date) {
    $scope.date = $Date;


})
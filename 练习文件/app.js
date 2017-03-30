/**
 * Created by Administrator on 2017/3/16.
 */
var app = angular.module('myapp',['ngMessages']);
app.service('Data', function () {
    var service = {
        books:[
            { title: "Magician", author: "Raymond E. Feist" },
            { title: "The Hobbit", author: "J.R.R Tolkien" }
        ],
        addBook:function(book){
            service.books.push(book)
        }
    };
    return service
});
app.controller('firstController',['$scope','Data',function($scope,Data){
    $scope.books = Data.books;
    $scope.user={
        userName:'damoqiongqiu',
        password:''
    };
    $scope.save=function(){
        alert("保存数据!");
    }
}]);

app.filter('myfilter', function () {
    return function (input) {
        var newArr = [];
        angular.forEach(input, function (obj,index) {
            if(obj.id>10){
                newArr.push(obj);
            }
        });
        return newArr
    }
});

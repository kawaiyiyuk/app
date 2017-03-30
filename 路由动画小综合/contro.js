var bookcontro = angular.module("bookcontro",[]);

bookcontro.controller("Helloctrl",["$scope",
    function($scope){
        $scope.texts = {
            text1:"Hello"
        };
        $scope.pageClass = "hello";
    }
]);

bookcontro.controller("Listctrl",["$scope",
    function($scope){
        $scope.books = [
            {title:"《Ext江湖》",author:"大漠" },
            {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠"},
            {title:"《用AngularJS开发下一代WEB应用》",author:"大漠"}
        ];

        $scope.pageClass= "list";
    }
])
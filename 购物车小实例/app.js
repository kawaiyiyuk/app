var app = angular.module("myapp", []);
app.controller("myctrl", ["$scope", function ($scope) {
    $scope.apples = [{
        id: 1000,
        name: "iphone5",
        num: 3,
        price: 5500
    }, {
        id: 2000,
        name: "iphone6",
        num: 2,
        price: 6500
    }, {
        id: 3000,
        name: "iphone6s",
        num: 4,
        price: 7500
    }, {
        id: 4000,
        name: "imac",
        num: 5,
        price: 15500
    }]
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.apples, function (item) { //注意这里的第一个参数是不带引号的 并且要带上$scope
            total += parseInt(item.num * item.price)
        })
        return total;
    }

    $scope.totalNum = function () {
        var total = 0;
        angular.forEach($scope.apples, function (item) {
            total += item.num;
        })
        return total;
    }

    //查找一个元素的索引值
    var findIndex = function (id) {
            var index = 0;
            angular.forEach($scope.apples, function (item, key) {
               if(item.id===id){
                   index = key
               }
            });
            return index;
        }
        /*移除一个内容*/
    $scope.remove = function (id) {
        var index = findIndex(id) //因为这个方法最终返回的是index值
        $scope.apples.splice(index, 1)
            /*
            splice 从数组中删除元素，index必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
            必需。要删除的项目数量。如果设置为 0，则不会删除项目。
            这里是从遍历出来的index开始删除（包括自己）
            因为是通过ng-click触发的 所以每次点击都会触发脏检查，因此会时时的更新变化数据
            */
    }

    $scope.removeAll = function () {
            var removeKey = confirm("确定清除购物车？")
            if (removeKey) {
                $scope.apples = {};
            }
        }
        /*数字加一*/
    $scope.add = function (id) {
        var index = findIndex(id)
        $scope.apples[index].num++;

    };
    /*数字减一*/
    $scope.sub = function (id) {
        var index = findIndex(id)
        var item = $scope.apples[index]
        if (item.num > 1) { //这里注意判断大于0
            item.num--;
        } else {
            var returnKey = confirm("是否将商品从购物车内移除")
            if (returnKey) {
                $scope.remove(id)
            }
        }

    }
   /* $scope.$watch("apples", function (newvalue, oldvalue) {


        angular.forEach(newvalue, function (item, key) {
            if (item.num < 1) {
                var returnKey = confirm("是否将商品从购物车内移除")
                if (returnKey) {
                    $scope.remove(item.id)
                }else(
                    item.num = oldvalue[key].num
                )
            } 
        })
    }, true)*/

    $scope.$watch("apples",function(newvalue,oldvalue){
        angular.forEach(newvalue,function(item,key){
            if(item.num<1){
               var returnKey = confirm("是否将商品从购物车内移除") ;
               if(returnKey){
                  $scope.remove(item.id)
               }else{
                  item.num = oldvalue[key].num
               }
            }
        })
    },true)
    
}])
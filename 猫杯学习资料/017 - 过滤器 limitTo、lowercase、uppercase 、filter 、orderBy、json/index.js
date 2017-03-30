var app = angular.module("myapp", []);
app.factory("Data",function(){
        return {
            message:{
                low: "abc",
                up: "ABC"
            },
            city:[
                {
                    name:"上海",
                    py:"shanghai"
                },
                {
                    name:"北京",
                    py:"beijing"
                },
                {
                    name:"沈阳",
                    py:"shenyang"
                }
            ]
        }
    })
// app.filter("checkName",function(){
//     return function(obj){
//         var blu = true;
//         if(obj.py.indexOf("b")){
//             blu = false;
//         }else{
//             blu = true
//         }
//        return blu ;
//        console.log(blu)
//     }
   
        
    
// })
app.controller("firstController", ["$scope","$filter","Data", function ($scope,$filter,Data) {
    $scope.data = Data;

    $scope.check = function(obj){
      //  console.log(obj)
        if(obj.py.indexOf("b") === -1){
            return false;
        }
        return true;
    }


    // $scope.check = function(obj){
    //     //console.log(obj)
    //     //返回的是真保留，返回的是假不保留
    //     var blu =true;
    //     if(obj.py.indexOf("a")===-1){
    //         blu =  false
    //     }else{
    //          blu =  true
    //     }
    //     return blu;
    // }
}])
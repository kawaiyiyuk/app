var app = angular.module('myapp',[]);
app.directive('dir',function(){
    return {
        restrict:'EA',
        scope:{},
        controller:function($scope,$element,$attrs,$transclude){
        	console.log($scope);
        	console.log($element);
        	console.log($attrs);
        	console.log($transclude);
        },
        /*这里的controller有两种表示方法，一种就是这样的样式，在
        指令内部通过匿名构造函数的方式来定义一个内联的控制器


			*/
        templateUrl:'tlp/tlp1.html',
        transclude:true
    }
});
app.directive('dir2',function(){
    return {
        restrict:'EA',
        scope:{},
        controller:'someControlelr',
        /*第二种方法就是传入一个字符串，系统会以字符串的值为名
        来查找注册在应用中的控制器的构造函数
        在应用中的其他地方，可以是同一个文件夹或被index.html包含的另一个文件
			*/
        templateUrl:'tlp/tlp1.html',
        transclude:true
    }
});


app.controller('firstController',['$scope',function($scope){

}])
app.controller('someControlelr',function($scope,$element,$attrs,$transclude){
	/*这里我们可以将任意可以被注入的AngularJs服务传递给控制器，例如我们想将$log
	服务传入控制器，只需要简单的将它注入到控制器当中，便可在指令中使用了

	有几个自带的特殊服务可以注入到控制器当中
	$scope  与指令元素相关联的当前作用域，也就是你当前创建出来的这个新的作用域相关联的
	$element 当前指定对应的元素
	$attrs 由当前元素的属性组成的对象
	$transclude 嵌入链接函数会对应的嵌入作用域进行预绑定
	*/
})
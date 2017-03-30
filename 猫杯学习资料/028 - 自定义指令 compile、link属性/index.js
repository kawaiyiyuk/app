var app = angular.module('myapp',[]);
app.directive('dir',function(){
	return {
		restrict:'EA',
		templateUrl:'tlp.html',
		replace:true,
		compile:function(tELement,tAttrs,transclude){
			console.log('dir1的编译阶段')
			//tElement返回的是当前div,也就是带有dir属性的元素,并且这是一个JQ对象
			//tELement.addClass('abc')
			//tAttrs 当前元素的属性
			return{
				pre:function perlink(){
					console.log('perlink 1')
				},

				post:function postlink(){
					console.log('postlink 1 ')
				}
			}

			//这里返回可以直接返回postlink函数
			//return function(){
				
			//}				
		},
		//这块的link就表示上面的postlink
		link:function(){
			console.log('link 1 ')
		}
	}
});

app.directive('dir2',function(){
	return {
		restrict:'EA',
		replace:true,
		compile:function prelink(){
   		   console.log('dir2的编译阶段');
   		   return{
				pre:function perlink(){
					console.log('perlink 2')
				},

				post:function postlink(){
					console.log('postlink 2 ')
				}
			}
		},
		link:function postlink(){
			console.log('link 2 ')
		}
	}
});
app.controller('firstController',['$scope',function($scope){
	$scope.users =[
		{	
			id:20,
			name:'张三'
		},			
		{
			id:30,
			name:'李四'
		}
	]
}])

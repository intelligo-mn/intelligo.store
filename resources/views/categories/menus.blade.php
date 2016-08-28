@extends('layouts.wpanel')
@section('page_class') 'products_view' @stop
@section('content')
	<nav id="menu-top-category" class="clearfix">
		<ul ng-controller="topCategories">
			<li class="ng-hide" ng-show="actual" ng-repeat="category in actual" id="cat-[[category.id]]" ng-click="subs($index)">[[category.name]]</li>
		</ul>
	</nav>
	@parent
	@section('panel_left_content')
		<nav id="menu-left-category" ng-controller="menuCategories">
			<ul >
				<li ng-show="all" ng-repeat="category in all" id="cat-[[category.id]]" class="[[category.thisClass]] ng-hide" ng-click="subs([[category.id]])">[[category.name]] ([[category.numProducts]])</li>
			</ul>
		</nav>
	@stop
@stop
@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('menuCategories',['$scope',function($scope){
                var all=({!! json_encode($categories) !!});
                $scope.subs=function(id){
                	var i,li=document.querySelectorAll('#menu-left-category ul li'),nameClass='',pmc=0;
                	for(i in li){
                		if (!li[i].className) continue;
                		nameClass=li[i].className.split(' ');
                		li[i].className=nameClass[0];
                	}
                	nameClass=document.querySelector('#menu-left-category ul li#cat-'+id).className.split(' ');
                	document.querySelector('#menu-left-category ul li#cat-'+id).className=nameClass[0]+' active';
                	for(i in li){
                		if (!li[i].className) continue;
                		nameClass=li[i].className.split(' ');
                		if (nameClass[0]=='main-cate')
                			if (pmc>=0) pmc=i;
                			else li[i].className='main-cate inactive';
                		if (nameClass[1]){
                			li[i].className=nameClass[0]+' active';
                			if (pmc!=i) li[pmc].className='main-cate active';
                			pmc=-1;
                		}
                	}
                };
                var joinSubs=function(categories,calssName){
                	var array=[],temp,sub;
                	for(var i=0;i<categories.length;i++){
                		if (!categories[i].thisClass) categories[i].thisClass=calssName;
                		categories[i].numProducts=categories[i].product.length;
                		array.push(categories[i]);
                		while(categories[i].sub && categories[i].sub.length>0){
                			sub=categories[i].sub;
                			temp=null;
                			if(sub[0].sub && sub[0].sub.length>0){
                				temp=joinSubs(sub,'sub-cate');
                				array=array.concat(temp);
                				break;
                			}else{
                				sub[0].numProducts=sub[0].product.length;
                				sub[0].thisClass='sub-cate';
                				array.push(sub.shift());
                			}
                		}
                	}
                	return array;
                };
                $scope.all=joinSubs(all,'main-cate');
            }]);
	 	    app.controller('topCategories',['$scope',function($scope){
        		$scope.actual=({!! json_encode($actualCategory) !!});
            }]);
        })(angular.module("AntVel"));
    </script>
@stop
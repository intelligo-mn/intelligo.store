@extends('layouts.master')
@section('title')@parent - {{ trans('notices.all_title') }} @stop
@section('page_class') products_view @stop

@section('css')
	@parent
@stop

@section('content')
	@parent

	@section('panel_left_content')
        @include('user.partial.menu_dashboard')
    @stop

	@section('center_content')
		
		<div class="panel panel-primary" ng-controller="NoticesController">
			
			<div class="panel-heading"><h6><span class="glyphicon glyphicon-comment"></span>&nbsp;{{ trans('notices.all_title') }}</h6></div>

			<div class="panel-body">
				<p>
					<span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
					{{ trans('notices.all_summary') }}
				</p>
			</div>

			<ul class="list-group">
				<li class="list-group-item" ng-repeat="notice in data.notices" >
					<a href="[[getLink(notice)]]" ng-bind="getDesc(notice)"></a>
				</li>
			</ul>
		</div>
	@stop
@stop

@section('scripts')
	@parent
	<script>
		(function(app){
			app.controller('NoticesController', ['$scope','Templates', function($scope,Templates){
				$scope.data=({!! json_encode($data) !!});
				var actions=$scope.data.action_types;
				$scope.getDesc=Templates.noticeDescription(actions);
				$scope.getLink=Templates.noticeLink(actions);
			}]);
			app.controller('menuCategories',['$scope',function($scope){
				var all=({!! json_encode('$categories') !!}),actual=({!! json_encode('$cate') !!});
			var subs=function(id){
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
			}
			var joinSubs=function(categories,className){
				var array=[],temp,sub;
				for(var i=0;i<categories.length;i++){
					if (!categories[i].thisClass) categories[i].thisClass=className;
					// categories[i].numProducts=categories[i].product.length;
					array.push(categories[i]);
					while(categories[i].sub && categories[i].sub.length>0){
						sub=categories[i].sub;
						temp=null;
						if(sub[0].sub && sub[0].sub.length>0){
							temp=joinSubs(sub,'sub-cate');
							array=array.concat(temp);
							break;
						}else{
							// sub[0].numProducts=sub[0].product.length;
							sub[0].thisClass='sub-cate';
							array.push(sub.shift());
						}
					}
				}
				return array;
			}
			$scope.all=joinSubs(all,'main-cate');
			if (actual && actual!='') setTimeout(function(){ subs(actual); }, 1000);
		}]);
		app.controller('topCategories',['$scope',function($scope){
			$scope.actual=({!! json_encode('$listActual') !!});
		}]);
		})(angular.module("AntVel"));
	</script>
@stop
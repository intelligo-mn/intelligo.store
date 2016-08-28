@extends('layouts.wpanel')
@section('title')@parent - {{ trans('globals.category') }} @stop
@section('page_class') category-panel @stop
@section('center_content')
    @include('partial.message')
    @include('categories.parents_tree', ['master' => $category->parent_tree])


    <div ng-controller="CategoryController" class="panel panel-default">
        <div class="panel-heading"><h6><span class="glyphicon glyphicon-tasks"></span> {{ trans('globals.category') }}</div></h6>
        <div class="panel-body">
            <div class="row form-group">
                <label class="col-md-4 control-label">{{ trans('globals.name') }}</label>
                <div class="col-md-6" ng-bind="category.name"></div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label">{{ trans('globals.description') }}</label>
                <div class="col-md-6" ng-bind="category.description"></div>
            </div>
            <div class="row form-group" ng-show="category.image">
                <label class="col-md-4 control-label">{{ trans('globals.image') }}</label>
                <div class="col-md-2">
                    <div class="thumbnail" style="height:120px; background-image:url('[[category.image || '/img/no-image.jpg']]'); background-size: 100%;" ></div>
                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-6 demo-icons">
                    <div class="demo-content">
                        <span class="[[category.icon]]"ng-bind="category.icon"></span>
                        <input type="hidden" name="icon" ng-model="icon" value="[[category.icon]]" />
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label">{{ trans('globals.status') }}</label>
                <div class="col-md-6" ng-bind="status()">
                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label">{{ trans('globals.type') }}</label>
                <div class="col-md-6" ng-bind="type()"></div>
            </div>
            <div class="form-group" ng-if="category.group&&category.group.length">
                <label class="col-md-4 control-label">
                    {{ trans('categories.parent_category') }}
                    ({{ trans('globals.type_categories.group') }})
                </label>
                <div class="col-md-6" ng-bind="category.parentg"></div>
            </div>
            <div class="form-group" id="parents" ng-if="category.store&&category.store.length">
                <label class="col-md-4 control-label">
                    {{ trans('categories.parent_category') }}
                    ({{ trans('globals.type_categories.store') }})
                </label>
                <div class="col-md-6" ng-bind="category.parents"></div>
            </div>
            <div class="row form-group">
                <div class="col-md-6">
                    <a href="[[link()]]" class="btn btn-default">Edit</a>
                </div>
            </div>
        </div>
    </div>
    @include('categories.list_childs',['categories'=>$category->childs,'title'=>trans('globals.subcategories')])
@stop
@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('CategoryController', ['$scope', function ($scope) {
                $scope.category=({!! $category->toJson() !!});
                var status_list={
                        0:'{{ trans('globals.inactive') }}',
                        1:'{{ trans('globals.active') }}'
                    },
                    type_list=({!! json_encode(trans('globals.type_categories')) !!});
                $scope.status=function(){
                    return status_list[($scope.category.status!==undefined&&$scope.category.status)||1];
                };
                $scope.link=function(){
                    return '{{ route('wpanel.category.edit','ID') }}'.replace('ID',$scope.category.id);
                };
                $scope.type=function(){
                    return type_list[$scope.category.type];
                };
            }]);
        })(angular.module("AntVel"))
    </script>
@stop


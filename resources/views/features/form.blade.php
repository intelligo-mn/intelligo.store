@extends('layouts.wpanel')
@section('center_content')
	@include('partial.message')
	<div class="panel panel-default">
		<div class="panel-heading">
			<h6><span class="glyphicon glyphicon-th-list"></span> {{ trans('features.new_product_feature') }}</h6>
		</div>
		<div class="panel-body">
			@if(!$edit)
			{!! Form::model(Request::all(),['route'=>'wpanel.productsdetails.store', 'class'=>'form-horizontal', 'role'=>'form','ng-controller'=>'features_form']) !!}
			@else
			{!! Form::model($feature,['route'=>['wpanel.productsdetails.update',$feature['id']], 'class'=>'form-horizontal', 'role'=>'form','method'=>'PUT','ng-controller'=>'features_form']) !!}
			@endif
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('globals.status') }}</label>
					<div class="col-md-6">
						{!! Form::select('status',[1=>trans('globals.active'),2=>trans('globals.inactive')],null,['class'=>'form-control']) !!}
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('globals.name') }}</label>
					<div class="col-md-6">
						{!! Form::text('name',null,['class'=>'form-control']) !!}
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('features.type_input') }}</label>
					<div class="col-md-6">
						{!! Form::select('input_type',$typeInputs,null,['class'=>'form-control','ng-model'=>'typeInput','ng-change'=>'checkInputs()']) !!}
					</div>
					<label class="col-md-6 col-md-offset-4 control-label">{{ trans('features.msg_help_type_input') }}</label>
				</div>
				<div class="form-group" ng-hide="(typeInput=='radio'||typeInput=='checkbox')">
					<label class="col-md-4 control-label">{{ trans('features.max_num_values') }}</label>
					<div class="col-md-6">
						{!! Form::number('max_num_values','[[number]]',['class'=>'form-control','ng-model'=>'number','ng-blur'=>'refresh()']) !!}
					</div>
					<label class="col-md-6 col-md-offset-4 control-label">{{ trans('features.msg_help_max_num_values') }}</label>
					<label class="col-md-6 col-md-offset-4 control-label">{{ trans('features.maximum_number') }}[[ numberMax ]]</label>
				</div>
				<div class="form-group">
				<div class="panel panel-default col-md-6 col-md-offset-4" ng-show="typeInput=='select'">
					<div class="panel-heading">{{ trans('features.default_values') }}</div>
					<div class="panel-body">
						<div class="form-group">
							<label class="col-md-4 control-label">{{ trans('features.select_condition') }}</label>
							<div class="col-md-6">
								{!! Form::select('condition',trans('features.default_values_array'),null,['class'=>'form-control','ng-model'=>'condition','ng-change'=>'checkOptions()']) !!}
							</div>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="condition=='general'">{{ trans('features.default_values_msg_help_array.msg_help_general') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="condition=='specific_data'">{{ trans('features.default_values_msg_help_array.msg_help_specific_data') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="condition=='custom_General'">{{ trans('features.default_values_msg_help_array.msg_help_custom_General') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="condition=='custom_specific_data'">{{ trans('features.default_values_msg_help_array.msg_help_custom_specific_data') }}</label>
							<label class="col-md-10 control-label" ng-show="(condition=='general'||condition=='specific_data')">
								{{ trans('features.separate_with_bar') }}
							</label>
							<label class="col-md-10 control-label" ng-show="(condition=='custom_General' || condition=='custom_specific_data')">
								{{ trans('features.helper_method') }}
							</label>
						</div>
						<div ng-show="(condition=='general'||condition=='custom_General')">
							<div class="col-md-10">
								{!! Form::text('default',null,['class'=>'form-control','ng-disabled'=>"(condition!='general'&&condition!='custom_General')"]) !!}
							</div>
						</div>
						<div ng-show="(condition=='specific_data'||condition=='custom_specific_data')">
							<label class="btn btn-default col-md-1 col-md-offset-3  glyphicon glyphicon-plus" ng-show="number<numberMax"ng-click="add()"></label>
							<label class="col-md-1 col-md-offset-3" ng-hide="number<numberMax"></label>
							<label class="btn btn-default col-md-1 col-md-offset-1 glyphicon glyphicon-minus" ng-show="number>numberMin" ng-click="remove()"></label>
							<label class="col-md-12 control-label"></label>
							<div class="col-md-12" ng-repeat="x in repeat track by $index">
								<label class="col-md-4 control-label">{{ trans('features.default_values_msg_help_array.msg_help_repeat_values').' ' }}[[$index + 1]]</label>
								<div class="col-md-6">
									{!! Form::text('default[]',null,['class'=>'form-control','ng-disabled'=>"(condition!='specific_data'&&condition!='custom_specific_data')"]) !!}
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="form-group">
					<div class="panel panel-default col-md-6 col-md-offset-4" ng-show="(typeInput=='checkbox'||typeInput=='radio')">
						<div class="panel-heading">{{ trans('features.default_values') }}</div>
						<div class="panel-body">
							<div class="form-group" >
								<div class="col-md-10">
									{!! Form::text('default2',null,['class'=>'form-control']) !!}
								</div>
								<label class="col-md-10 control-label">{{ trans('features.default_values_msg_help_array.msg_help_checkbox_data') }}</label>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('features.type_product') }}</label>
					<div class="col-md-6">
						{!! Form::select('type_products',$typesProduct,null,['class'=>'form-control','multiple'=>'']) !!}
					</div>
					<label class="col-md-6 col-md-offset-4 control-label">{{ trans('features.msg_help_type_product') }}</label>
				</div>
				<div class="form-group">
				<div class="panel panel-default col-md-6 col-md-offset-4">
					<div class="panel-heading">{{ trans('features.validation') }}</div>
					<div class="panel-body">
						<div class="form-group">
							<label class="col-md-4 control-label">{{ trans('features.select_condition') }}</label>
							<div class="col-md-6">
								{!! Form::select('validation',trans('features.validation_rules_array'),null,['class'=>'form-control','ng-model'=>'validation']) !!}
							</div>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="validation=='all_required'">{{ trans('features.validation_rules__msg_help_array.msg_help_all_required') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="validation=='one_required'">{{ trans('features.validation_rules__msg_help_array.msg_help_one_required') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="validation=='required_number'">{{ trans('features.validation_rules__msg_help_array.msg_help_required_number') }}</label>
						</div>
						<div class="form-group" ng-hide="typeInput!='text'">
							<label class="col-md-4 control-label">{{ trans('features.type_data') }}</label>
							<div class="col-md-6">
								{!! Form::select('type_data',trans('features.validation_rules_type_data_array'),null,['class'=>'form-control','ng-model'=>'type_data']) !!}
							</div>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_data=='numeric'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_numeric') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_data=='letters'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_letters') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_data=='alphanumeric'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_alphanumeric') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_data=='personalized_value'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_personalized_value') }}</label>
						</div>
						<div class="form-group" ng-hide="(type_data!='numeric'||typeInput!='text')">
							<label class="col-md-4 control-label">{{ trans('features.numerical_validation') }}</label>
							<div class="col-md-6">
								{!! Form::select('numerical_validation',
									trans('features.validation_rules_numerical_validation_array'),'',
										['class'=>'form-control','ng-model'=>'numerical_validation']) !!}
							</div>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="numerical_validation=='minimum_value'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_minimum_value') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="numerical_validation=='maximum_value'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_maximum_value') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="numerical_validation=='range_values'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_range_values') }}</label>
							<div class="" ng-class="(numerical_validation!='range_values'?'col-md-10':'col-md-4')" ng-show="numerical_validation">
								{!! Form::number('start_value_number',null,['class'=>'form-control']) !!}
							</div>
							<div class="col-md-4" ng-show="numerical_validation=='range_values'">
								{!! Form::number('end_value_number',null,['class'=>'form-control']) !!}
							</div>
						</div>
						<div class="form-group" ng-hide="type_data=='numeric'||typeInput!='text'">
							<label class="col-md-4 control-label">{{ trans('features.number_characters') }}</label>
							<div class="col-md-6">
								{!! Form::select('number_characters',trans('features.validation_rules_number_characters_array'),null,['class'=>'form-control','ng-model'=>'number_characters']) !!}
							</div>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="number_characters=='minimum_characters'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_minimum_characters') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="number_characters=='maximum_characters'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_maximum_characters') }}</label>
							<label class="col-md-6 col-md-offset-4 control-label" ng-show="number_characters=='character_range'">
								{{ trans('features.validation_rules__msg_help_array.msg_help_character_range') }}</label>
							<div class="" ng-class="(number_characters!='character_range'?'col-md-10':'col-md-4')" ng-show="number_characters">
								{!! Form::number('start_value_characters',null,['class'=>'form-control']) !!}
							</div>
							<div class="col-md-4" ng-show="number_characters=='character_range'">
								{!! Form::number('end_value_characters',null,['class'=>'form-control']) !!}
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('features.help_messages') }}</label>
					<label class="col-md-6 control-label">{{ trans('features.help_messages_msg_help_array.msg_help_help_messages') }}</label>
				</div>
				<div class="form-group" ng-click="refresh()">
					<label class="col-md-4 control-label" ng-hide="typeInput&&(typeInput!='text'&&typeInput!='select')">{{ trans('features.type_message') }}</label>
					<div class="col-md-6" ng-hide="typeInput&&(typeInput!='text'&&typeInput!='select')">
						{!! Form::select('type_message',trans('features.help_messages_array'),null,['class'=>'form-control','ng-model'=>'type_message']) !!}
					</div>
					<label class="col-md-6 col-md-offset-4 control-label">{{ trans('features.help_messages_msg_help_array.msg_help_type_message') }}</label>
					<div ng-show="(type_message=='general'||type_message=='general_selection')">
						<div class="col-md-10">
							{!! Form::text('message',null,['class'=>'form-control','ng-disabled'=>"(type_message!='general'&&type_message!='general_selection')"]) !!}
						</div>
					</div>
					<div ng-show="(type_message=='specific'||type_message=='specific_selection')">
						<label class="btn btn-default col-md-1 col-md-offset-3  glyphicon glyphicon-plus" ng-show="number<numberMax"ng-click="add()"></label>
						<label class="col-md-1 col-md-offset-3" ng-hide="number<numberMax"></label>
						<label class="btn btn-default col-md-1 col-md-offset-1 glyphicon glyphicon-minus" ng-show="number>numberMin" ng-click="remove()"></label>
						<label class="col-md-12 control-label"></label>
						<div class="col-md-12" ng-repeat="x in repeat track by $index">
							<label class="col-md-4 control-label">{{ trans('features.help_messages_msg_help_array.msg_help_repeat_values').' ' }}[[$index + 1]]</label>
							<div class="col-md-6">
								{!! Form::text('message[]',null,['class'=>'form-control','ng-disabled'=>"(type_message!='specific'&&type_message!='specific_selection')"]) !!}
							</div>
						</div>
					</div>
					<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_message=='general'">{{ trans('features.help_messages_msg_help_array.msg_help_general') }}</label>
					<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_message=='specific'">{{ trans('features.help_messages_msg_help_array.msg_help_specific') }}</label>
					<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_message=='general_selection'">{{ trans('features.help_messages_msg_help_array.msg_help_general_selection') }}</label>
					<label class="col-md-6 col-md-offset-4 control-label" ng-show="type_message=='specific_selection'">{{ trans('features.help_messages_msg_help_array.msg_help_specific_selection') }}</label>
				</div>
				<div class="form-group">
					<div class="col-md-6 col-md-offset-4">
						<button type="submit" class="btn btn-primary">
							{{ trans('globals.save') }}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
@stop
@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('features_form', ['$scope', function ($scope) {
                $scope.number='{{ Input::old("max_num_values")?Input::old("max_num_values"):($edit?$feature["max_num_values"]:1)  }}'*1;
                $scope.repeat=[];
                $scope.numberMax=5;
                $scope.numberMin=1;
                $scope.typeInput='{{ Input::old("input_type")?Input::old("input_type"):($edit?$feature["input_type"]:"")  }}'.trim();
                $scope.condition='{{ Input::old("condition")?Input::old("condition"):($edit?$feature["condition"]:"")  }}'.trim();
                $scope.validation='{{ Input::old("validation")?Input::old("validation"):($edit?$feature["validation"]:"")  }}'.trim();
                $scope.type_data='{{ Input::old("type_data")?Input::old("type_data"):($edit?$feature["type_data"]:"")  }}'.trim();
                $scope.numerical_validation='{{ Input::old("numerical_validation")?Input::old("numerical_validation"):($edit?$feature["numerical_validation"]:"")  }}'.trim();
                $scope.number_characters='{{ Input::old("number_characters")?Input::old("number_characters"):($edit?$feature["number_characters"]:"")  }}'.trim();
                $scope.type_message='{{ Input::old("type_message")?Input::old("type_message"):($edit?$feature["type_message"]:"")  }}'.trim();
    			// $scope.typeInput=$scope.typeInput?$scope.typeInput:null;
				// $scope.condition=$scope.condition?$scope.condition:null;
				// $scope.validation=$scope.validation?$scope.validation:null;
				// $scope.type_data=$scope.type_data?$scope.type_data:null;
				// $scope.numerical_validation=$scope.numerical_validation?$scope.numerical_validation:null;
				// $scope.number_characters=$scope.number_characters?$scope.number_characters:null;
				// $scope.type_message=$scope.type_message?$scope.type_message:null;
                $scope.refresh=function(){
                	if (isNaN($scope.number)){
                		$scope.number=1;
                	}
                	if ($scope.number>$scope.numberMax){
                		$scope.number=$scope.numberMax;
                		alert("{{ trans('features.maximum_number') }} "+$scope.numberMax);
                	}
                	if ($scope.number<$scope.numberMin){
                		$scope.number=$scope.numberMin;
                	}
                	$scope.repeat=[];
                	for (var i=0;i<$scope.number;i++){
                		$scope.repeat.push(1);
                	}
                }
                $scope.checkOptions=function(){
                	// indexOf type_message
                	var stringNumberMinOne='general custom_General general_selection';
                	var stringNumberMinTwo='specific_data custom_specific_data specific specific_selection';
                	if (stringNumberMinOne.indexOf($scope.condition)!=-1 ||
                		stringNumberMinOne.indexOf($scope.type_message)!=-1){
                		$scope.numberMin=1;
                	}
                	if (stringNumberMinTwo.indexOf($scope.condition)!=-1 ||
                		stringNumberMinTwo.indexOf($scope.type_message)!=-1){
                		$scope.numberMin=2;
                	}
                	$scope.refresh();
                }
                $scope.add=function(){
                	$scope.refresh();
                	$scope.number++;
                	$scope.repeat.push(1);
                }
                $scope.remove=function(){
                	$scope.refresh();
                	if ($scope.number>1){
                		$scope.number--;
                		$scope.repeat.splice(1,1);
                	}
                }
                $scope.checkInputs=function(){
                	var msgGeneral='radio checkbox image document';
                	if (msgGeneral.indexOf($scope.typeInput)!=-1){
                		$scope.type_message='general';
                	}
                }
                $scope.refresh();
            }]);
        })(angular.module("AntVel"))
    </script>
@stop
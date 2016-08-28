/**
 * Antvel - App Angular Js Functions
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

(function(){
'use strict';
var app=angular.module('AntVel');

//Template service
app.factory('Templates',function(){
	return {
		noticeDescription:function(actions){
			return function(notice){
				var filter={},template=(actions&&actions[notice.action_type_id]&&actions[notice.action_type_id].notice_template)||[];
				template.match(/\[[^\]]+\]/g).forEach(function(value){
					filter[value.replace(/\[|\]/g,'')]=value;
				});
				for(var item in filter)
					template=template.replace(filter[item],notice[item]||item);
				return template;
			};
		},
		noticeLink:function(actions){
			return function(notice){
				var link=(actions&&actions[notice.action_type_id]&&actions[notice.action_type_id].link)||'';
				return link.replace('source_id',notice.source_id);
			};
		}
	};
});

// Auto Complete Busqueda general
app.controller('AutoCompleteCtrl', function($scope,$http,$location) {

	//Envia formulario
	$scope.selectedItem = function(result){

		if (result.kind === 'suggestions') {

			window.location = '/products/'+result.originalObject.id;

		}else if(result.kind === 'categories'){

			var filter = {"categories":{"name":result.title,"id":result.originalObject.id}};
			$location.search('refine','['+JSON.stringify(filter)+']');
			$location.path('/products/');
            window.location = $location.absUrl();

		}else{

			$('#searchForm').submit();

		}
	};
});

app.controller('AutoCompleteGroupCtrl', function($scope, $http, notify, $compile) {

	$scope.selectedItem = function(result){

	   $http.post(
			'productsGroup',
			{ignoreLoadingBar : true,
			 group : $('#group_id').val(),
			 id : result.originalObject.id}
		).success(function(data){

			if(data.price!==undefined){

				var row = $('#group_id').val()+'_'+result.originalObject.id;

				var html='<tr id="product_'+row+'">'+
				          '<th scope="row">'+result.originalObject.id+'</th>'+
				          '<td>'+result.title+'</td>'+
				          '<td>'+data.price+'</td>'+
				          '<td>'+
				          	'<button class="btn btn-danger btn-sm" ng-click="deleteFromGroup(\''+row+'\')">'+
				          		 data.label_delete+'&nbsp;<span class="glyphicon glyphicon-trash"></span>'+
				          	'</button>'+
				          '</td>'+
				        '</tr>';

				$('.grouped_list').append(html);
				$compile($('.grouped_list'))($scope);
				$('#searchGroup_value').val('');
				notify({duration:5000, messageTemplate: '<p>'+data.message+'!</p>', classes:'alert alert-success'});

			}

		});
	};
});

app.controller('listGroupCtrl', function($scope, $http, notify) {

	$scope.deleteFromGroup = function(id){

	   $http.delete('productsGroup/'+id, {ignoreLoadingBar : true})
	   		.success(function(data){

			if(data.deleteAll){

				$('.grouped_list').html('');

			}else{

				$("#product_"+id).remove();
			}
			notify({duration:5000, messageTemplate: '<p>'+data.message+'!</p>', classes:'alert alert-success'});
		});
	};
});

//Dialogos Modales
app.controller('ModalCtrl', function($scope, $uibModal){
	var modalInstance = null;
	$scope.data = {};
	$scope.modalOpen = function (opts) {
		if( opts.resolve === '' || opts.resolve === null ){
			opts.resolve = 'data';

		}

		var obj= {},literal = opts.resolve;
		obj[literal] = function (){ return $scope.data; };

		var modalInstance = $uibModal.open({

			templateUrl: opts.templateUrl+(opts.noCache?'?'+Math.random():'') || null,

			template: opts.template || null,

			controller: opts.controller,

			size: opts.size || 'lg',

			resolve: obj
		});

	};
})
.directive('stopEvent', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			element.on(attr.stopEvent, function (e) {
				e.stopPropagation();
			});
		}
	};
});
//control para notificaciones de menu (push)
app.controller('PushNoticesController',
['$scope','$http','$timeout','Templates',function($scope,$http,$timeout,Templates){
	var loop,ajax,$t;
	var actions={};
	$scope.getDesc=Templates.noticeDescription(actions);
	$scope.getLink=Templates.noticeLink(actions);
	var repeat=function(){
			if(angular.isDefined(ajax)) return;
			loop=true;
			ajax=$http.get(
				'/user/notices'+($scope.date===undefined?'':'?date='+$scope.date), {ignoreLoadingBar: true}
			).success(function(data){
				$scope.push=data.push;
				$scope.date=data.date;
				if(data.notices&&data.notices.length)
					$scope.notices=data.notices;
				if(data.action_types){
					actions=data.action_types;
					$scope.getDesc=Templates.noticeDescription(actions);
					$scope.getLink=Templates.noticeLink(actions);
				}
			}).finally(function(){
				ajax=undefined;
				//llamado ajax periodicamente
				if(loop) $t=$timeout(function(){ repeat(); },5000);
			});
		},
		check=function(notice){
			if(
				$scope.date===undefined ||
				(notice&&notice.status=='read') ||
				(!notice&&$('#push-notices').hasClass('open'))
			) return;
			var id=notice&&notice.id;
			if(id) console.log('check notice '+id);
			$scope.push=0;
			$http.get(
				'/user/notices/check/'+(id||'')+'?date='+$scope.date,
				{ignoreLoadingBar: true}
			).success(function(data){
				//if checking a notice, redirect to the link
				if(id) document.location=$scope.getLink(notice);
				$scope.push=data.push;
				$scope.date=data.date;
				if(data.notices&&data.notices.length)
					$scope.notices=data.notices;
			});
		},
		start=function(){
			if(loop) return;
			repeat();
		},
		stop=function(){
			if(loop) loop=false;
		};
	$scope.repeat=repeat;
	$scope.start=start;
	$scope.stop=stop;
	$scope.$on('$destroy',function(){
		$scope.stop();
	});
	$scope.date=undefined;
	$scope.push=undefined;
	$scope.count=0;
	$scope.notices=[];
	$scope.check=check;
	$(function(){
		//if click a notice not read, stop link function and execute ng-click
		$('#push-notices').off('.notice').on('click.notice','ul>li.new>a,ul>li.unread>a',function(e){
			e.preventDefault();
			return false;
		});
	});
	start();
}]);
//control para vista de notificaciones

//Control de login
app.controller('LoginController',['$scope','$http',function($scope, $http){
	$scope.havePassword = true;

	$scope.setHavePassword = function(status){
		$scope.havePassword = status;
	};
}]);

//Control de categorias

/**
 * Categories Controller
 * Save the selected category into "category" hidden, in order to use it in the search
 */
app.controller('CategoriesController',['$scope','$http',function($scope, $http)
{
	/**
	 * catSelected
	 * Category var model
	 */
	$scope.catSelected = {};

	/**
	 * refine
	 * assign the category info to form hidden named "category"
	 */
	$scope.refine = function()
	{
		return $scope.catSelected.id ? $scope.catSelected.id+'|'+$scope.catSelected.name :'';
	};

	/**
	 * setCategorie
	 * assign the category info to Category var model
	 * @param {int} id category id
	 * @param {string} cat category name
	 */
	$scope.setCategorie = function(id, cat){
		$scope.catSelected.name = cat;
		$scope.catSelected.id = id;
	};
}]);

//Control for rate Angular UI Rate
app.controller('RatingCtrl', function ($scope) {
    $scope.max = 5;
});
//Control de WishList
app.controller('WishListControllerModal', function($scope, $http, $rootScope,$uibModalInstance){
    $scope.newList = {};

    $scope.createList = function(productId){
        if($scope.newList.description){
            $http.post('/wishes/store', $scope.newList).
                success(function(data, status) {
                    if (data.success) {
                        //$rootScope.allLists.push(data.newList);
                        console.log(data);
                        $uibModalInstance.close();
                        if(productId){
                        	window.location.replace('/products/'+productId);
                        }else{
                        	window.location.replace('/wishes/directory');
                        }
                    }else{
                        console.log(data); //mensajes de error
                    }
                }).
                error(function(data, status, headers, config) {
                    $rootScope.allLists.pop();
                    console.log(data);
                });
            console.log($scope.newList);
        }else{
            console.log($scope.newList);
        }
        //$uibModalInstance.close();
    };
});

//Control de Feedback entre vendedor y cliente
app.controller('CommentControllerModal', function($scope, $http, $rootScope,$uibModalInstance){
    $scope.newComment = {};

    $scope.commentOrder = function(order_id){
        $scope.newComment.order_id = order_id;
        if($scope.newComment.comment_text){
            $http.post('/user/orders/storeComment', $scope.newComment).
                success(function(data, status) {
                    if (data.success) {
                        console.log(data);
                        $uibModalInstance.close();
                        window.location.replace('/user/orders/show/'+data.order_id);
                    }else{
                        console.log(data); //mensajes de error
                    }
                }).
                error(function(data, status, headers, config) {
                    //$rootScope.allLists.pop();
                    console.log(data);
                });
            console.log($scope.newComment);
        }else{
            console.log($scope.newComment);
        }
        $uibModalInstance.close();
    };
});


/**
 * PassInfo
 * Services to pass a var between controllers
 */
app.service('PassInfo', function ()
{
       	var property = '';

        return {
            getProperty: function ()
            {
                return property;
            },

            setProperty: function(value)
            {
                property = value;
            }
        };
});

//Control de Direcciones
app.controller('AddressesControllerModal', function($scope, $http, $rootScope, $uibModalInstance, notify, $window, PassInfo){

	/**
	 * auxCallBack
	 * it is the scope bettwen address list and the modal. auxCallBack contains the callback url, so the controller
	 * knows where to gos after process either a update or a insert
	 * @type {[type]}
	 */
	var auxCallBack = PassInfo.getProperty();

	/**
	 * _address
	 * it is the model to be used either in the update or insert process
	 * @type {Object}
	 */
	$scope._address = {};

	/**
	 * getCountries
	 * this method retrieves the countries information from restcountries.eu
	 * @return [json] countries list
	 */
	$scope.getCountries = function()
	{
		$http.get('https://restcountries.eu/rest/v1/all')
			.success(function(data, status)
			{
				$scope.countries = data;
			});
	};

	$scope.getCountries();

	$scope.create = function()
	{
		$http.put('/user/address/store', $scope._address).
			success(function(data, status)
			{
				if (data.success)
				{
					$uibModalInstance.close();
					$window.location.href = auxCallBack != '' ? auxCallBack : data.callback;
				}

				else
				{
					notify({ duration: 5000, messageTemplate:'<p>'+data.message+'</p>', classes: data.class });
				}
			});
	};

	$scope.update = function(){

		$http.put('/user/address/'+$scope._address.id, $scope._address).

			success(function(data, status) {

				if (data.success)
				{
					$uibModalInstance.close();
					$window.location.href = auxCallBack != '' ? auxCallBack : data.callback;
				}

				else
				{
					notify({ duration: 5000, messageTemplate:'<p>'+data.message+'</p>', classes: data.class });
				}
			});
	};

});

app.controller('getKeysVirtualProducts',function($scope,$http,data){
    $scope.keys=[];
    $scope.message='';
    $scope.class='alert-danger';
    $scope.show=false;
    $scope.thisShow=true;
    $http.get('/showAllKeys/'+data.data).success( function(data) {
        if (data.message){
            $scope.message=data.message;
    		$scope.show=true;
        }else $scope.keys=data;
    });
    $scope.change=function(id){
    	$http.get('/deleteKey/'+id).success( function(data) {
        	if (data.message)
	        	$scope.message=data.message;
	        else{
	        	$scope.message=data.success;
			    $scope.class='alert-success';
	        }
    		$scope.show=true;
    		$scope.thisShow=true;
	    });
    };
});
app.controller('getDetailsProductInCart',function($scope,$http,data){
	$scope.product=[];$scope.order=[];$scope.per=false;
    $scope.virtual=false; $scope.message='';
    $scope.class='alert-danger';
    $scope.show=false;
    $scope.thisShow=true;
    $http.get('/showDetailsProductCart/'+data.data).success( function(data) {
        if (data.message){
            $scope.message=data.message;
    		$scope.show=true;
        }else{
        	$scope.per=true;
        	$scope.product=data.product;
        	$scope.order=data.order;
        	if (data.virtual){
        		$scope.virtual=data.virtual;
        	}
        }
    });
    var changeKey=function(email,action){

    	var obj=false;
    	if (action=='all'){
    		obj={'email':email,'delete':true};
    	}
    	else if(action==1){
    		obj={'email':email,'increment':true};
    	}
    	else if(action==-1){
    		obj={'email':email,'decrement':true};
    	}

    	if (obj){
	    	$http.post('/editKeyVirtualProductsOrders/'+data.data,obj).success(function(data) {
	    		if (data.message){
		            $scope.message=data.message;
		    		$scope.show=true;
		        }else{
		        	if (data.all) document.getElementById(email).style.display='none';
		        	else{
		        		document.getElementById(email).children[0].children[0].innerHTML=data.num;
		        		console.log(document.getElementById(email).children[0].children);
		        		// document.querySelector("#"+email).innerHTML=data.num;
		        	}
		        }
		    });
    	}
    };
    $scope.increaseKey= function(email){ changeKey(email,1); };
    $scope.decrementKey= function(email){ changeKey(email,-1); };
    $scope.removeKey= function(email){ changeKey(email,'all'); };
    $scope.change=function(id){
    	$http.get('/deleteKey/'+id).success( function(data) {
        	if (data.message)
	        	$scope.message=data.message;
	        else{
	        	$scope.message=data.success;
			    $scope.class='alert-success';
	        }
    		$scope.show=true;
    		$scope.thisShow=true;
	    });
    };
});
app.controller('seeKeysPurchased',function($scope,$http,data){
	$scope.info=[];
	$scope.detail=[];
    $http.get('/user/showKeyVirtualProductPurchased/'+data.data+'/'+data.order).success( function(data) {
        console.log(data);
        if (data.message){
            $scope.message=data.message;
    		$scope.show=true;
        }else{
        	$scope.info=data.info;
        	$scope.details=data.users;
        }
    });
});


/**
 * Users points push notification
 */
app.controller('PushUsersPoints', ['$scope', '$http', '$interval', function($scope, $http, $interval)
{
	$scope.points = '';
	$scope.pusher = function()
	{
		$http.get('getPoints', { ignoreLoadingBar: true } ).success(function(data)
        {
        	if (data.points) {
        		$scope.points = data.points;

        	}
        });
	};

	$interval(function(){ $scope.pusher(); }, 60000);

}]);

app.controller('ProductBox', ['$scope', '$window', function($scope, $window)
{

	$scope.goTo = function (url)
    {
        $window.location.href = url;
    };

    $scope.submit = function(id) {
        $(id).submit();
    };

}]);

app.controller('DataPickerCtrl', function($scope)
{
  	$scope.open = function($event)
  	{
    	$scope.status.opened = true;
  	};

	$scope.status =
	{
		opened: false
	};

	$scope.open2 = function($event)
  	{
    	$scope.status2.opened = true;
  	};

	$scope.status2 =
	{
		opened: false
	};
});

})(); //modules

$(function () {
	
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
	
	if (!$.support.placeholder) {
		
		$('.field').find ('label').show ();
		
	}
	
	

});
function error(self){

	$(".content").prepend('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Error!</strong> '+self+' </div>');
		setTimeout(function(){ $(".alert").remove(); }, 3000);
	}
function success(self){

	$(".content").prepend('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong> '+self+' </div>');
		setTimeout(function(){ $(".alert-success").remove(); }, 3000);
	}
	
// Login post 
function PostSign(self){

	var form=$(self).closest('form');
	var data=form.serialize();
	$(self).hide();
	

		if(type){
		adminurl=""
		}else{
		adminurl="&page=adminlogin"
		}
	$.post(url+"app/comments/request/index.php", data+'&type=login'+adminurl,function(response){
	if(response.error){error(response.error);}else{
		if(type){
		window.close(); 
		}else{
		window.location.href="../admin";
		}

	}$(self).show();},'json');}

	
// Register post 
function PostRegister(self){
	
	var form=$(self).closest('form');
	var data=form.serialize();
	$(self).hide();
	$.post(url+"app/comments/request/index.php", data+'&type=register',function(response){
	
	if(response.error){error(response.error);}else{	
	if(type){
		window.close(); 
		}else{
		window.location.href=url+"app/auth/login.php";
		}
}$(self).show();},'json');}

	
function PostSettings(self){
	
	var form=$(self).closest('form');
	var data=form.serialize();
	$(self).hide();
	$.post(url+"app/comments/request/index.php", data+'&type=settingedit',function(response){
	if(response.error){error(response.error);}else{success(response.success); }$(self).show();},'json');}

	

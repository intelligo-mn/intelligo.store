/*
Script Name: easyComment
Script URI: http://easycomment.akbilisim.com/
Author: akbilisim.com
Author URI: http://www.akbilisim.com
Version: 1.0
License: GNU General Public License
License URI: http://easycomment.akbilisim.com/license.html
Tags: comment, php comment, ajax comment, comment script, comment system, jquery comment, php ajax comment, user management, comment system, comments, discussions, comment themes, rating system, admin panel 

(C) 2015 akbilisim.com.
*/
!function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',a=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","whiteSpace"],n=e(i).data("autosize",!0)[0];n.style.lineHeight="99px","99px"===e(n).css("lineHeight")&&a.push("lineHeight"),n.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),n.parentNode!==document.body&&e(document.body).append(n),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):null;o?(t=parseFloat(o.width),("border-box"===o.boxSizing||"border-box"===o.webkitBoxSizing||"border-box"===o.mozBoxSizing)&&e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseFloat(o[i])})):t=p.width(),n.style.width=Math.max(t,0)+"px"}function s(){var s={};if(t=u,n.className=i.className,n.id=i.id,d=parseFloat(p.css("maxHeight")),e.each(a,function(e,t){s[t]=p.css(t)}),e(n).css(s).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px";{u.offsetWidth}u.style.width=r}}function r(){var e,a;t!==u?s():o(),n.value=!u.value&&i.placeholder?p.attr("placeholder")||"":u.value,n.value+=i.append||"",n.style.overflowY=u.style.overflowY,a=parseFloat(u.style.height)||0,n.scrollTop=0,n.scrollTop=9e4,e=n.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=z,Math.abs(a-e)>.01&&(u.style.height=(e-13)+"px",n.className=n.className,w&&i.callback.call(u,u),p.trigger("autosize.resized"))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==b&&(b=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),z=0,w=e.isFunction(i.callback),f={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},b=p.width(),g=p.css("resize");p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(z=p.outerHeight()-p.height()),c=Math.max(parseFloat(p.css("minHeight"))-z||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===g?p.css("resize","none"):"both"===g&&p.css("resize","horizontal"),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(f).removeData("autosize")}),r())})):this}}(jQuery||$);



function reload(){window.location.reload(true);};

function error(msg){alert(msg);}
function success(msg){alert(msg);}
function addcomment(){

	var yorum=$('textarea[name=yorum_text]').val(),spoiler=$('input[name=spoiler]:checked').val(),iceriktip=POSTurl,id=POSTid;
	$('#addcomment').addClass('form-active');
	var user_username=$('input[name=user_username]').val(),user_email=$('input[name=user_email]').val(),user_password=$('input[name=user_password]').val();

	
	$.post(request_url,{'id':id,'iceriktip':iceriktip,'yorum':yorum,'spoiler':spoiler,'user_username':user_username,'user_email':user_email,'user_password':user_password,'AccessToken':AccessToken,'type':'addcomment'},
	function(response){
	
	$('#addcomment').removeClass('form-active');
	if(response.error){
		error(response.error);
	}else{
	$('.no-comment').remove();
	$('.comments').prepend(response.data);
	$('[name=yorum_text]').val('');
	if(commentapp){alert(lang_1);}
	resetcomment_all();
	}
		
	},'json');
}
	
function addSubComment(self,id){
	var form=$(self).closest('form');
	var data=form.serialize();$(form).addClass('loading');
	$.post(request_url,data+'&AccessToken='+AccessToken+'&type=addSubComment',function(response){
	if(response.error){error(response.error);}else{
	$('#comments'+ id).append(response.comment);form.find('textarea').val('');$('.open-subcomment').removeClass('active');$('#open_add_subcomment_'+ id).hide();
	if(commentapp){alert(lang_1);}
	resetcomment_all();
	}
	$(form).removeClass('loading');},'json');
}


function comment_complain(id){if (confirm("Do you want to report this comment?")) {$.post(request_url,{'id':id,'type':'comment_report'},function(response){if(response.error){error(response.error);}else{alert(response.success);}},'json');}}
function comment_like(id,iceriktip){$.post(request_url,{'id':id,'tip':'like','iceriktip':iceriktip,'type':'comment_like_func'},function(response){if(response.error){error(response.error);}else{$('#like_'+ id).text(parseInt($('#like_'+ id).text())+ 1);}},'json');} 
function comment_dislike(id,iceriktip){$.post(request_url,{'id':id,'tip':'unlike','iceriktip':iceriktip,'type':'comment_like_func'},function(response){if(response.error){error(response.error);}else{$('#dislike_'+ id).text(parseInt($('#dislike_'+ id).text())+ 1);}},'json');}
function like_graph(id){var like=parseInt($('#series_like_'+ id).text()),dislike=parseInt($('#series_dislike_'+ id).text()),total=like+ dislike,percent=(like/total)*100;$('.like-bar div').css('width',percent+'%');}

function loadComments(id,self,tif){$('#comment_content_'+ id).addClass('loading');$.post(request_url,{'id':id,'type':'loadComments','tif':tif},function(response){$('#comment_content_'+ id).removeClass('loading');if(response.error){error(response.error);}else{$('#comment_content_'+id).html(response.comments);$(self).remove();}

$(':radio, :checkbox').each(function(){$(this).next('span').remove().end().after('<span></span>');
if($(this).is(':checked')){$(this).parent().addClass('checked');}});$('label.cb').on('click',function(e){if($(':radio',this).length){var name=$(':radio',this).attr('name');$('input[name='+ name+']').parent().removeClass('checked');$(this).addClass('checked');}
if($(':checkbox',this).length){if($(':checkbox',this).is(':checked')){$(this).addClass('checked');}else{$(this).removeClass('checked');}}});

},'json');
}
function loadComment(pagination,id,desc){$('.comments').addClass('loading');$.post(request_url,{'pagination':pagination,'desc':desc,'id':id,'type':'loadComment'},function(response){if(response.error){error(response.error);}else{$('.comments').removeClass('loading');$('.comments').html(response.comments);$('.pagination').html(response.pagination); delpopcomment();}},'json');}

function loaduserWidget(self){

	if($(self).find(".dropdown-menu").length > 0){  
	return false;
	}
    id=$(self).attr('data-id');
	if(id == 0){  
	return false;
	}	
	$(self).append('<div class="dropdown-menu top"><center><img src="'+url+'app/assets/images/ajax-loader.gif" class="loader"></center></div>');
	setTimeout(function(){ 
	$.post(request_url,{'user_id':id,'type':'loaduserdata'},
	function(response){
		if(response.error){
				$(self).find('.dropdown-menu').html('<div class="toperror">'+response.error+'</div>');
			}else{
				name='';genre='';age='';town='';reg='';last='';
				if(response.name){	name= '<span>Name: <strong>'+response.name+' '+response.surname+'</strong></span>';}
				if(response.genre){	genre= '<span>Genre: <strong>'+response.genre+'</strong></span>';}
				if(response.age){	age= '<span>Age: <strong'+response.age+'></strong></span>';}
				if(response.town){	town= '<span>Town: <strong>'+response.town+'</strong></span>';}
				if(response.last){	last= '<span>Last: <strong>'+response.last+'</strong></span>';}
						
				$(self).find('.dropdown-menu').html('<img src="'+response.icon+'" width=90 class="topicon"><div class="topcontent"><h3>'+response.username+'<h3><div class="infos">'+name+''+genre+''+age+''+town+''+reg+''+last+'</div></div>');
			}
		},'json');

	}, 250);

	
	}
function openSubcommentForm(id,self,sub){
	 $('.add-subcomment').hide();
    var form = $('#open_add_subcomment_' + id);
    if ( $(self).hasClass('active') ){
        form.hide();
        $(self).removeClass('active');
    } else {
        if ( sub == 1 ){
            var username = $(self).closest('.comment').find('[data-user]').data('user');
            var user_id = $(self).closest('.comment').find('[data-id]').data('id');
        } else {
            var username = form.closest('.comment').find('[data-user]').data('user');
            var user_id = form.closest('.comment').find('[data-id]').data('id');
        }
        $('.open-subcomment').removeClass('active');
        form.show().find('textarea').focus().val('@' + username + ', ');
        form.find('input[name=user_id]').val( user_id );
        $(self).addClass('active');
    }
    return false;
}


function CommentDelete(id){if(confirm(lang_3)) {$.post(request_url,{'id':id,'type':'CommentDelete'},function(response){ if(response.error){error(response.error);}else{$("#yorum"+id).remove();}},'json');}}
function delpopcomment(){var tabs = $('.popular-comments .comment');tabs.each(function(){items = $(this).attr('id'); $(".comments div[id='"+items+"']").remove();}); }

function chooseType(tab,type,self){
	var form=$(self).closest('form');
	
	form.find("#chooseiType").removeAttr("class");
	form.find("#chooseiType").addClass(tab);
	form.find(".callingsing").removeClass("open");
	form.find("."+tab+"-sign").addClass("open");
	form.find(".typerq li a").removeClass("selected");
	form.find(self).addClass("selected");
	
	if(type==1){
		form.find('input[name=user_password]').hide();
		tab="Guest";
		tab2="Post as Guest";
	}else{
		form.find('input[name=user_password]').show();
		
		tab2="Post";
		if(tab=="Register"){tab2="Register&"+tab2;}
	
	}
	form.find("button").text(tab2);
	form.find("#chooseiType .name").text(tab);
	form.find("#chooseiType i").removeAttr("class");
	form.find("#chooseiType i").attr("class", $(self).find("i").attr("class"));

}
function exyorum_text(self){
		$('.subcomment-alt').hide();
        $(self).next('.alt').show();
}
function excomment_text(self){
		$('.alt').hide();
        $(self).next('.subcomment-alt').show();
}
function resetcomment_all(){
	$('.subcomment-alt').hide();
	$('.add-subcomment').hide();
	$('.alt').hide();
}
$(function () {

	$(document).on("click",".comments .pagination li a",function(ev){
               desc=$(".short a.active").attr('data-desc');
			   if($(".pagination li").hasClass("active")){ paginationa=$(this).attr('data-page');}else{paginationa=1;}
			   
			   id=POSTid;
			   loadComment(paginationa,id,desc);
			
               return false;
     });	
	 $(document).on("click",".short a",function(ev){
				if($(this).parent().hasClass("active")){ return false;}
		 
			   desc=$(this).attr('data-desc');
			   id=POSTid;
				
			   $(".short a").removeClass("active");
			   $(this).addClass("active");
			   
			   loadComment(1,id,desc);
			  
               return false;
     });
	 delpopcomment();


    $('textarea[name=yorum_text]').autosize();
    $('textarea[name=comment_text]').autosize();

});


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function authFacebook(){
		if(facebookAPP==""){return false}
		 FB.init({
			appId      : facebookAPP,
			cookie     : true,  // enable cookies to allow the server to access 			// the session
			xfbml      : true,  // parse social plugins on this page
			version    : 'v2.2' // use version 2.2
		 });

		FB.login(function(response) {
			if (response.authResponse) {
				
				
				FB.api('/me?fields=id,first_name,birthday,last_name,hometown,gender,email', function(response) {
					
					$.post(request_url,{'email':response.email,'birthday':response.birthday,'first_name':response.first_name,'last_name':response.last_name,'hometown':response.hometown,'gender':response.gender,'social':response.id,'socialtip':'facebook','type':'sociallogin'},
					function(responsex){
						
						if(responsex.error){
							error(responsex.error);
						}else if(responsex.register){
							registergoing();
						}else{
							loginongoing(responsex.username);
						}
						
					},'json');
						
				
				});
				
			
			} else {
			
				// User cancelled login or did not fully authorize
			}

		}, { scope: 'email,user_birthday,user_location,public_profile' });
}


 /*

function authTwitter(){
	
	window.open(url+"app/auth/twitterlogin.php", "Twitterlogin", "width=610,height=450,target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}

function authGoogle(){

	window.open("https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/plus.login&client_id=724060519897-a8hrfdvsiv64jnp78f32a3pb9k01lblg.apps.googleusercontent.com&redirect_uri="+url+"app/auth/googlelogin.php&response_type=token", "Googlelogin", "width=610,height=450,target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
*/
function authLogin(){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 450/2;
	
	window.open(url+"app/auth/login.php?type=popup", "Login", "width=410,height=450,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
function authRegister(){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 450/2;
	
	window.open(url+"app/auth/register.php?type=popup", "Register", "width=410,height=450,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
function loginControl(){
		$.post(request_url, 'type=loginControl',function(response){if(response.username){ loginongoing(response.username);}if(response.icon){ 
		$(".usericont").attr("src", response.icon);
		}},'json');
}
function logoutFunc(){
	$("body").html("<center><img src='"+url+"app/assets/images/ajax-loader.gif'></center>");
		$.post(request_url, 'type=logout',function(response){
					if(response.error){
							error(response.error);
						}else{
						 reload();
					}
		
		},'json');
}
function loginongoing(username){
	if(username=="" || username=="undefined" || username=="NULL" ){return false; }else{
	$(".loginbox").remove();
	$(".logincon .name").text(username);
	$("#addcomment button[type=submit] b").text(username);
	$(".logincon").show();
	$(".logincon.nolog").hide();
	}
}

function registergoing(){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 450/2;
	
    $.getJSON(request_url, function() {
      	window.open(url+"app/auth/register.php?type=popup", "Register", "width=410,height=450,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

		loginControl();
		
		};
    });


}	
function profilego(user){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 650/2;
	
	window.open(url+"app/auth/profile.php?user="+user, "Profile", "width=410,height=650,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
function Settings(){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 650/2;
	
	window.open(url+"app/auth/settings.php?type=popup", "Settings", "width=410,height=650,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
function ChangeAvatar(){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 410/2;
	
	window.open(url+"app/auth/changeavatar.php", "Settings", "width=410,height=410,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no").onbeforeunload = function () {

	loginControl();
	
    };
}
function showPages(pages){
	var x = screen.width/2 - 410/2;var y = screen.height/2 - 610/2;
	window.open(url+"app/auth/pages.php?page="+pages, "Pages", "width=410,height=610,left="+x+",top="+y+",target=_blank,modal=yes,alwaysRaised=no");
}

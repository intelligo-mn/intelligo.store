var Buzzy=function(){var t=function(){var t=$("#requesttoken").val();$(".permanently").on("click",function(){var t=$(this).attr("href");return swal({title:"Are you sure?",text:"You will not be able to recover this.",type:"warning",showCancelButton:!0,closeOnConfirm:!1,closeOnCancel:!1,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",showLoaderOnConfirm:!0},function(e){e?setTimeout(function(){location.href=t},500):swal("Cancelled","All data is safe :)","error")}),!1}),$(".sendtrash").on("click",function(){var t=$(this).attr("href");return swal({title:"Are you sure?",text:"Sending to trash!",type:"warning",showCancelButton:!0,closeOnConfirm:!1,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes!",showLoaderOnConfirm:!0},function(){setTimeout(function(){location.href=t},500)}),!1}),$(".updatedownload").off("click").on("click",function(){var e=($(this).attr("href"),$(this).attr("data-auto"));return swal({title:"Verifying Buzzy code...",text:"It will take few seconds.",timer:82e3,showConfirmButton:!1}),$.ajax({type:"POST",dataType:"json",url:"/admin/updatepurcahecheck",data:{dataauto:e,_token:t},success:function(t){var o=t.type,r=t.message,a=t.url;return"error"==o?(swal.showInputError(r),!1):void("on"==e?swal({title:r,html:!0}):swal({title:r,text:"<a href='"+a+"' target='_blank'>Click to download update</a>",html:!0}))}}),!1}),$(".activebut").on("click",function(){var e=$(this).attr("data-item"),o=$(this).attr("data-verify"),r=$(this).parents(".box-widget").find(".overlay");r.removeClass("hide"),$.ajax({type:"POST",dataType:"json",url:"/admin/activeteplugin",data:{dataitem:e,dataverify:o,_token:t},success:function(t){var e=t.type,o=t.status,a=t.errors,n=t.message;t.url;"Error"==o?swal({type:"warning",title:"Error",text:a,timer:2e3,showConfirmButton:!1}):"error"==e?swal({type:"warning",title:"Error",text:n,timer:2e3,showConfirmButton:!1}):"success"==e&&location.reload(),setTimeout(function(){r.addClass("hide")},1e3)}})}),$(".checkcodeforplugin").off("click").on("click",function(){var e=$(this).attr("data-item"),o=$(this).attr("data-img");swal({title:"Activate Product!",text:'Please type your product access code. To get your product code please visit: <a href="http://envato.akbilisim.com/" target="_blank" style="color:blue;font-weight: bold">http://envato.akbilisim.com/</a> And verify your Envato purchase code for this plugin.',type:"input",imageUrl:o,showCancelButton:!0,closeOnConfirm:!1,html:!0,animation:"slide-from-top",inputPlaceholder:"Write Access Code",showLoaderOnConfirm:!0},function(o){return o===!1?!1:""===o?(swal.showInputError("You need to write something!"),!1):void $.ajax({type:"POST",dataType:"json",url:"/admin/checkinputcodeforplugin",data:{dataitem:e,code:o,_token:t},success:function(t){var e=t.type,o=t.message;t.url;return"error"==e?(swal.showInputError(o),!1):("success"==e&&location.reload(),void setTimeout(function(){widgetover.addClass("hide")},1e3))}})})})};return{init:function(){t()}}}();
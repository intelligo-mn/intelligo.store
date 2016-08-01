$(function () {
	
	
	$('.subnavbar').find ('li').each (function (i) {
	
		var mod = i % 3;
		
		if (mod === 2) {
			$(this).addClass ('subnavbar-open-right');
		}
		
	});
	

});

function resimcreate(resimid,resimboyut,klasor)
{

		if(resimid == "" || resimid == "NULL"){
	
		return  "../upload/"+klasor+"/default-"+resimboyut+".jpg";

		}else if(resimid.substr(0,6)=="https:" || resimid.substr(0,5)=="http:"){
			
		return resimid;
			
		}else{
			return "../upload/"+klasor+"/"+resimid+"-"+resimboyut+".jpg";

	}
}

function showDate(date) {

   return date.substr(6, 2) + '/' + date.substr(4, 2) + '/' + date.substr(0, 4) + ' - ' + date.substr(8, 2)+ ':' +date.substr(10, 2);
}
		
<?php
require_once("../inc/config.php"); 
$response = array();


			
function uyeregister($user_username,$user_email,$user_password,$social,$socialtip,$first_name,$last_name,$hometown,$gender,$birthday){

	global $dbpdo;
	global $lang;
	global $phptarih;
	global $db_sitemotto;
	global $seflink;

					
	if (isset($_SESSION['oturumid'])){ 
					return $lang["REQUEST_2"];
					exit();
					}

					$kulladi = $user_username; 
					$sifre = $user_password;
					$sifretekrar = $sifre; 
					$email = $user_email;
				
					
					if(!preg_match('/^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/', $email)) {
						return $lang["REQUEST_3A"];
					  exit();
					}

					if ($kulladi=="") {
						return  $lang["REQUEST_3C"];
					exit();
					}elseif ($sifre=="") {
						return  $lang["REQUEST_4D"];
					exit();
				
					}elseif ($email=="") {
						return  $lang["REQUEST_3F"];
		
					exit();
					}elseif (strlen($kulladi)<3 or strlen($kulladi)>15) {
						return  $lang["REQUEST_3G"];
				
					exit();
					}
					$sifre2=$sifre;
					$sifre=md5($sifre);
					
					if ($birthday> "") {
					$doguma=explode("/",$birthday);  
					$dogumay=$doguma[0];
					$dogumgun=$doguma[1];
					$dogumyil=$doguma[2];
					$birthday=$dogumyil.$dogumay.$dogumgun;
					}
					
					
					if ($social > "") {
							if ($socialtip == "facebook") {
							$icon="https://graph.facebook.com/$social/picture";
							}else{
							$icon="";
							}
		
					}else{
					$icon="";
					}
					
					
						$rsqajlm  = $dbpdo->query("Select kulladi from uyeler where kulladi = '$kulladi'");
												
						if ($rsqajlm = $rsqajlm->fetch()){
						return  $lang["REQUEST_3H"];
						
						exit();
						}

						$rsqajlma  = $dbpdo->query("Select kulladi from uyeler where email = '$email'");
						if ($rsqajlma = $rsqajlma->fetch()){
						return $lang["REQUEST_3T"];
			
						exit();
						}

					if(getenv("HTTP_CLIENT_IP")) {
						 $ip = getenv("HTTP_CLIENT_IP");
					 } elseif(getenv("HTTP_X_FORWARDED_FOR")) {
						 $ip = getenv("HTTP_X_FORWARDED_FOR");
						 if (strstr($ip, ',')) {
							 $tmp = explode (',', $ip);
							 $ip = trim($tmp[0]);
						 }
					 } else {
					 $ip = getenv("REMOTE_ADDR");
					 }

					$seflinkne=seflink($kulladi);
					$return = $dbpdo->prepare("INSERT INTO uyeler (kulladi,sifre,email,kayittarih,son_tarih,unvan,ipno,ban,seolinki,icon,yasne,isim,soyisim,sehir,cinsiyet,social,socialtip) VALUES ('$kulladi' ,'$sifre' , '$email' , '$phptarih' ,  '$phptarih', '0', '$ip', '0', '$seflinkne',  '$icon', '$birthday','$first_name', '$last_name', '$hometown', '$gender', '$social', '$socialtip' )");
					$return->bindParam(":kulladi",$kulladi);
					$return->bindParam(":email",$email);
					$return = $return->execute();

					$rsqa  = $dbpdo->query("Select * from uyeler where kulladi = '$kulladi' and sifre = '$sifre'");
					if($gelenz = $rsqa->fetch()){
					$_SESSION['oturumid'] = $gelenz['id'];
					$_SESSION['kulladi'] = $gelenz['kulladi'];
					$_SESSION['sifre'] = $gelenz['sifre'];
					$_SESSION['kimdir'] = $gelenz['unvan'];
					$_SESSION['seolinki'] = $gelenz['seolinki'];
					$_SESSION['icon'] = $gelenz['icon'];
					$_SESSION['son_tarih'] = $phptarih;
						
					
					setcookie($db_sitemotto."user",$_SESSION['kulladi'],time() + (86400 * 7), "/");
					setcookie($db_sitemotto."pass",$_SESSION['sifre'],time() + (86400 * 7), "/");
					return "ok";
					}else{
					return "error";	
					}
}


function uyelogin($user_username,$user_email,$user_password,$page){
	global $dbpdo;
	global $lang;
	global $phptarih;
	global $db_sitemotto;
	global $seflink;

	if (isset($_SESSION['oturumid'])){ 
		return $lang["REQUEST_2"];
		echo json_encode($response);
		exit();
	}

	$kulladi	=  $user_username;
	$email	=  $user_email;
	$sifre2	=  $user_password;
	

	if ($kulladi=="" or $sifre2=="") {
	return $lang["REQUEST_3"];
	}else{
		
	$sifre	=  md5($sifre2);
	
	$pagelogin="";
	if($page=="adminlogin"){
		$pagelogin="and unvan=1";
	}
	
	
	$rsqa  = $dbpdo->query("Select id,kulladi,sifre,unvan,seolinki,icon,ban from uyeler where kulladi = '$kulladi' and sifre = '$sifre' $pagelogin or email = '$email' and sifre = '$sifre' $pagelogin");
	if($gelenz = $rsqa->fetch()){
	$banlimi = $gelenz['ban'];
		
		if ($banlimi == '1'){ 
		return $lang["REQUEST_7A"];
		}else{
		
		$_SESSION['oturumid'] = $gelenz['id'];
		$_SESSION['kulladi'] = $gelenz['kulladi'];
		$_SESSION['sifre'] = $gelenz['sifre'];
		$_SESSION['kimdir'] = $gelenz['unvan'];
		$_SESSION['seolinki'] = $gelenz['seolinki'];
		$_SESSION['icon'] = $gelenz['icon'];
		$_SESSION['son_tarih'] = $phptarih;
		
		    if(getenv("HTTP_CLIENT_IP")) {
				 $ip = getenv("HTTP_CLIENT_IP");
			 } elseif(getenv("HTTP_X_FORWARDED_FOR")) {
				 $ip = getenv("HTTP_X_FORWARDED_FOR");
				 if (strstr($ip, ',')) {
					 $tmp = explode (',', $ip);
					 $ip = trim($tmp[0]);
				 }
			 } else {
			 $ip = getenv("REMOTE_ADDR");
			 }
			 

		$return1 = $dbpdo->prepare("UpDate uyeler Set ipno = '$ip' , son_tarih = '$phptarih' where id = '$gelenz[id]'");
		$return1 = $return1->execute();
		

		setcookie($db_sitemotto."user",$_SESSION['kulladi'],time() + (86400 * 7), "/");
		setcookie($db_sitemotto."pass",$_SESSION['sifre'],time() + (86400 * 7), "/");
		
		return "ok";
		}
	}else{
		if($page=="adminlogin"){
			return "No account found with that username/password";
		}else{
			return $lang["REQUEST_7B"];
		}
		
	}
}
}

$type ="";
if(isset($_POST["type"])){
$type = $_POST["type"]; 
}
$AccessToken ="";
if(isset($_POST["AccessToken"])){
$domainaccess = $_POST["AccessToken"]; 
}


if ($type == '') { 
$response['error'] = $lang["REQUEST_1"];

}elseif ($type == 'logout'){ 

	session_destroy();

	setcookie($db_sitemotto."user", "", time()-3600, "/");
				
	setcookie($db_sitemotto."pass", "", time()-3600, "/");
		
	$response['success'] = "ok";
	
}elseif ($type == 'loginControl'){ 



	if (!isset($_SESSION['oturumid'])){ 
		$response['error'] =  $lang["REQUEST_2"];
	}else{
		$response['username'] = $_SESSION['kulladi'];
		$response['icon'] = resimcreate($_SESSION['icon'],"s","member/avatar");;
	}

}elseif ($type == 'login'){ 
	if (isset($_SESSION['oturumid'])){ 
		$response['error'] =  $lang["REQUEST_2"];
		exit();
	}
	
	$username = "";
	if (isset($_POST["username"])) { 
		$username = htmlentities(strip_tags(tirnak_replace($_POST["username"])));
	}			
	$password = "";
	if (isset($_POST["password"])) { 
		$password = htmlentities(strip_tags(tirnak_replace($_POST["password"])));
	}		
	$page = "";
	if (isset($_POST["page"])) { 
		$page = htmlentities(strip_tags(tirnak_replace($_POST["page"])));
	}		
	
	if ($username=="" or $password=="" ){
	$response['error'] = $lang["REQUEST_13A"];
	}else{
			$okmu = uyelogin($username,$username,$password,$page);

			if ($okmu == 'ok') { 
					$response['success'] = $okmu;
					$response['username'] = $_SESSION['kulladi'];
				}else{ 
					$response['error'] = $okmu;
				
			}
		
	}
}elseif ($type == 'register'){ 


	if (isset($_SESSION['oturumid'])){ 
		$response['error'] =  $lang["REQUEST_2"];
		echo json_encode($response);
		exit();
	}
	
	$username = "";
	if (isset($_POST["username"])) { 
		$username = htmlentities(strip_tags(tirnak_replace($_POST["username"])));
	}		
	$email = "";
	if (isset($_POST["email"])) { 
		$email = htmlentities(strip_tags(tirnak_replace($_POST["email"])));
	}		
	$password = "";
		if (isset($_POST["password"])) { 
		$password = htmlentities(strip_tags(tirnak_replace($_POST["password"])));
	}		
	
	if ($username=="" or $email=="" or $password=="" ){
	$response['error'] = $lang["REQUEST_13A"];
	}else{
	
	$social = "";$socialtip = "";$birthday = "";$hometown = "";$gender = "";$name = "";$surname = "";
	if (isset($_SESSION['social_id'])){ $social = $_SESSION['social_id']; }
	if (isset($_SESSION['social_tip'])){ $socialtip = $_SESSION['social_tip']; }
	if (isset($_SESSION['social_birthday'])){ $birthday = $_SESSION['social_birthday']; }
	if (isset($_SESSION['social_hometown'])){ $hometown = $_SESSION['social_hometown']; }
	if (isset($_SESSION['social_gender'])){ $gender = $_SESSION['social_gender']; }
	if (isset($_SESSION['social_name'])){ $name = $_SESSION['social_name']; }
	if (isset($_SESSION['social_surname'])){ $surname = $_SESSION['social_surname']; }
	if (isset($_SESSION['social_email'])){ $email = $_SESSION['social_email']; }

	
	$okmu = uyeregister($username,$email,$password,$social,$socialtip,$name,$surname,$hometown,$gender,$birthday);

	
				if ($okmu == 'ok') { 
					$response['success'] = $okmu;
					$response['username'] = $_SESSION['kulladi'];
				}else{ 
					$response['error'] = $okmu;
				
				}
 
	}
}elseif ($type == 'settingedit'){ 


	if (!isset($_SESSION['oturumid'])){ 
		$response['error'] =  "Error";
		echo json_encode($response);
		exit();
	}
	
	$username = "";
	if (isset($_POST["username"])) { 
		$username = htmlentities(strip_tags(tirnak_replace($_POST["username"])));
	}		
	$email = "";
	if (isset($_POST["email"])) { 
		$email = htmlentities(strip_tags(tirnak_replace($_POST["email"])));
	}		
	$password = "";
	if (isset($_POST["password"])) { 
		$password = htmlentities(strip_tags(tirnak_replace($_POST["password"])));
	}		
	$name = "";
	if (isset($_POST["name"])) { 
		$name = htmlentities(strip_tags(tirnak_replace($_POST["name"])));
	}		
	$surname = "";
	if (isset($_POST["surname"])) { 
		$surname = htmlentities(strip_tags(tirnak_replace($_POST["surname"])));
	}			

	$hometown = "";
	if (isset($_POST["hometown"])) { 
		$hometown = htmlentities(strip_tags(tirnak_replace($_POST["hometown"])));
	}			
	$gender = "";
	if (isset($_POST["gender"])) { 
		$gender = htmlentities(strip_tags(tirnak_replace($_POST["gender"])));
	}			
	$birthdayyear = "";
	if (isset($_POST["birthdayyear"])) { 
		$birthdayyear = htmlentities(strip_tags(tirnak_replace($_POST["birthdayyear"])));
	}		
	$birthdaymouth = "";
	if (isset($_POST["birthdaymouth"])) { 
		$birthdaymouth = htmlentities(strip_tags(tirnak_replace($_POST["birthdaymouth"])));
	}		
	$birthdayday = "";
	if (isset($_POST["birthdayday"])) { 
		$birthdayday = htmlentities(strip_tags(tirnak_replace($_POST["birthdayday"])));
	}		
	$oldpassword = "";
	if (isset($_POST["oldpassword"])) { 
		$oldpassword = htmlentities(strip_tags(tirnak_replace($_POST["oldpassword"])));
	}	
	
	if($oldpassword==""){
			$response['error'] =  "Current password can't be empty.";
	}else{	
	
	if ($username=="" or $email=="" or $oldpassword==""){
		$response['error'] = $lang["REQUEST_13A"];
		}else{
			
	
		
			$passwordmd5 =md5($oldpassword);
			if($_SESSION['sifre']!=$passwordmd5){
				$response['error'] =  "Not correct password";
			}else{	

		
		

				if(!preg_match('/^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/', $email)) {
						$response['error'] =  $lang["REQUEST_3A"];
						echo json_encode($response);
					  exit();
					}

					if (strlen($username)<3 or strlen($username)>15) {
						$response['error'] =   $lang["REQUEST_3G"];
						echo json_encode($response);
					exit();
					}

		
			if($password>""){
					if (strlen($password)<5 or strlen($password)>15) {
						$response['error'] =   "Password must be min-5 max-15 characters ";
						echo json_encode($response);
					exit();
					}

				$password=md5($password);
			}else{
				$password=$_SESSION['sifre'];
				
			}
			
		
			
			$birthday=$birthdayyear.$birthdaymouth.$birthdayday;
			
			$usernameslug=seflink($username);
			
			
			 $return2 = $dbpdo->prepare("UpDate uyeler Set  kulladi = '$username', seolinki = '$usernameslug', email = '$email', sifre = '$password', isim = '$name' , soyisim = '$surname', cinsiyet = '$gender', yasne = '$birthday', sehir = '$hometown' where id = '$_SESSION[oturumid]'");
			 $return2 = $return2->execute();
			

			$response['success'] = "Success";
				
		
	
	 
		}
		}
	}
}elseif ($type == 'sociallogin'){ 


	if (isset($_SESSION['oturumid'])){ 
		$response['error'] = $lang["REQUEST_2"];
		echo json_encode($response);
		exit();
	}
	
		$social = $_POST["social"]; 
		$email = $_POST["email"]; 
		$socialtip = $_POST["socialtip"]; 
		
		$first_name = "";
		if (isset($_POST["first_name"])) { 
		$first_name = $_POST["first_name"];
		}		
		$last_name = "";
		if (isset($_POST["last_name"])) { 
		$last_name = $_POST["last_name"];
		}		
		$hometown = "";
		if (isset($_POST["hometown"])) { 
		$hometown = $_POST["hometown"];
		}		
		$gender = "";
		if (isset($_POST["gender"])) { 
		$gender = $_POST["gender"];
		}		
		$birthday = "";
		if (isset($_POST["birthday"])) { 
		$birthday = $_POST["birthday"];
		}
		
	

	$rsqa  = $dbpdo->query("Select id,kulladi,sifre,unvan,seolinki,icon,ban from uyeler where social = '$social' and email = '$email' ");
	if($gelenz = $rsqa->fetch()){
	$banlimi = $gelenz['ban'];
		
		if ($banlimi == '1'){ 
		$response['error'] = $lang["REQUEST_3"];
		}else{
		
		$_SESSION['oturumid'] = $gelenz['id'];
		$_SESSION['kulladi'] = $gelenz['kulladi'];
		$_SESSION['sifre'] = $gelenz['sifre'];
		$_SESSION['kimdir'] = $gelenz['unvan'];
		$_SESSION['seolinki'] = $gelenz['seolinki'];
		$_SESSION['icon'] = $gelenz['icon'];
		$_SESSION['son_tarih'] = $phptarih;
		
		    if(getenv("HTTP_CLIENT_IP")) {
				 $ip = getenv("HTTP_CLIENT_IP");
			 } elseif(getenv("HTTP_X_FORWARDED_FOR")) {
				 $ip = getenv("HTTP_X_FORWARDED_FOR");
				 if (strstr($ip, ',')) {
					 $tmp = explode (',', $ip);
					 $ip = trim($tmp[0]);
				 }
			 } else {
			 $ip = getenv("REMOTE_ADDR");
			 }
			 

		$return1 = $dbpdo->prepare("UpDate uyeler Set ipno = '$ip' , son_tarih = '$phptarih' where id = '$gelenz[id]'");
		$return1 = $return1->execute();
		

		setcookie($db_sitemotto."user",$_SESSION['kulladi'],time() + (86400 * 7), "/");
		setcookie($db_sitemotto."pass",$_SESSION['sifre'],time() + (86400 * 7), "/");
		
		$response['success'] = "go";
		$response['username'] = $_SESSION['kulladi'];
		}
	}else{
		
		$_SESSION['social_username'] = $first_name.' '.$last_name;
		$_SESSION['social_email'] = $email;
		$_SESSION['social_id'] = $social;
		$_SESSION['social_tip'] = $socialtip;
		$_SESSION['social_birthday'] = $birthday;
		$_SESSION['social_hometown'] = $hometown;
		$_SESSION['social_gender'] = $gender;
		$_SESSION['social_name'] = $first_name;
		$_SESSION['social_surname'] = $last_name;
		$response['register'] ="go";
	}
	
	

		
}elseif ($type == 'addcomment'){ 
$icerikid = $_POST["id"]; 
$yorum = htmlentities(strip_tags(tirnak_replace($_POST["yorum"]))); 
if(strlen($yorum) > 500){
		$response['error'] = "Too large text. Limit 500 character"; 
		echo json_encode($response);
		exit();
		}
		
	
$msg_tip = $_POST["iceriktip"]; 

	$spoiler = "0";
	if (isset($_POST["spoiler"])) { 
	$spoiler = $_POST["spoiler"];
	}
	
	
		$u_name = "";$u_email = "";
				
		if (isset($_SESSION['oturumid'])){ 
		$kullnicikim = $_SESSION["kulladi"];
		$kullniciid = $_SESSION["oturumid"];
		$kullniciicon = $_SESSION["icon"];


		}else{ 
				$user_username = "";
				if (isset($_POST["user_username"])) { 
				$user_username = htmlentities(strip_tags(tirnak_replace($_POST["user_username"])));
				}
				$user_email = "";
				if (isset($_POST["user_email"])) { 
				$user_email = htmlentities(strip_tags(tirnak_replace($_POST["user_email"])));
				}
				$user_password = "";
				if (isset($_POST["user_password"])) { 
				$user_password = htmlentities(strip_tags(tirnak_replace($_POST["user_password"])));
				}
				if ($user_username == '' or $user_email == '') { 
					$response['error'] = $lang["REQUEST_3"];
					echo json_encode($response);
					exit();
				}
			if($user_password > ""){ 
	
				$okmu = uyeregister($user_username,$user_email,$user_password,"","","","","","","");
		
				if ($okmu == 'ok') { 
					$kullnicikim = $_SESSION["kulladi"];
					$kullniciid = $_SESSION["oturumid"];
					$kullniciicon = $_SESSION["icon"];
				}else{ 
					$response['error'] = $okmu;
					echo json_encode($response);
					exit();
				}
				
			}elseif($db_guestcomment=="open"){ 
				$u_name = $user_username;
				$u_email = $user_email;
				
				$kullnicikim =$u_name;
				$kullniciid = "0";
				$kullniciicon = "";
				
			}elseif($db_guestcomment=="close"){ 
					$response['error'] = $lang["GENERAL_EXTRA_1"];
					echo json_encode($response);
					exit();
			}
		}


	
	$icon=resimcreate($kullniciicon,"s","member/avatar");

	if ($yorum=="" or $icerikid=="" or $msg_tip=="" ) {
	$response['error'] = $lang["REQUEST_13A"];
	}else{
		

	$return = $dbpdo->prepare("INSERT INTO yorumlar (ekleyen,yorum,icerikid,tip,domainaccess,tarih,spoiler,onay,u_name,u_email) VALUES ('$kullniciid' , '$yorum' , '$icerikid' , '$msg_tip' , '$domainaccess' , '$phptarih', '$spoiler', '$db_commentsappow', '$u_name', '$u_email')");
	$return->bindParam(":yorum",$yorum);
	$return = $return->execute();
	
	
	$rsqal  = $dbpdo->query("select id from yorumlar where icerikid = '$icerikid' and ekleyen = '$kullniciid' and tip = '$msg_tip'  and domainaccess = '$domainaccess' order by id DESC limit 1");
	$gelenl = $rsqal->fetch();
	
	$yorumid	=  $gelenl['id'];
	$yorum=nl2br(cust_text(temizle_replace($yorum)));
	
	
	if($kullniciid==0){
					$cevapyaniyazanunvancolor='class="guest" style="cursor:default"';$cevapyaniyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($_SESSION["kimdir"]==1){$cevapyaniyazanunvancolor='class="admin"';$cevapyaniyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($_SESSION["kimdir"]==5){$cevapyaniyazanunvancolor='class="mod"';$cevapyaniyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$cevapyaniyazanunvancolor="";$cevapyaniyazanunvanyazi="";}
				}									
				

				
	$response['data'] = '<div class="comment" id="yorum'.$yorumid.'"><span style="">
	<img class="avatar" src="'.$icon.'" alt="">
<div class="c-text"><div class="c-top"><a '.$cevapyaniyazanunvancolor.'  href="javascript:;" data-id="'.$kullniciid.'" data-user="'.$kullnicikim.'" onmouseover="loaduserWidget(this)">'.$kullnicikim.''.$cevapyaniyazanunvanyazi.'</a>
<span class="date"><span>•</span> '.$lang["REQUEST_13B"].'</span></div>
<p style="display: block">'.$yorum.'</p>
<div class="c-alt">
	<a href="javascript:;" onclick="openSubcommentForm('.$yorumid.', this)" class="open-subcomment">'.$lang["COMMENT_LINK_7A"].'</a>
 |<span class="like" onclick="comment_like('.$yorumid.',\'yorum\')"><abbr id="like_'.$yorumid.'">0</abbr><span class="fa fa-thumbs-up"></span></span>
 <span class="dislike" onclick="comment_dislike('.$yorumid.',\'yorum\')"><abbr id="dislike_'.$yorumid.'">0</abbr><span class="fa fa-thumbs-down"></span></span>
 </div>
 <div id="comment_content_'.$yorumid.'" style="position: relative"><div class="form-loader"></div>
 <div id="comments'.$yorumid.'"></div>
 </div>
 <div class="add-subcomment" id="open_add_subcomment_'.$yorumid.'">
 <div class="loader-ajax"></div>
 <div class="formm"><img src="'.$icon.'" alt="">
 <div class="inner"><form id="subcomment_194880" action="" onsubmit="return false;">
 <input type="hidden" name="user_id"><input type="hidden" name="comment_id" value="'.$yorumid.'">
 <textarea name="comment_text" cols="30" rows="10" placeholder="'.$lang["COMMENT_LINK_9C"].'" onclick="excomment_text(this)"></textarea>
 <div class="subcomment-alt"><button type="submit" onclick="addSubComment(this, '.$yorumid.')">'.$lang["COMMENT_LINK_3C"].'</button>
 <label class="cb checkbox2"></label></div></form></div></div></div>
 </div><div class="clear"></div></span>
 </div>
';

		
	}

}elseif ($type == 'addSubComment') { 
	
	
	$comment_id = $_POST["comment_id"]; 
	$comment_text = htmlentities(strip_tags(tirnak_replace($_POST["comment_text"]))); 
	if(strlen($comment_text) > 500){
		$response['error'] = "Too large text. Limit 500 character"; 
		echo json_encode($response);
		exit();}
	$spoiler = "0";
	if (isset($_POST["spoiler"])) { 
	$spoiler = $_POST["spoiler"];
	}

	
		$u_name = "";$u_email = "";
				
		if (isset($_SESSION['oturumid'])){ 
		$kullnicikim = $_SESSION["kulladi"];
		$kullniciid = $_SESSION["oturumid"];
		$kullniciicon = $_SESSION["icon"];


		}else{ 
				$user_username = "";
				if (isset($_POST["user_username"])) { 
				$user_username = htmlentities(strip_tags(tirnak_replace($_POST["user_username"])));
				}
				$user_email = "";
				if (isset($_POST["user_email"])) { 
				$user_email = htmlentities(strip_tags(tirnak_replace($_POST["user_email"])));
				}
				$user_password = "";
				if (isset($_POST["user_password"])) { 
				$user_password = htmlentities(strip_tags(tirnak_replace($_POST["user_password"])));
				}
				if ($user_username == '' or $user_email == '') { 
					$response['error'] = $lang["REQUEST_3"];
					echo json_encode($response);
					exit();
				}
			if($user_password > ""){ 
	
				$okmu = uyeregister($user_username,$user_email,$user_password,"","","","","","","");
				
				if ($okmu == 'ok') { 
					$kullnicikim = $_SESSION["kulladi"];
					$kullniciid = $_SESSION["oturumid"];
					$kullniciicon = $_SESSION["icon"];
				}else{ 
					$response['error'] = $okmu;
					echo json_encode($response);
					exit();
				}
				
			}elseif($db_guestcomment=="open"){ 
				$u_name = $user_username;
				$u_email = $user_email;
				
				$kullnicikim =$u_name;
				$kullniciid = "0";
				$kullniciicon = "";
				
			}elseif($db_guestcomment=="close"){ 
					$response['error'] = $lang["GENERAL_EXTRA_1"];
					echo json_encode($response);
					exit();
			}
		}


	
	
	$icon=resimcreate($kullniciicon,"s","member/avatar");
	
	
	
	if ($comment_id=="" or $comment_text=="") {
	$response['error'] = $lang["REQUEST_3"];
	}else{
		
	$ustyorumne  = $dbpdo->query("select tip,icerikid from yorumlar where id = '$comment_id' limit 1");
	if($ustyorum = $ustyorumne->fetch()){
		$gelenyorumtip=$ustyorum["tip"];
		$gelenyorumicerikid=$ustyorum["icerikid"];
		
		if($gelenyorumtip!="yorumcevap" and $gelenyorumtip!="yorumcevapyanit"){
			$yeniyorumtip="yorumcevap";
		}elseif($gelenyorumtip=="yorumcevap"){
			$yeniyorumtip="yorumcevapyanit";
		}elseif($gelenyorumtip=="yorumcevapyanit"){
			
			$yeniyorumtip="yorumcevapyanit";
			$comment_id = $gelenyorumicerikid;
		}
		

	$return = $dbpdo->prepare("INSERT INTO yorumlar (ekleyen,yorum,icerikid,tip,domainaccess,tarih,spoiler,onay,u_name,u_email) VALUES ('$_SESSION[oturumid]' , '$comment_text' , '$comment_id' , '$yeniyorumtip' , '$domainaccess' , '$phptarih', '$spoiler', '$db_commentsappow', '$u_name', '$u_email')");
	$return->bindParam(":yorum",$comment_text);
	$return = $return->execute();
	

	$cevapidgetir  = $dbpdo->query("select id from yorumlar where ekleyen = '$_SESSION[oturumid]' and icerikid = '$comment_id' and tip = '$yeniyorumtip' and domainaccess = '$domainaccess' order by tarih desc");
	$gelenww = $cevapidgetir->fetch();

	$yeniidne=$gelenww["id"];

	$comment_text=nl2br(cust_text(temizle_replace($comment_text)));
	
		if($kullniciid==0){
					$cevapyaniyazanunvancolor='class="guest" style="cursor:default"';$cevapyaniyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($_SESSION["kimdir"]==1){$cevapyaniyazanunvancolor='class="admin"';$cevapyaniyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($_SESSION["kimdir"]==5){$cevapyaniyazanunvancolor='class="mod"';$cevapyaniyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$cevapyaniyazanunvancolor="";$cevapyaniyazanunvanyazi="";}
				}	
	
	
	
	
	$response['comment'] = '<div class="comment" id="yorum'.$yeniidne.'"><span style="">
		<img class="avatar" src="'.resimcreate($_SESSION['icon'],"s","member/avatar").'" alt="">
	<div class="c-text"><div class="c-top"><a '.$cevapyaniyazanunvancolor.'  href="javascipt:void();" data-id="'.$kullniciid.'"  data-user="'.$kullnicikim.'" onmouseover="loaduserWidget(this)">'.$_SESSION["kulladi"].''.$cevapyaniyazanunvanyazi.'</a>
	<span class="date"><span>•</span> '.$lang["REQUEST_13B"].'</span></div>
	<p style="display: block">'.$comment_text.'</p>
	<div class="c-alt">
		<a href="javascript:;" onclick="openSubcommentForm('.$yeniidne.', this)" class="open-subcomment">'.$lang["COMMENT_LINK_7A"].'</a>
	 |<span class="like" onclick="comment_like('.$yeniidne.',\'yorum\')"><abbr id="like_'.$yeniidne.'">0</abbr><span class="fa fa-thumbs-up"></span></span>
	 <span class="dislike" onclick="comment_dislike('.$yeniidne.',\'yorum\')"><abbr id="dislike_'.$yeniidne.'">0</abbr><span class="fa fa-thumbs-down"></span></span>
	 </div>
	 <div id="comment_content_'.$yeniidne.'" style="position: relative"><div class="form-loader"></div>
	 <div id="comments'.$yeniidne.'"></div>
	 </div>
	 <div class="add-subcomment" id="open_add_subcomment_'.$yeniidne.'">
	 <div class="loader-ajax"></div>
	 <div class="formm"><img src="'.resimcreate($_SESSION['icon'],"s","member/avatar").'" alt="">
	 <div class="inner"><form id="subcomment_'.$yeniidne.'" action="" onsubmit="return false;">
	 <input type="hidden" name="user_id"><input type="hidden" name="comment_id" value="'.$yeniidne.'">
	 <textarea name="comment_text" cols="30" rows="10" placeholder="'.$lang["COMMENT_LINK_9C"].'" onclick="excomment_text(this)"></textarea>
	 <div class="subcomment-alt"><button type="submit" onclick="addSubComment(this, '.$yeniidne.')">'.$lang["COMMENT_LINK_3C"].'</button>
	 <label class="cb checkbox2"></label></div></form></div></div></div>
	 </div><div class="clear"></div></span>
	 </div>
	';
	

	}else{
	$response['error'] = $lang["REQUEST_3"];
	}
		
	
	
	}

}elseif ($type == 'loadComments') { 	
require_once("yorumlarfunc.php"); 

$id = $_POST["id"]; 
$tif = $_POST["tif"]; 

if($tif=="0"){
$comments = yorumcevaplarget($id,"full");
}elseif($tif=="1"){
$comments = yorumcevaplaryanitget($id,"full");
}

$response['comments'] = $comments;

}elseif ($type == 'loadComment') { 	
require_once("yorumlarfunc.php"); 

$id = $_POST["id"]; 
$pagination = $_POST["pagination"]; 
$desc = $_POST["desc"]; 

$comments = yorumget($id,$desc,$pagination,"tumu");


$response['comments'] = $comments;

}elseif ($type == 'loaduserdata') { 
	$user_id = $_POST["user_id"]; 
	if ($user_id==""){
	$response['error'] = $lang["REQUEST_3"];
	}else{
					$rsqa  = $dbpdo->query("Select * from uyeler where id = '$user_id' ");
					if($gelenz = $rsqa->fetch()){
					$response['username'] = $gelenz['kulladi'];
					$response['name'] = $gelenz['isim'];
					$response['surname'] = $gelenz['soyisim'];
					$response['genre'] = $gelenz['cinsiyet'];
					$response['town'] = $gelenz['sehir'];
					$response['reg'] = $gelenz['kayittarih'];
					$response['icon'] = resimcreate($gelenz["icon"],"m","member/avatar");
					$response['last'] = timeConvert($gelenz['son_tarih']);
			
					
					}else{
						$response['error'] = "No user data";
					}
		
	}
	
	
}elseif (!isset($_SESSION['oturumid'])){ //if user login in
$response['error'] = $lang["GENERAL_EXTRA_1"];


}elseif ($type == 'CommentDelete'){
	$id = $_POST["id"]; 

	if ($id=="") {
	$response['error'] = $lang["REQUEST_3"];
	}else{
	
	$rsqawymzz  = $dbpdo->query("Select ekleyen,icerikid,tip from yorumlar where id = '$id'");
	if($gelenzuye = $rsqawymzz->fetch()){
		$ekleyensa=$gelenzuye["ekleyen"];
		$yorumicerikid=$gelenzuye["icerikid"];
		$yorumiceriktip=$gelenzuye["tip"];
	
	
	if ($ekleyensa==$_SESSION["oturumid"] or $_SESSION["kimdir"]=="1") {

		$rsqalcev  = $dbpdo->query("select tarih,yorum,id,ekleyen,spoiler from yorumlar where icerikid = '".$id."' and tip = 'yorumcevap' and domainaccess = '$domainaccess'");
		while ($rowingelew = $rsqalcev->fetch()){	
		$yorumcevapid=$rowingelew["id"];
		
			$rsqaasv  = $dbpdo->query("select tarih,yorum,id,ekleyen,spoiler from yorumlar where icerikid = '".$yorumcevapid."' and tip = 'yorumcevapyanit' and domainaccess = '$domainaccess'");
			while ($roaselew = $rsqaasv->fetch()){	
			$yorumcevapyanitid=$roaselew["id"];
		
			$return2 = $dbpdo->prepare("DELETE FROM sikayet where icerikid = '$yorumcevapyanitid'");
			$return2 = $return2->execute();
			$return2 = $dbpdo->prepare("DELETE FROM begen where icerikid = '$yorumcevapyanitid' and begenitip = 'yorum'");
			$return2 = $return2->execute();
			$return2 = $dbpdo->prepare("DELETE FROM yorumlar where id = '$yorumcevapyanitid'");
			$return2 = $return2->execute();
			
			}
		
			$return2 = $dbpdo->prepare("DELETE FROM sikayet where icerikid = '$yorumcevapid'");
			$return2 = $return2->execute();
			$return2 = $dbpdo->prepare("DELETE FROM begen where icerikid = '$yorumcevapid' and begenitip = 'yorum'");
			$return2 = $return2->execute();
			$return2 = $dbpdo->prepare("DELETE FROM yorumlar where id = '$yorumcevapid'");
			$return2 = $return2->execute();

		}
	
		$return2 = $dbpdo->prepare("DELETE FROM sikayet where icerikid = '$id'");
		$return2 = $return2->execute();
		$return2 = $dbpdo->prepare("DELETE FROM begen where icerikid = '$id' and begenitip = 'yorum'");
		$return2 = $return2->execute();
		$return2 = $dbpdo->prepare("DELETE FROM yorumlar where id = '$id'");
		$return2 = $return2->execute();

	}else{
		$response['error'] = $lang["REQUEST_14A"];
	}
	


	}else{
		$response['error'] = $lang["REQUEST_14A"];
	}
	
	}
	
}elseif ($type == 'comment_report') {
	$report_id = $_POST["id"]; 
	
	if ($report_id=="") {
	$response['error'] = $lang["REQUEST_3"];
	}else{
	
	$stmt  = $dbpdo->query("select * from sikayet where icerikid = '$report_id'");
	if($gelenwwmes = $stmt->fetch()){
	
	$response['error'] = $lang["REQUEST_14C"];
	
	
	}else{
	$dbpdo->exec("INSERT INTO sikayet (gonderen,tarih,icerikid) VALUES ('$_SESSION[oturumid]' ,  '$phptarih' , '$report_id')");
	

	$response['success'] =$lang["REQUEST_14D"];	
	}
	
	}
	
}elseif ($type == 'comment_like_func'){ 	
	
	
$yorum_id = $_POST["id"]; 
$yorumbegentip = $_POST["tip"];
$yorumiceriktip = $_POST["iceriktip"];

	if ($yorum_id=="" or $yorumbegentip=="" or $yorumiceriktip=="") {
	$response['error'] = $lang["REQUEST_3"];
	}else{

	$begenmismi  = $dbpdo->query("select tiplike from begen where kulladi like '$_SESSION[oturumid]' and icerikid like '$yorum_id' and begenitip like '$yorumiceriktip'");
	If ($gelensd = $begenmismi->fetch()) {  
		
		$tiplike=$gelensd['tiplike'];
		
		if ($tiplike=="like") { 
			
			if ($yorumbegentip=="like") {
			$response['error'] = $lang["REQUEST_15A"];
			}else{
			$response['error'] = $lang["REQUEST_15B"];
			}
			
		}elseif($tiplike=="unlike") { 
		
			if ($yorumbegentip=="unlike") { 
			$response['error'] = $lang["REQUEST_15C"];
			}else{
			$response['error'] = $lang["REQUEST_15D"];
			}
		
		}
		
	}Else{
		$return = $dbpdo->prepare("INSERT INTO begen (kulladi,icerikid,tiplike,begenitip,tarih) VALUES ('$_SESSION[oturumid]' , '$yorum_id' ,  '$yorumbegentip' , '$yorumiceriktip' , '$phptarih')");
		 $return = $return->execute();
		$response['success'] = "ok";

	}
	
	}
}


echo json_encode($response);
?>
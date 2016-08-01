<?php

	require_once("lang.class.php"); 
		
	
	$config = New Language("cong");
	$cong =  $config->userLanguage(); 
	$language = New Language("lang");
	$lang =  $language->userLanguage(); 

	
	$db_adres		= $cong["DB_SERVER"];
	$db_user		= $cong["DB_USER"];
	$db_pass		= $cong["DB_PASS"];
	$db_table		= $cong["DB_TABLE"];	

	$db_faceapcode		= $cong["FACEBOOK_API"];
	$db_twitterapcode		= $cong["TWITTER_API"];
	$db_googleapcode		= $cong["GOOGLE_API"];
	$db_siteadres		= $cong["SITE_URL"];
	$db_sitelogo		= $cong["SITE_LOGO"];
	$db_sitemotto		= $cong["SITE_NAME"];
	$db_sitemailadres		= $cong["SITE_EMAIL"];
	$db_allowedsites		= $cong["ALLOWED_DOMAINS"];
	

	$db_theme		= $cong["THEME"]; // ' using theme will be listed in /app/assets/themes folder.
	$db_lang		= $cong["LANGUAGE"];	

	$db_commentsappow		= $cong["COMMENT_APPROVALS"]; // ' 0: appow is active - 1: all comments appow
	$db_populercommentcount		= $cong["COMMENT_POPULERMAXCOUNT"]; // ' using theme will be listed in /app/assets/themes folder.
	$db_commentsnumberperpage		= $cong["COMMENT_PERPAGEMAXCOUNT"]; // ' using theme will be listed in /app/assets/themes folder.

	$db_footerlinks		= $cong["COMMENT_FOOTERLINKS"]; //  open/close -  links
	$db_guestcomment		= $cong["COMMENT_ALLOWGUESTCOMMENT"]; //  open/close -  allow guest comments

	if($db_adres=="" or $db_user=="" or $db_table==""){
		die("Look's like you need the configure database connection. Please check *easyComment-folder*/app/install.php. For more information please look our docs in here: http://easycomment.akbilisim.com/doc.html");
	}
	
	try {
      $dbpdo = new PDO('mysql:host='.$db_adres.';dbname='.$db_table, $db_user, $db_pass);
      $dbpdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
	} catch (PDOException $e) {
		  echo 'Connection Error: ' . $e->getMessage();
		  die();
	}
	
	

	$return = $dbpdo->prepare("set names utf8");;
	$return = $return->execute();
	
	$phptarih=date("YmdHis");
	$zamangunayyil=date("Ymd");
	
	ini_set('error_reporting', E_ALL);

	
	ob_start();
	session_start();
	
	
	if (isset($_COOKIE[$db_sitemotto."user"]) and isset($_COOKIE[$db_sitemotto."pass"])){
	$kulladi	=  $_COOKIE[$db_sitemotto."user"];
	$sifre	=  $_COOKIE[$db_sitemotto."pass"];
	

		if(!isset($_SESSION['son_tarih']) or (time() - $_SESSION['son_tarih']) > 60 ){
		$rsqa  = $dbpdo->query("Select id,kulladi,sifre,unvan,seolinki,icon,ban,son_tarih from uyeler where kulladi like '$kulladi' and sifre like '$sifre'");
			if($gelenz = $rsqa->fetch()){

				$banlimi = $gelenz['ban'];
				
				if ($banlimi == '1'){ 
				echo("<script>$(function () {
			error('Your banned. logout..');
			setTimeout(function(){ location.href = '/cikis_yap'; }, 2000);
			});</script>");
		
				exit();
				}
				
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
					 
				$return3 = $dbpdo->prepare("UpDate uyeler Set ipno = '$ip' , son_tarih = '$phptarih' where id like '$gelenz[id]'");
				$return3 = $return3->execute();
	
				setcookie($db_sitemotto."user",$_SESSION['kulladi'],time() + (86400 * 7), "/");
				setcookie($db_sitemotto."pass",$_SESSION['sifre'],time() + (86400 * 7), "/");
				
			}else{
				setcookie($db_sitemotto."user", "", time()-3600, "/");
				setcookie($db_sitemotto."pass", "", time()-3600, "/");
			}
		}
	}


function resimcreate($resimid,$resimboyut,$klasor){
	global $db_siteadres;
		if(substr($resimid,0,6)=="https:" || substr($resimid,0,5)=="http:"){
			
		return $resimid;
			
		}elseif($resimid == "" || $resimid == "NULL"){
	
		return  $db_siteadres."app/upload/$klasor/default-$resimboyut.jpg";

		}else{
		
		return $db_siteadres."app/upload/$klasor/$resimid-$resimboyut.jpg";
	}
}

function seflink($string)
{	

$find = array('+', '#');
$replace = array('', '');
$string = strtolower(str_replace($find, $replace, $string));
$string = preg_replace("@[^A-Za-z0-9\-_\.\+]@i", ' ', $string);
$string = trim(preg_replace('/\s+/', ' ', $string));
$string = str_replace(' ', '-', $string);
$string = str_replace('.', '', $string);
return $string;
	
}
function tirnak_replace ($perma)
{
   $perma = str_replace("'", "&#39;", $perma);

   return $perma;
}

function temizle_replace($perma)
{
   $perma=str_replace("&#39;","'",$perma);
		$perma=str_replace("&","",$perma);
				$perma=str_replace("amp;","",$perma);
				$perma=str_replace("#39;","'",$perma);
				$perma=str_replace("#44;",".",$perma);
				$perma=str_replace("ouml;","ö",$perma);
				$perma=str_replace("uuml;","ü",$perma);
				$perma=str_replace("ccedil;","ç",$perma);
				$perma=str_replace("Ouml;","Ö",$perma);
				$perma=str_replace("Uuml;","Ü",$perma);
				$perma=str_replace("Ccedil;","Ç",$perma);
		
   return $perma;
}

function timeConvert ( $zaman ){
	global $lang;
	$zaman =  strtotime($zaman);
	$zaman_farki = time() - $zaman;
	$saniye = $zaman_farki;
	$dakika = round($zaman_farki/60);
	$saat = round($zaman_farki/3600);
	$gun = round($zaman_farki/86400);
	$hafta = round($zaman_farki/604800);
	$ay = round($zaman_farki/2419200);
	$yil = round($zaman_farki/29030400);
	if( $saniye < 60 ){
		if ($saniye == 0){
			return $lang["GENERAL_TIME_1A"];
		} else {
			return $saniye .$lang["GENERAL_TIME_1B"];
		}
	} else if ( $dakika < 60 ){
		return $dakika .$lang["GENERAL_TIME_1C"];
	} else if ( $saat < 24 ){
		return $saat.$lang["GENERAL_TIME_1D"];
	} else if ( $gun < 7 ){
		return $gun .$lang["GENERAL_TIME_1E"];
	} else if ( $hafta < 4 ){
		return $hafta.$lang["GENERAL_TIME_1F"];
	} else if ( $ay < 12 ){
		return $ay .$lang["GENERAL_TIME_1G"];
	} else {
		return $yil.$lang["GENERAL_TIME_1H"];
	}
}

function timeaygunyil ( $zaman ){
	//setlocale(LC_ALL, 'turkish'); 

	$gun = substr($zaman,6, 2);
	$ay = substr($zaman,4,2);
	$yil = substr($zaman,0, 4);
	
	$tarih= date('j F Y', mktime(0,0,0,$ay,$gun,$yil));
	$tarih=zamantr($tarih);
	
	return $tarih;
	
	
}

function zamantr($girdi) 
{ 
    $cikti = $girdi; 

return $cikti; 
} 

function cust_text($string)
{
global $db_siteadres;
$output = '';

$output= preg_replace("#http://([\S]+?)#Uis", '<a href="http://\\1" target="_blank">http://\\1</a>', $string);

$output = trim($output);

$smiles = array(
             	 ':)'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/smile.png" title=":)" alt="smile"  />',
						':('    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/sadsmile.png" title=":(" alt="smile"  />',
						':D'   =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/bigsmile.png" title=":D" alt="smile" />',
						':d'   =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/bigsmile.png" title=":d" alt="smile" />',
						'8)'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/cool.png" title="8)" alt="smile"  />',
						':o'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/wink.png" title=":o" alt="smile"  />',
						';('   =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/crying.png" title=";(" alt="smile" />',
						':|'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/speechless.png" title=":|" alt="smile" />',
						':*'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/kiss.png" title=":*" alt="smile" />',
						':P'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/tongueout.png" title=":P" alt="smile" />',
						':^)'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/wondering.png" title=":^)" alt="smile" />',
						'<3'    =>  '<img src="'.$db_siteadres.'app/assets/images/smiles/inlove.png" title="<3" alt="smile" />'
              );
		
foreach($smiles as $key => $img) {
$output =   str_replace($key, $img,       $output);
}

return $output;
}
	
	
?>
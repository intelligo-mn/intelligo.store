<?php
$access="";
$linenumber=0;
$access = explode(",", $db_allowedsites);

if(isset($_GET["access"])){
 $access = $_GET["access"]; 

 $domainaccess = $access; 

	foreach(explode(",", $db_allowedsites) as $line){
	
		$line = str_replace("http://", "", 	$line);
		$line = str_replace("https://", "", 	$line);
		
		if ($line==base64_decode($access)){
				$linenumber=$linenumber+1;
		}
	}
}

if($linenumber==0){ die("No access in this domain."); }

$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
if(isset($dsdler[0])){
	$urlll=$dsdler[0];
}else{
	die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
	exit();
}
							
							
$theme=$db_theme; //default theme
if(isset($_GET["theme"])){
 $theme = $_GET["theme"]; 
	if (file_exists($_SERVER['DOCUMENT_ROOT'].$urlll."/app/assets/themes/".$theme."/styles/main.css")) {
	   $theme = $theme;
	} else {
	   echo "<h3>Not a Valid Theme</h3>";
	   exit();
	}
}
$titlene=$lang["COMMENT_LINK_1"]; //default titte
if(isset($_GET["title"])){
 $titlene = $_GET["title"]; 
}
if(isset($_GET["C_id"])){
 $C_id = $_GET["C_id"]; 

} else {
	   echo "<h3>Not a Valid ID</h3>";
	   exit();
}
if(isset($_GET["C_url"])){
 
	if(filter_var($_GET["C_url"], FILTER_VALIDATE_URL)){ 
	 $C_url = $_GET["C_url"]; 
	} else {
	   echo "<h3>Not a Valid URL</h3>";
	   exit();
	}
} else {
	   echo "<h3>Not a Valid URL</h3>";
	   exit();
}
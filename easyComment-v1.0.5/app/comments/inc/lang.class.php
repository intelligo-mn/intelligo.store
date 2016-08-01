<?php
class Language {

private $UserLng;
private $langSelected;
public $lang = array();

public function __construct($userLanguage){

    $this->UserLng = $userLanguage;
    //construct lang file
	
	
	
	$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
	if(isset($dsdler[0])){
		$urlll=$dsdler[0];
	}else{
		die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
		exit();
	}


    $langFile = $_SERVER['DOCUMENT_ROOT'] . $urlll .'/app/configuration/'. $this->UserLng . '.ini';
    if(!file_exists($langFile)){
		
       die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
    }

    $this->lang = parse_ini_file($langFile);
}

public function userLanguage(){
    return $this->lang;
}

}
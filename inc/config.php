<?php
if(!isset($_SESSION)) {
	session_start();
}

defined("SITE_URL")
	|| define("SITE_URL", "http://".$_SERVER['SERVER_NAME']);
	
defined("DS")
	|| define("DS", DIRECTORY_SEPARATOR);

defined("ROOT_PATH")
	|| define("ROOT_PATH", realpath(dirname(__FILE__) . DS."..".DS));
	
defined("CLASSES_DIR")
	|| define("CLASSES_DIR", "classes");

defined("PAGES_DIR")
	|| define("PAGES_DIR", "pages");

defined("MOD_DIR")
	|| define("MOD_DIR", "mod");
	
defined("INC_DIR")
	|| define("INC_DIR", "inc");
	
defined("TEMPLATE_DIR")
	|| define("TEMPLATE_DIR", "template");
	
defined("EMAILS_PATH")
	|| define("EMAILS_PATH", ROOT_PATH.DS."emails");
	
defined("CATALOGUE_PATH")
	|| define("CATALOGUE_PATH", ROOT_PATH.DS."media".DS."catalogue");
	
set_include_path(implode(PATH_SEPARATOR, array(
	realpath(ROOT_PATH.DS.CLASSES_DIR),
	realpath(ROOT_PATH.DS.PAGES_DIR),
	realpath(ROOT_PATH.DS.MOD_DIR),
	realpath(ROOT_PATH.DS.INC_DIR),
	realpath(ROOT_PATH.DS.TEMPLATE_DIR),
	get_include_path()
)));
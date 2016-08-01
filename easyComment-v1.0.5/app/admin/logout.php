<?php require_once("../comments/inc/config.php"); 

		session_destroy();

		setcookie($db_sitemotto."user", "", time()-3600, "/");
				
		setcookie($db_sitemotto."pass", "", time()-3600, "/");
				
	
		header("Location: /");
		

?>
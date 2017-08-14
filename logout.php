<?php
	session_start();	
	unset($_SESSION['user']);
	unset($_SESSION['timeout']);
	session_destroy();
	header("location:index.php");
?>
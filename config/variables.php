<?php
	//Өгөгдлийн сангийн тохиргоо
	$host ="localhost";
	$user ="admin_default";
	$pass ="TsERVEGkb4";
	$database = "admin_default";
	$connect = new mysqli($host, $user, $pass, $database) or die("Error : ".mysql_error());
	
	$access_key = "12345";

?>
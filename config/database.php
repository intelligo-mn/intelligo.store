<?php

	//Өгөгдлийн сангийн тохиргоо
	$host ="localhost";
	$user ="tortuvshin";
	$pass ="";
	$database = "appbase";
	$connect = new mysqli($host, $user, $pass, $database) or die("Error : ".mysql_error());
	$connect->set_charset('utf8');
	$access_key = "12345";
?>
<?php

	//Өгөгдлийн сангийн тохиргоо
	$host ="localhost";
	$user ="root";
	$pass ="";
	$database = "ecommerce";
	$connect = new mysqli($host, $user, $pass,$database) or die("Error : ".mysql_error());
	
?>
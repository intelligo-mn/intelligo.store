<?php

error_reporting(0);

$db_name = "modu";
$mysql_user = "modu";
$mysql_pass = "modu";
$server_name = getenv('IP');

$con = mysqli_connect($server_name, $mysql_user, $mysql_pass, $db_name);

if(!$con){
	echo '{"message":"Unable to connect to the database."}';
}

?>
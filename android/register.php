<?php
error_reporting(0);
require "init.php";

$name = $_POST["name"];
$password = $_POST["password"];
$email = $_POST["email"];

//$name = "sdf";
//$password = "sdf";
//$email = "sdf@r54";

$sql = "INSERT INTO `user` (`id`,`name`, `password`, `email`) VALUES (NULL, '".$name."', '".$password."', '".$email."');";
if(!mysqli_query($con, $sql)){
	echo '{"message":"Unable to save the data to the database."}';
}

?>
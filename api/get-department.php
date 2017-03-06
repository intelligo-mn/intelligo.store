<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if($access_key_received == $access_key){
			// Бүх байгууллага авах
			$sql_query = "SELECT * 
					FROM department 
					ORDER BY department_name ASC ";
			
			$result = $connect->query($sql_query) or die ("Error :".mysql_error());
	 
			$departments = array();
			while($department = $result->fetch_assoc()) {
				$departments[] = array('department'=>$department);
			}
			
			// json бэлдэх
			$output = json_encode(array('data' => $departments));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey is required.');
	}
 
	echo $output;

	include_once('../config/close_database.php'); 
?>
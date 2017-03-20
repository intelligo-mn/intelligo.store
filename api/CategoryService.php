<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if($access_key_received == $access_key){
			// Бүх ангилал авах
			$sql_query = "SELECT * 
					FROM dcategory 
					ORDER BY category_name ASC ";
			
			$result = $connect->query($sql_query) or die ("Error :".mysql_error());
	 
			$categories = array();
			while($category = $result->fetch_assoc()) {
				$categories[] = array('category'=>$category);
			}
			
			// json бэлдэх
			$output = json_encode(array('data' => $categories));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey is required.');
	}
 
	echo $output;

	include_once('../config/close_database.php'); 
?>
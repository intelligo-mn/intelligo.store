<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if($access_key_received == $access_key){
			
			$sql_query = "SELECT * 
					FROM project_category";
			
			$result = $connect->query($sql_query) or die ("Error :".mysql_error());
	 
			$project_category = array();
			while($project_category = $result->fetch_assoc()) {
				$project_categories[] = array('project_category'=>$project_category);
			}
			
			$output = json_encode(array('data' => $project_categories));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey is required.');
	}
 
	echo $output;

	include_once('../config/close_database.php'); 
?>
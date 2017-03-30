<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if($access_key_received == $access_key){
			
			$sql_query = "SELECT * 
					FROM product_brand";
			
			$result = $connect->query($sql_query) or die ("Error :".mysql_error());
	 
			$brand = array();
			while($brand = $result->fetch_assoc()) {
				$brands[] = array('product_brand'=>$brand);
			}
			
			$output = json_encode(array('data' => $brands));

		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey is required.');
	}
 
	echo $output;

	include_once('../config/close_database.php'); 
?>
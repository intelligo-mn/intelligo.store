<?php
	include_once('config/database.php'); 
	include_once('config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if(isset($_GET['keyword'])){
			$keyword = $_GET['keyword'];
		}else{
			$keyword = "";
		}
		
		if($access_key_received == $access_key){
			if($keyword == ""){

				$sql_query = "SELECT * 
					FROM product 
					ORDER BY id DESC";
			}else{
				$sql_query = "SELECT *
					FROM product 
					WHERE name LIKE '%".$keyword."%'
					ORDER BY id DESC";
			}
			
			$result = $connect->query($sql_query) or die("Error : ".mysql_error());
			
			$products = array();
			while($product = $result->fetch_assoc()) {
				$products[] = array('product_all'=>$product);
			}
			
			$output = json_encode(array('data' => $products));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey and category id are required.');
	}
 
	//Output the output.
	echo $output;

	include_once('config/close_database.php'); 
?>
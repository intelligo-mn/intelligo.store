<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey']) && isset($_GET['category_id'])) {
		$access_key_received = $_GET['accesskey'];
		$category_ID = $_GET['category_id'];
		
		if(isset($_GET['keyword'])){
			$keyword = $_GET['keyword'];
		}else{
			$keyword = "";
		}
		
		if($access_key_received == $access_key){
			if($keyword == ""){
				// тухайн ангилалд хамаатай бараанууд хайх
				$sql_query = "SELECT product_id, product_name, price, product_image 
					FROM product 
					WHERE category_id = ".$category_ID." 
					ORDER BY product_id DESC";
			}else{
				$sql_query = "SELECT product_id, product_name, price, product_image 
					FROM product 
					WHERE product_name LIKE '%".$keyword."%' AND category_id = ".$category_ID." 
					ORDER BY product_id DESC";
			}
			
			$result = $connect->query($sql_query) or die("Error : ".mysql_error());
			
			$products = array();
			while($product = $result->fetch_assoc()) {
				$products[] = array('product'=>$product);
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

	include_once('../config/close_database.php'); 
?>
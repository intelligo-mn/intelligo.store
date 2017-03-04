<?php
	include_once('../config/connect.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey']) && isset($_GET['product_id'])) {
		$access_key_received = $_GET['accesskey'];
		$product_ID = $_GET['product_id'];
		
		if($access_key_received == $access_key){

			$sql_query = "SELECT Product_ID, Product_name, Product_image, Price, Serve_for, Description, Quantity 
				FROM product 
				WHERE product_ID = ".$product_ID;
				
			$result = $connect->query($sql_query) or die ("Error :".mysql_error());
	 
			$products = array();
			while($product = $result->fetch_assoc()) {
				$products[] = array('product_detail'=>$product);
			}
		 
			$output = json_encode(array('data' => $products));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey and product id are required.');
	}
 
	echo $output;

	include_once('../config/close_database.php'); 
?>
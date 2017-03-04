<?php
	include_once('../config/connect.php'); 
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
				$sql_query = "SELECT Product_ID, Product_name, Price, Product_image 
					FROM tbl_product 
					WHERE Category_ID = ".$category_ID." 
					ORDER BY product_ID DESC";
			}else{
				$sql_query = "SELECT Product_ID, product_name, Price, product_image 
					FROM product 
					WHERE Product_name LIKE '%".$keyword."%' AND Category_ID = ".$category_ID." 
					ORDER BY Product_ID DESC";
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
<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(!isset($_GET['accesskey']))
		die('accesskey and category id are required.');

	if($_GET['accesskey'] != $access_key)
		die('accesskey is incorrect.');
		
	$query = "SELECT * FROM dproduct";
	if(isset($_GET['isAdd']) && $_GET['isAdd']){
		$model = isset($_GET['model']) ? $_GET['model'] : "";
		$name = isset($_GET['name']) ? $_GET['name'] : "";
		$description = isset($_GET['description']) ? $_GET['description'] : "";
		$price = isset($_GET['price']) ? $_GET['price'] : "";
		$currency = isset($_GET['currency']) ? $_GET['currency'] : "";
		$ipaddress = isset($_GET['ipaddress']) ? $_GET['ipaddress'] : "";
		$dateTime = new DateTime();
		 
		$query = "INSERT INTO dproduct(`id`, `code`, `model`, `name`, `default_photo_id`, `description`, `folder`, `price`, 
						`currency`, `is_sale`, `is_active`, `brand_id`, `company_id`, `info_url`, `attr`, 
						`in_stock`, `is_top`, `is_fearured`, `hitcounter`, `ip_address`, `sort_order`, 
						`created_user_id`, `updated_user_id`, `created_at`, `updated_at`)
					VALUES(, '".(round(microtime(true)*1000)).$name."', '".$name."', 1, '".$description."', NULL, ".$price.",
						'".$currency."', NULL, NULL, NULL, NULL, '', '',
						NULL, NULL, NULL, 1, '".$ipaddress."', 1,
						NULL, NULL, $dateTime, $dateTime
					)";
	}

	$result = $connect->query($query) or die("Error : ".mysql_error());
	
	$products = array();
	while($product = $result->fetch_assoc()) {
		$products[] = array('product'=>$product);
	}
	
	//Output the output.
	echo json_encode($products);

	include_once('../config/close_database.php'); 
?>
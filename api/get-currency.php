<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(isset($_GET['accesskey'])) {
		$access_key_received = $_GET['accesskey'];
		
		if($access_key_received == $access_key){
		
			$sql_query = "SELECT * 
					FROM setting 
					WHERE variable = 'tax'";
					
			$result_to_get_tax = $connect->query($sql_query) or die ("Error :".mysql_error());
			$tax = $result_to_get_tax->fetch_assoc();
			
			$sql_query = "SELECT * 
					FROM setting 
					WHERE variable = 'currency'";
					
			$result_to_get_currency = $connect->query($sql_query) or die ("Error :".mysql_error());
			$currency = $result_to_get_currency->fetch_assoc();

			$tax_n_currency = array();
			
			$tax_n_currency[] = array('tax_n_currency'=>$tax);
			$tax_n_currency[] = array('tax_n_currency'=>$currency);
			
			$output = json_encode(array('data' => $tax_n_currency));
		}else{
			die('accesskey is incorrect.');
		}
	} else {
		die('accesskey is required.');
	}
 
	//Output the output.
	echo $output;

	include_once('../config/close_database.php'); 
?>
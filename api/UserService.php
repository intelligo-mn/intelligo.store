<?php
	include_once('../config/database.php'); 
	include_once('../config/variables.php');
	
	if(!isset($_GET['accesskey']))
		die('accesskey and category id are required.');

	if($_GET['accesskey'] != $access_key)
		die('accesskey is incorrect.');
		
	$isRegister = isset($_GET['isRegister']) && $_GET['isRegister'] == true;
		
	$users = [];
	
	$query = "";
	if($isRegister)
		if(isset($_GET['username']) && isset($_GET['password']) && isset($_GET['email']))
			$query = "INSERT INTO `duser` (`id`, `username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, 
			  `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_user_id`, `updated_user_id`, 
			  `department_id`, `rank_id`, `position_id`, `aimag_id`, `created_at`, `updated_at`, `type`, `person_reg_number`, 
			  `person_profession`, `person_biography`, `person_start_year`, `company_name`, `company_register`, `company_description`, 
			  `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, 
			  `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, 
			  `registered_from_language`, `is_creator`, `is_investor`, `is_idea_owner`, `is_idea_buyer`, `slug`) 
			VALUES
			(, '".$_GET["username"]."', '".$_GET["password"]."', '".$_GET["email"]."', 'Баяр', 'Удвал', '88058621', 1, '1986-05-21', 
			  1, NULL, '2016-05', 'bayar.jpg', NULL, NULL, 1, 
			  NULL, NULL, NULL, NULL, '2016-05-29 14:33:40', '2016-11-29 18:01:02', 'person', '',
			   'Програмист', '', 2008, '', '', '',
			    NULL, '88058621', '77270521', 'Монгол, Байршил', '', 326, 'http://www.einsteinsoft.mn', '1', NULL, 
			    NULL, NULL, NULL, NULL, NULL, NULL, NULL, 
			    NULL, 1, 1, NULL, NULL, 'bayar-udval')";
		
	else
		if(isset($_GET['username']) && isset($_GET['password']))
			$query = "SELECT * FROM duser where username='".$_GET['username']."' AND password = '". $_GET['password']."'";
	
	$result = $connect->query($query) or die("Error : ".mysql_error());
	while($user = $result->fetch_assoc()) {
		$users[] = array('users'=>$user);
	}
	
	//Output the output.
	echo json_encode($users);

	include_once('../config/close_database.php'); 
?>
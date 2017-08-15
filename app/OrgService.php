<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
    header('Content-Type: application/json; charset=utf-8');
 	
	require_once 'Controllers/OrgController.php';
	
    $orgObject = new OrgController();
    if(isset($_GET['org_id'])) 
    	echo json_encode($orgObject->getOrgId($_GET['org_id']));
    else
   		echo json_encode($orgObject->getAll());
?>
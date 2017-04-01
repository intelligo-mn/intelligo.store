<?php
header('Content-Type: text/plain; charset=utf-8');
 	
 	require_once '../app/BrandController.php';

 	$brandObject = new BrandController();
	
	$brands = $brandObject->getBrands();

	echo json_encode($brands);
?>
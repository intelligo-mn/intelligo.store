<?php

include ("/database/db_connect.php");

function getCategory (){

	$db = new Database();

	$get_cats = "select * from category";

	$run_cats = mysqli_query($get_cats);

	while ($row_cats=mysqli_fetch_array($run_cats)) {
		
		$cat_id = $row_cats['cat_id'];
		$cat_title = $row_cats['cat_title'];

		echo "<li><a href='index.php?cat=$cat_id'>$cat_title</a></li>";

	}

}

function getBrand (){

	$db = new Database();

	$get_brands = "select * from brands";

	$run_brands = mysqli_query($db, $get_brands);

	while ($row_brands=mysqli_fetch_array($run_brands)) {
		
		$brand_id = $row_brands['brand_id'];
		$brand_title = $row_brands['brand_title'];

		echo "<li><a href='index.php?brand=$brand_id'>$brand_title</a></li>";

	}

}


?>
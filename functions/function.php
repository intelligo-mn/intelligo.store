<?php

$con = mysqli_connect("localhost", "root", "", "modu");

function getCategory (){

	global $con;

	$getCats = "select * from category";

	$runCats = mysqli_query($con, $getCats);

	while ($rowCats=mysqli_fetch_array($runCats)) {
		
		$catId = $rowCats['cat_id'];
		$catTitle = $rowCats['cat_title'];

		echo "<li><a href='#'>$catTitle</a></li>";

	}
}


?>
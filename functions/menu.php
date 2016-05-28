<?php

include ("connect.php");

function getMenu (){

	global $db;

	$get_menus = "select * from menus";

	$run_menus = mysqli_query($db, $get_menus);

	while ($row_menus=mysqli_fetch_array($run_menus)) {
		
		$menu_id = $row_menus['menu_id'];
		$menu_title = $row_menus['menu_title'];
		$menu_url = $row_menus['menu_url'];

		echo "<li><a href='$menu_url'>$menu_title</a></li>";

	}

}


?>
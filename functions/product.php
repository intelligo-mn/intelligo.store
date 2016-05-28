<?php

include ("connect.php");

function getProduct (){

	global $db;

	$get_product = "select * from product";

	$run_product = mysqli_query($db, $get_product);

	while ($row_product = mysqli_fetch_array($run_product)) {
		
		$product_id = $row_product['product_id'];
		$product_cat = $row_product['product_cat'];
		$product_brand = $row_product['product_brand'];
        $product_title = $row_product['product_title'];
        $product_price = $row_product['product_price'];
        $product_image = $row_product['product_image'];
        
        echo "
            <div class = 'single-product'>
                <h3>$product_title</h3>
                
                <img src='admin/uploads/$product_image' width='180' height='180'>
            </div>
            
        ";
        
	}

}


?>
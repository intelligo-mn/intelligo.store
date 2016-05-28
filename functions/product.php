<?php

include ("connect.php");

function getProduct (){

    if(isset($_GET['cat'])){
        if(isset($_GET['brand'])){
        
        	global $db;
        
        	$get_product = "select * from product order by RAND() LIMIT 0, 10";
        
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
                    
                    <a href='details.php?product_id=$product_id'>Дэлгэрэнгүй</a>
                    <a href='index.php?product_id=$product_id'><button>сагсанд хийх</button></a>
                ";
                
        	}
        }
    }
}

function detailProduct (){

	global $db;
	
	if(isset($_GET['product_id'])){
	    
	    $product_id = $_GET['product_id'];

    	$get_product = "select * from product where product_id='$product_id'";
    
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
                
                <a href='index.php'>Буцах</a>
                <a href='index.php?p_id=$product_id'><button>сагсанд хийх</button></a>
            ";
            
    	}
	}

}


function getCatProduct (){

    if(isset($_GET['cat'])){
        
        $cat_id = $_GET['cat'];
        
    	global $db;
    
    	$get_cat_product = "select * from product where product_cat='$cat_id'";
    
    	$run_cat_product = mysqli_query($db, $get_cat_product);
    	
    	$count_cats = mysqli_num_rows($run_cat_product);
    
    	if($count_cats == 0) {
        	    
        	    echo "<h2>Хоосон байна</h2> ";
        	}
        else {
            
            while ($row_cat_product = mysqli_fetch_array($run_cat_product)) {
    		
    		$product_id = $row_cat_product['product_id'];
    		$product_cat = $row_cat_product['product_cat'];
    		$product_brand = $row_cat_product['product_brand'];
            $product_title = $row_cat_product['product_title'];
            $product_price = $row_cat_product['product_price'];
            $product_image = $row_cat_product['product_image'];
            
            
            	
        	if($count_cats == 0) {
        	    
        	    echo "<h2>Хоосон байна</h2> ";
        	}
        	
        
            	
            echo "
                <div class = 'single-product'>
                    <h3>$product_title</h3>
                    
                    <img src='admin/uploads/$product_image' width='180' height='180'>
                </div>
                
                <a href='details.php?product_id=$product_id'>Дэлгэрэнгүй</a>
                <a href='index.php?product_id=$product_id'><button>сагсанд хийх</button></a>
            ";    
        	    
            
    	}
        }
    	
    }

}


function getBrandProduct (){

    if(isset($_GET['brand'])){
        
        $brand_id = $_GET['brand'];
        
    	global $db;
    
    	$get_brand_product = "select * from product where product_brand='$brand_id'";
    
    	$run_brand_product = mysqli_query($db, $get_brand_product);
    	
    	$count_brands = mysqli_num_rows($run_brand_product);
    
    	if($count_brands == 0) {
        	    
        	    echo "<h2>Хоосон байна</h2> ";
        	}
        else {
            
            while ($row_brand_product = mysqli_fetch_array($run_brand_product)) {
    		
    		$product_id = $row_brand_product['product_id'];
    		$product_cat = $row_brand_product['product_cat'];
    		$product_brand = $row_brand_product['product_brand'];
            $product_title = $row_brand_product['product_title'];
            $product_price = $row_brand_product['product_price'];
            $product_image = $row_brand_product['product_image'];
            
            
            	
        	if($count_brands == 0) {
        	    
        	    echo "<h2>Хоосон байна</h2> ";
        	}
        	
        
            	
            echo "
                <div class = 'single-product'>
                    <h3>$product_title</h3>
                    
                    <img src='admin/uploads/$product_image' width='180' height='180'>
                </div>
                
                <a href='details.php?product_id=$product_id'>Дэлгэрэнгүй</a>
                <a href='index.php?product_id=$product_id'><button>сагсанд хийх</button></a>
            ";    
        	    
            
    	}
        }
    	
    }

}


?>
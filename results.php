<!DOCTYPE>
<?php 
	header('Content-Type: text/html; charset=utf-8');
	include ("functions/function.php");
	include ("functions/product.php");
?>

<html>
<head>
	<title>Modu</title>
	<meta charset="UTF-8">
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<div class="main">

		<div class="home-header">header</div>
	
		<div class="home-menu">
			<?php include ("templates/front/header.php");?>	
			<form method="get" action="results.php" enctype="multipart/form-data">
				<input type="text" name="search_query" placeholder="Хайх үгээ бич"/>
				<input type="submit" name="search" value="Хайх"/>
			</form>
		</div>
	
		<div class="home-sidebar">

			<div>Category</div>
			<ul>
				<?php 
					getCategory(); 
				?>

			</ul>
			<div>Brand</div>
			<ul>
				<?php 
					getBrand(); 
				?>

			</ul>
		</div>
	
		<div class="home-content">
			
			<?php
			

		    if(isset($_GET['search'])){
		        
		        	global $db;
		        	
		        	$search_query = $_GET['search_query'];
		        
		        	$get_product = "select * from product where product_keywords like '%$search_query%'";
		        
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
			?>	
		</div>
	
		<div class="home-footer">footer</div>
	
	</div>
</body>
</html>

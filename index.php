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
				getProduct();
				getCatProduct();
			?>	
		</div>
	
		<div class="home-footer">footer</div>
	
	</div>
</body>
</html>

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

			<div class='category'>
				<ul>
				<?php 
					getCategory(); 
				?>
				<?php 
					getBrand(); 
				?>
				</ul>
				
			</div>
			
		</div>
	
		<div class="home-content">
			
			<?php
				getProduct();
				getCatProduct();
				getBrandProduct();
			?>		
		</div>
	
		<div class="home-footer">footer</div>
	
	</div>
</body>
</html>

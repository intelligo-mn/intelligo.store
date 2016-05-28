<!DOCTYPE>
<?php 
header('Content-Type: text/html; charset=utf-8');
		include ("functions/function.php");
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

			<div></div>
			<ul>
				<?php getCategory(); ?>

			</ul>
		</div>
	
		<div class="home-content">content</div>
	
		<div class="home-footer">footer</div>
	
	</div>
</body>
</html>

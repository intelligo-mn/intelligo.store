<!DOCTYPE>
<?php 
		include ("functions/function.php");
?>

<html>
<head>
	<title>Modu</title>
	<link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>

	<div class="main">

		<div class="home-header">header</div>
	
		<div class="home-menu">menubar</div>
	
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
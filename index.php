<<<<<<< HEAD
<?php
require_once('inc/autoload.php');
$objCore = new Core();
$objCore->run();
=======
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
>>>>>>> 245cc6e2ba34ea85f6bbc53cc6ba292ddaf7a34d

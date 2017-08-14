<?php

	session_start();
	
	$currentTime = time() + 25200;
	$expired = 3600;

	if(!isset($_SESSION['user'])){
		header("location:index.php");
	}

	if($currentTime > $_SESSION['timeout']){
		session_destroy();
		header("location:index.php");
	}

	unset($_SESSION['timeout']);
	$_SESSION['timeout'] = $currentTime + $expired;
	
?>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>TechStar</title>
        <link rel="stylesheet" href="public/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/bootstrap.css">
        <link rel="stylesheet" href="public/css/custom.css">
    </head>
    <body>
    	<div id="container">
    		<?php include('views/menubar.php'); ?>
    		<?php include('views/product-add.php'); ?>
			<?php include('views/footer.php'); ?>
    	</div>

    <script src="public/js/jquery.min.js"></script>
    <script src="public/js/bootstrap.min.js"></script>	
    </body>
</html>
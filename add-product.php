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
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>DGL</title>
        <link rel="stylesheet" href="public/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/bootstrap.css">
        <link rel="stylesheet" href="public/css/custom.css">
    </head>
    <body>
    	<div id="container">
    		<?php include('views/menubar.php'); ?>
    		<?php include('views/add-product.php'); ?>
			<?php include('views/footer.php'); ?>
    	</div>

    <script src="public/js/jquery.min.js"></script>
    <script src="public/js/bootstrap.min.js"></script>	
    </body>
</html>
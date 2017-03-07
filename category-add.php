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
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/custom.css">
        <title>DGL</title>
    </head>
    <body>
    	<div id="container">
    		<?php include('public/menubar.php'); ?>
    		<?php include('public/category-add.php'); ?>
			<?php include('public/footer.php'); ?>
    	</div>

    <script src="css/js/jquery.min.js"></script>
    <script src="css/js/bootstrap.min.js"></script>	
    </body>
</html>
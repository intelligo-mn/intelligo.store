<?php 
	ob_start(); 
	session_start();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/custom.css">
        <title>DglProject</title>
        <style>
            .login{
              margin-top: 12%;
              margin-left: 2%;
            }
            .login h1{
              padding-bottom: 40px;
            }
            body{
              font-family: 'Open Sans', sans-serif;
              background: #F9F9F9;
            }
        </style>
    </head>

    <body>
    	<div id="container">
			<?php include('public/login_form.php');?>
	        <?php include('public/footer.php');?>
    	</div>

    <script src="css/js/bootstrap.min.js"></script>
    </body>
</html>
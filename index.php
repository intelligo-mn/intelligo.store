<?php 
	ob_start(); 
	session_start();
?>

﻿<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>Нэвтрэх хэсэг | TECHSTAR DASHBOARD</title>
    <!-- Favicon-->
    <link rel="icon" href="../../public/favicon.ico" type="image/x-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">

    <!-- Bootstrap Core Css -->
    <link href="../../public/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Waves Effect Css -->
    <link href="../../public/plugins/node-waves/waves.css" rel="stylesheet" />

    <!-- Animation Css -->
    <link href="../../public/plugins/animate-css/animate.css" rel="stylesheet" />

    <!-- Custom Css -->
    <link href="../../public/css/style.css" rel="stylesheet">
</head>

<body class="login-page">

	<?php include('views/login.php');?>
	
    <!-- Jquery Core Js -->
    <script src="../../public/plugins/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core Js -->
    <script src="../../public/plugins/bootstrap/js/bootstrap.js"></script>

    <!-- Waves Effect Plugin Js -->
    <script src="../../public/plugins/node-waves/waves.js"></script>

    <!-- Validation Plugin Js -->
    <script src="../../public/plugins/jquery-validation/jquery.validate.js"></script>

    <!-- Custom Js -->
    <script src="../../public/js/admin.js"></script>
    <script src="../../public/js/pages/examples/sign-in.js"></script>
</body>

</html>


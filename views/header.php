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

﻿<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <title>TECHSTAR DASHBOARD</title>
        <!-- Favicon-->
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    
        <!-- Bootstrap Core Css -->
        <link href="/public/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
    
        <!-- Waves Effect Css -->
        <link href="/public/plugins/node-waves/waves.css" rel="stylesheet" />
    
        <!-- Animation Css -->
        <link href="/public/plugins/animate-css/animate.css" rel="stylesheet" />
    
        <!-- Morris Chart Css-->
        <link href="/public/plugins/morrisjs/morris.css" rel="stylesheet" />
        
        <link href="/public/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />

        <!-- Custom Css -->
        <link href="/public/css/style.css" rel="stylesheet">
    
        <!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
        <link href="/public/css/themes/all-themes.css" rel="stylesheet" />
    </head>

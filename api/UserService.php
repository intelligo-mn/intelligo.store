<?php
    
    require_once '../app/UserController.php';
    
    $username = "";
    
    $password = "";
    
    $email = "";
    
    if(isset($_GET['username'])){
        
        $username = $_GET['username'];
        
    }
    
    if(isset($_GET['password'])){
        
        $password = $_GET['password'];
        
    }
    
    if(isset($_GET['email'])){
        
        $email = $_GET['email'];
        
    }
    
    
    
    $userObject = new UserController();
    
    // Бүртгүүлэх
    
    if(!empty($username) && !empty($password) && !empty($email)){
        
        $hashed_password = md5($password);
        
        $json_registration = $userObject->createUser($username, $hashed_password, $email);
        
        echo json_encode($json_registration);
        
    }
    
    // Нэвтрэх
    
    if(!empty($username) && !empty($password) && empty($email)){
        
        $hashed_password = md5($password);
        
        $json_array = $userObject->loginUsers($username, $hashed_password);
        
        echo json_encode($json_array);
    }
    ?>
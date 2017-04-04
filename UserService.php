<?php
    header('Content-Type: text/plain; charset=utf-8');
    require_once 'app/ProductController.php';
    require_once 'config/security.php';
    
    if(!isset($_GET['accesskey']))
        if (!(new DGLSecure())->generateAccessKey($_GET['accesskey'])) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');
    
    $userObject = new UserController();
    
    if($_GET["state"] == "signin"){
        if (isset($_GET["username"] && isset($_GET["password"])){
            echo json_encode($userObject->signin($username, md5($password)));
        }else if (isset($_GET["fb_id"] && isset($_GET["username"])){
            $email = isset($_GET["email"]) ? $_GET["email"] : null;
            $phone = isset($_GET["phone"]) ? $_GET["phone"] : null;
            $json_array = $userObject->signin($_GET["fb_id"], $_GET["username"], $email, $phone);
            echo json_encode($json_array);
        }
        
    }else if($_GET["state"] == "signup"){
        if (isset($_GET["username"] && isset($_GET["password"]) && isset($_GET["email"]))
            echo json_encode($userObject->create($username, md5($password), $email));
        else if (isset($_GET["fb_id"] && isset($_GET["username"])){
            $email = isset($_GET["email"]) ? $_GET["email"] : null;
            $phone = isset($_GET["phone"]) ? $_GET["phone"] : null;
            $json_array = $userObject->signin($_GET["fb_id"], $_GET["username"], $email, $phone);
            echo json_encode($json_array);
        }
    }else if($_GET["state"] == "update"){

    }else{
        echo "invalid request!!!";
    }
    // Бүртгүүлэх
    if(isset($_GET["username"]) && isset($_GET["password"]) && isset($_GET["email"]))
        //state = [signup, update, signin]

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
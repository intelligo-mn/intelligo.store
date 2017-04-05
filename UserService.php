<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    header('Content-Type: text/plain; charset=utf-8');
    require_once 'app/UserController.php';
    require_once 'config/security.php';
    
    if(!isset($_GET['accesskey']) || !(new DGLSecure())->generateAccessKey($_GET['accesskey'])) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');
    $userObject = new UserController();
    
    if($_GET["state"] == "signin"){
        if (isset($_GET["username"]) && isset($_GET["password"])){
            echo json_encode($userObject->signin($_GET["username"], md5($_GET["password"])));
        }else if (isset($_GET["fb_id"]) && isset($_GET["username"])){
            $email = isset($_GET["email"]) ? $_GET["email"] : null;
            $phone = isset($_GET["phone"]) ? $_GET["phone"] : null;
            $json_array = $userObject->signin($_GET["fb_id"], $_GET["username"], $email, $phone);
            echo json_encode($json_array);
        }
        
    }else if($_GET["state"] == "signup"){
        $username = isset($_GET["username"]) ? $_GET["username"] : null;
        $password = isset($_GET["password"]) ? $_GET["password"] : null;
        $email = isset($_GET["email"]) ? $_GET["email"] : null;
        $mobile = isset($_GET["mobile"]) ? $_GET["mobile"] : null;
        $fb_id = isset($_GET["fb_id"]) ? $_GET["fb_id"] : null;

        $json_array = $userObject->create($username, $password, $email, $mobile, $fb_id);
        echo json_encode($json_array);
    }else if($_GET["state"] == "update"){

    }else{
        echo json_encode(["result" => "invalid request!!!"]);
    }
?>
<?php
date_default_timezone_set("UTC");
  header('Content-Type: text/plain; charset=utf-8');
    require_once 'app/UserController.php';
    require_once 'config/security.php';
    if(!isset($_POST['accesskey'])) 
        die('accesskey required!');
    if(!(new DGLSecure())->generateAccessKey($_POST['accesskey']))
        die('accesskey is wrong!');
    if(!isset($_POST["state"]))
        die('request state required.');
    $userObject = new UserController();
    
    if($_POST["state"] == "signin"){
        if (isset($_POST["username"]) && isset($_POST["password"])){
            echo json_encode($userObject->signin($_POST["username"], md5($_POST["password"])));
        }else if (isset($_POST["fb_id"]) && isset($_POST["username"])){
            $email = isset($_POST["email"]) ? $_POST["email"] : null;
            $phone = isset($_POST["phone"]) ? $_POST["phone"] : null;
            $json_array = $userObject->signin($_POST["fb_id"], $_POST["username"], $email, $phone);
            echo json_encode($json_array);
        }
        
    }else if($_POST["state"] == "signup"){
        $username = isset($_POST["username"]) ? $_POST["username"] : null;
        $password = isset($_POST["password"]) ? $_POST["password"] : null;
        $email = isset($_POST["email"]) ? $_POST["email"] : null;
        $mobile = isset($_POST["mobile"]) ? $_POST["mobile"] : null;
        $fb_id = isset($_POST["fb_id"]) ? $_POST["fb_id"] : null;

        if ($userObject->isExist($username, $email)){
            $json = array();
            $json['success'] = 0;
            $json['message'] = "user already registered.";       
            echo json_encode($json);    
        }else{
            $json_array = $userObject->create($username, $password, $email, $mobile, $fb_id, savePhoto());
            echo json_encode($json_array);    
        }
        
        
    }else if($_POST["state"] == "update"){

    }else{
        echo json_encode(["result" => "invalid request!!!"]);
    }
    //хадгалсан зурагны зам нэрийг нь буцаах
    function savePhoto(){
        $folder = date("Y-m");
        $target_dir = "../uploads/user_avatars/".$folder."/";
        if(!file_exists($target_dir))
            mkdir($target_dir, 0777, true);
            
            $target_dir = $target_dir . basename($_FILES["file"]["name"]);
            $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : "";  
            return basename($_FILES["file"]["name"]);
    }
?>
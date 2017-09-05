<?php
date_default_timezone_set("UTC");
  header('Content-Type: application/json; charset=utf-8');
    
    include_once $_SERVER["DOCUMENT_ROOT"]."/app/Controllers/UserController.php";


    // if(!isset($_POST['accesskey'])) 
    //     die('accesskey required!');
    // if(!(new AppBaseSecure())->generateAccessKey($_POST['accesskey']))
    //     die('accesskey is wrong!');
    // if(!isset($_POST["state"]))
    //     die('request state required.');
    $userObject = new UserController();
    
	if(isset($_POST['btnLogin'])){
	
	
		$currentTime = time() + 25200;
		$expired = 3600;
		
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		if(!empty($username) && !empty($password)){
	        $userObject->login($username, md5($password));
	        var_dump($userObject);
		}
	}
	
    // if($_POST["state"] == "signin"){
    //     if (isset($_POST["username"]) && isset($_POST["password"])){
    //         echo json_encode($userObject->signin($_POST["username"], md5($_POST["password"])));
    //     }else if (isset($_POST["fb_id"])){
    //         $json_array = $userObject->signinByFB($_POST["fb_id"]);
    //         echo json_encode($json_array);
    //     }
        
    // } else if($_POST["state"] == "signup"){
    //     $username = isset($_POST["username"]) ? $_POST["username"] : null;
    //     $password = isset($_POST["password"]) ? $_POST["password"] : null;
    //     $email = isset($_POST["email"]) ? $_POST["email"] : null;
    //     $mobile = isset($_POST["mobile"]) ? $_POST["mobile"] : null;
    //     $fb_id = isset($_POST["fb_id"]) ? $_POST["fb_id"] : null;

    //     $pass = md5($password);

    //     $isRegistered = false;
    //     if($fb_id!=null)
    //         $isRegistered = $userObject->isRegisteredByFB($fb_id);

    //     if ($userObject->isExist($username, $email) || $isRegistered){
    //         $json = array();
    //         $json['success'] = 0;
    //         $json['message'] = "энэ хэрэгдэгч аль хэдийн бүртгэгдсэн байна.";  
    //         $json['resultFB'] = $isRegistered;
    //         echo json_encode($json);    
    //     } else {
    //         $json_array = $userObject->create($username, $pass, $email, $mobile, $fb_id, savePhoto());
    //         echo json_encode($json_array);    
    //     }
        
    // } else if($_POST["state"] == "update"){
    //     echo json_encode($userObject->update($_POST['userId'], $_POST['username'], $_POST['email'], $_POST['mobile'], $_POST['changePhoto'] == 'true' ? savePhoto() : ""));
    // } else 
    // {
    //     echo json_encode(["result" => "invalid request!!!"]);
    // }
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
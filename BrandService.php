<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    header('Content-Type: text/plain; charset=utf-8');
 
    require_once 'app/BrandController.php';
    require_once 'config/security.php';
    if(!isset($_GET['accesskey']) && (new DGLSecure())->generateAccessKey($_GET["accesskey"])) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');

    $state = $_GET["state"];
    $name = "";
    $description = "";
    $user_id = "";

    //ui гэдэг нь User_id
    if(isset($_GET['name']) && isset($_GET['ui']) && isset($_GET['description'])){
        $name = $_GET['name'];
        $description = $_GET['description'];
        $user_id = $_GET["ui"];
    }

    $brandObject = new BrandController();
    
    if($state == "c" && !empty($name) && !empty($description) && !empty($user_id))
        echo json_encode($brandObject->create($name, $description, $user_id));
    else if($state == "u" && !empty($name) && !empty($description) && !empty($user_id))
        echo json_encode($brandObject->update($name, $description, $user_id));
    else if ($state == "r"){
        echo json_encode($brandObject->getAll());
    }else 
     echo json_encode(["result" => "invalid request!!!"]);

?>

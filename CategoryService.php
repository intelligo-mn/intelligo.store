<?php
    header('Content-Type: text/plain; charset=utf-8');
 
    require_once 'config/security.php';
    if(!isset($_GET['accesskey']) && (new DGLSecure())->generateAccessKey($_GET["accesskey"])) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');

   
?>

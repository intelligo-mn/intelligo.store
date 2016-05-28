<?php

    $servername = getenv('IP');
    $username = 'modu';
    $password = "modu";
    $database = "modu";
    $dbport = 3306;

    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
   
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    echo "<script>console.log('Connected successfully');</script>";
    mysqli_set_charset($db,"utf8");
    
?>
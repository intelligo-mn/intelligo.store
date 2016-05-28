<?php

    $servername = getenv('IP');
    $username = 'modu';
    $password = "modu";
    $database = "modu";
    $dbport = 3306;

    $db = new mysqli($servername, $username, $password, $database, $dbport);
    
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    echo "Connected successfully (".$db->host_info.")";
    
?>
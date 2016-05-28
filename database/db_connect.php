<?php

    // $servername = getenv('IP');
    // $username = 'modu';
    // $password = "modu";
    // $database = "modu";
    // $dbport = 3306;

    // // Create connection
    // $db = new mysqli($servername, $username, $password, $database, $dbport);
   
    // // Check connection
    // if ($db->connect_error) {
    //     die("Connection failed: " . $db->connect_error);
    // } 
    // echo "<script>console.log('Connected successfully');</script>";
    // mysqli_set_charset($db,"utf8");
    
class Database {
 
    function __construct() {
        $this->connect();
    }
 
    function __destruct() {
        $this->close();
    }
    
    function connect() {
        require_once __DIR__ . '/db_config.php';
 
        $con = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT) or die(mysqli_error());
 
        return $con;
    }
    function close() {
        mysqli_close();
    }
}
    
?>
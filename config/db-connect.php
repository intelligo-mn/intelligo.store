<?php
    
include_once 'db-config.php';

class DbConnect{
    
    private $connect;
    
    public function __construct(){
        
        $this->connect = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
        
        if (mysqli_connect_errno($this->connect)){
            echo "Unable to connect to MySQL Database: " . mysqli_connect_error();
        }
        $this->connect->set_charset('utf8mb4');       // object oriented style
        mysqli_set_charset($this->connect, 'utf8mb4');  // procedural style
    }
    
    public function getDb(){
        return $this->connect;
    }
}
?>
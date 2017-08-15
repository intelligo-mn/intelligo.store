<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');
 
include_once '../config/db-connect.php';

class OrgTypeController{
    
    private $db;
    
    private $db_table = "org_type";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    public function getAll () {
        $sql_query = "SELECT * 
            FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());
        $org_types = array();
        while($org_type = $result->fetch_assoc()) {
            $org_types[] = $org_type;
        }
        return $org_types;
        
    }
}
?>
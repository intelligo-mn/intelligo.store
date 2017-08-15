<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');
 
include_once '../config/db-connect.php';

class OrgController{
    
    private $db;
    
    private $db_table = "organization";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    public function getAll () {
        $sql_query = "SELECT * 
            FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());
        $organizations = array();
        while($organization = $result->fetch_assoc()) {
            $organizations[] = $organization;
        }
        return $organizations;
        
    }
    public function getOrgId($id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE org_id = ".$id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());
        $organizations = array();
        while($organization = $result->fetch_assoc()) {
            $organizations[] = $organization;
        }
        return $organizations;
    }
}
?>
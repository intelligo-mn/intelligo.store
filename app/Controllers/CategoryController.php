<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');
 
include_once '../config/db-connect.php';

class CategoryController{
    
    private $db;
    
    private $db_table = "project_category";
    
    public function __construct(){
        $this->db = new DbConnect();
    }

    public function getAll () {
        $sql_query = "SELECT * 
            FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $categories = array();
        while($category = $result->fetch_assoc()) {
            $categories[] = $category;
        }

        return $categories;
        
    }

}
?>
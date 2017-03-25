<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/plain; charset=utf-8');
 
include_once 'config/db-connect.php';

class ProjectController{
    
    private $db;
    
    private $db_table = "project";
    
    public function __construct(){
        $this->db = new DbConnect();
    }

    public function getAll () {
        $sql_query = "SELECT * 
             FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $projects = array();
        while($project = $result->fetch_assoc()) {
            $projects[] = $project;
        }

        return $projects;
        
    }

}
?>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/plain; charset=utf-8');    
include_once 'config/db-connect.php';

class UserController{
    
    private $db;
    
    private $db_table = "user";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function isExist($username, $email){
        
        $query = "select * from ".$this->db_table." where username = '$username' AND email = '$email'";
        
        $result = mysqli_query($this->db->getDb(), $query);
        
        if(mysqli_num_rows($result) > 0){
            
            mysqli_close($this->db->getDb());
            
            return true;
            
        }
        
        
        return false;
        
    }
    public function create($username, $password, $email){
        
        
        $isExisting = $this->isExist($username, $email);
        
        
        if($isExisting){
            
            $json['success'] = 0;
            $json['message'] = "Алдаа хэрэглэгчийн нэр мэйл хаяг бүртгэлтэй байна";
        }
        
        else{
            $photoPath = $this->savePhoto() ? mysqli_insert_id() : NULL;
            $query = "insert into ".$this->db_table." (`username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, 
              `status`, `email_verification_code`, `".date("Y-m")."`, `$photoPath`, `ip_address`, `created_user_id`, `updated_user_id`, 
              `department_id`, `rank_id`, `position_id`, `aimag_id`, `created_at`, `updated_at`, `type`, `person_reg_number`, 
              `person_profession`, `person_biography`, `person_start_year`, `company_name`, `company_register`, `company_description`, 
              `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, 
              `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, 
              `registered_from_language`, `is_creator`, `is_investor`, `is_idea_owner`, `is_idea_buyer`, `slug`) 

              values ('$username', '$password', '$email', '', '', '', 1, '', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-03-17 00:00:00', '2017-03-17 00:00:00', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$username')";

            $inserted = mysqli_query($this->db->getDb(), $query);
            
            if($inserted == 1){
                
                $json['success'] = 1;
                $json['message'] = "Амжилттай бүртгэгдлээ";
                
            }else{
                
                $json['success'] = 0;
                $json['message'] = "хэрэглэгчийн нэр мэйл хаяг бүртгэлтэй байна";
                
            }
            
            mysqli_close($this->db->getDb());
            
        }
        
        return $json;
        
    }
    
    public function signin($username, $password){
        $query = "select * from ".$this->db_table." where username = '$username' AND password = '$password' Limit 1";
        $result = mysqli_query($this->db->getDb(), $query);

        $users = array();
        while($user = $result->fetch_assoc()) {
            $users[] = $user;
        }
        return $users;
    }
    //хэрэглэгчийг id - аар нь авах
    public function getById($id){
        $query = "select * from ".$this->db_table." where id=$id";
        echo mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0 ? json_encode(mysqli_query($this->db->getDb(), $query)[0]) : json_encode(["result"=>"error"]);
    }
    //хэрэглэгчийг facebook id - аар нь авах
    public function getByFbId($fb_id){
        $query = "select * from ".$this->db_table." -where fb_id=$fb_id";
        echo mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0 ? json_encode(mysqli_query($this->db->getDb(), $query)[0]) : json_encode(["result"=>"error"]);
    }
    //хадгалсан зурагны зам нэрийг нь буцаах
    private function savePhoto(){
        $target_dir = "../uploads/user_avatars/".date("Y-m");
    $fileUploaded = false;
    
    if(!file_exists($target_dir))
        mkdir($target_dir, 0777, true);
        
        $target_dir = $target_dir . "/" . basename($_FILES["file"]["name"]);
    
        return move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : NULL;  
    }
}
?>
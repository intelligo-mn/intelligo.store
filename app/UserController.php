<?php
    
include_once '../config/db-connect.php';

class UserController{
    
    private $db;
    
    private $db_table = "duser";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function isLoginExist($username, $password){
        
        $query = "select * from ".$this->db_table." where username = '$username' AND password = '$password' Limit 1";
        
        $result = mysqli_query($this->db->getDb(), $query);
        
        if(mysqli_num_rows($result) > 0){
            
            mysqli_close($this->db->getDb());
            
            
            return $result;
            
        }
        
        mysqli_close($this->db->getDb());
        
        return null;
        
    }
    
    public function isEmailUsernameExist($username, $email){
        
        $query = "select * from ".$this->db_table." where username = '$username' AND email = '$email'";
        
        $result = mysqli_query($this->db->getDb(), $query);
        
        if(mysqli_num_rows($result) > 0){
            
            mysqli_close($this->db->getDb());
            
            return true;
            
        }
        
        
        return false;
        
    }
    
    public function isValidEmail($email){
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    
    public function createNewRegisterUser($username, $password, $email){
        
        
        $isExisting = $this->isEmailUsernameExist($username, $email);
        
        
        if($isExisting){
            
            $json['success'] = 0;
            $json['message'] = "Алдаа хэрэглэгчийн нэр мэйл хаяг бүртгэлтэй байна";
        }
        
        else{
            
            $isValid = $this->isValidEmail($email);
                
            $query = "insert into ".$this->db_table." (`username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, 
              `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_user_id`, `updated_user_id`, 
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
    
    public function loginUsers($username, $password){
        
        $json = array();
        
        $canUserLogin = $this->isLoginExist($username, $password);
        
        if($canUserLogin != null){
            
            $json['success'] = $canUserLogin["id"];
            $json['message'] = "Тавтай морилно уу";
            
        }else{
            $json['success'] = 0;
            $json['message'] = "хэрэглэгчийн нэр нууц үг буруу байна";
        }
        return $json;
    }
}
?>
<?php

include ("connect.php");


function getIP() {
    
    $ip = $_SERVER['REMOTE_ADDR'];
    
    if(!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    
    return $ip;
}

function cart () {
    
	global $db;
    
    if(isset($_GET['add_cart'])) {
        
        $ip = getIP();
        
        $pro_id = $_GET['add_cart'];
        
        $check_pro = "select * from cart where user_ip='$ip' and pro_id='$pro_id'";
        
        $run_check = mysqli_query($db, $check_pro);
        
        if(mysqli_num_rows($run_check) > 0) {
            echo "";
        }
        else {
            $insert_pro = "insert into cart (pro_id, user_ip) values('$pro_id','$ip')";
            $run_pro = mysqli_query($db, $insert_pro);
            echo "<script>window.open('index.php', '_self')</script>"; 
        }
    }
}


?>
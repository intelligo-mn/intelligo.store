<?php
	include_once('config/database.php'); 
	
	session_start();
	
	if(isset($_POST['btnLogin'])){
	
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$currentTime = time() + 25200;
		$expired = 3600;
		
		$error = array();
		
		if(empty($username)){
			$error['username'] = "*Хэрэглэгчийн нэр оруулна уу.";
		}
		
		if(empty($password)){
			$error['password'] = "*Нууц үг оруулна уу.";
		}
		
		
		if(!empty($username) && !empty($password)){
			
			$username = strtolower($username);
			
		    $password = hash('sha256',$username.$password);
			
			$sql_query = "SELECT * 
				FROM user 
				WHERE username = ? AND password = ?";
						
			$stmt = $connect->stmt_init();
			if($stmt->prepare($sql_query)) {
				
				$stmt->bind_param('ss', $username, $password);
			
				$stmt->execute();
				$stmt->store_result();
				$num = $stmt->num_rows;
				$stmt->close();
				if($num == 1){
					$_SESSION['user'] = $username;
					$_SESSION['timeout'] = $currentTime + $expired;
					header("location: dashboard.php");
				}else{
					$error['failed'] = "<span class='label label-danger'>Хэрэглэгчийн нэр нууц үг буруу байна!</span>";
				}
			}
			
		}	
	}
	?>

    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);">TECH<b>STAR</b></a>
            <small>TECHSTAR DASHBOARD</small>
        </div>
        <div class="card">
            <div class="body">
                <form id="sign_in" method="POST">
                    <div class="msg">Нэвтрэх хэсэг</div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <center><?php echo isset($error['failed']) ? $error['failed'] : '';?></center>
                        <div class="form-line">
                            <input type="text" class="form-control" name="username" placeholder="Хэрэглэгчийн нэр" required autofocus>
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" class="form-control" name="password" placeholder="Нууц үг" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-8 p-t-5">
                            <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">
                            <label for="rememberme">Намайг сана</label>
                        </div>
                        <div class="col-xs-4">
                            <button class="btn btn-block bg-pink waves-effect" name="btnLogin" type="submit">НЭВТРЭХ</button>
                        </div>
                    </div>
                    <div class="row m-t-15 m-b--20">
                        <div class="col-xs-6">
                            <a href="sign-up.html">БҮРТГҮҮЛЭХ!</a>
                        </div>
                        <div class="col-xs-6 align-right">
                            <a href="forgot-password.html">НУУЦ ҮГ СЭРГЭЭХ?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

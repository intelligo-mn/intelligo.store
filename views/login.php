<?php
	include_once('config/database.php'); 
	
	// start session
	//session_start();
	
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
<div id="login_content" class="col-md-11 login">
  	<div class="col-md-4 col-md-offset-4">
	      <div class="panel panel-default">
			  <div class="panel-heading">
				  <center><h3>Нэвтрэх</h3></center>
				  <center>( DGL Project )</center>
			  </div>
			  <div class="panel-body">
				<center><?php echo isset($error['failed']) ? $error['failed'] : '';?></center>
				<br>
				    <form method="post">
				            <label>Хэрэглэгчийн нэр :</label>
				            <input type="text" name="username" class="form-control" required>
							
							<br>
				            <label>Нууц үг :</label>
				            <input type="password" class="form-control" name="password" required>
							
							<br>
							<button type="submit" name="btnLogin" class="btn btn-primary pull-right">Нэвтрэх</button><br><br>		
				    </form>
				<a href="forget-password.php"><p class="pull-right">Нууц үг сэргээх?</p></a>
			  </div>
			</div>
	</div>
</div>


<?php include_once('config/close_database.php');?>
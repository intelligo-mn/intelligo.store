<?php
	include_once('config/connect.php'); 
?>

<div id="content" class="container col-md-12">
	<?php 
		if(isset($_POST['btnDelete'])){
			if(isset($_GET['id'])){
				$ID = $_GET['id'];
			}else{
				$ID = "";
			}
			
			$sql_query = "DELETE FROM order 
					WHERE ID = ?";
			
			
			$stmt = $connect->stmt_init();
			if($stmt->prepare($sql_query)) {	
				$stmt->bind_param('s', $ID);
				$stmt->execute();
				$delete_result = $stmt->store_result();
				$stmt->close();
			}
			
			if($delete_result){
				header("location: order.php");
			}
		}

		if(isset($_POST['btnNo'])){
			header("location: order.php");
		}


	?>
	<h1>Анхаар</h1>
	<hr />
	<form method="post">
		<p>Энэ өгөгдлийг устгах уу?</p>
		<input type="submit" class="btn btn-primary" value="Тийм" name="btnDelete"/>
		<input type="submit" class="btn btn-danger" value="Буцах" name="btnNo"/>
	</form>
	<div class="separator"> </div>
</div>
			
<?php include_once('config/close_database.php'); ?>
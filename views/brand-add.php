<?php
	include_once('config/database.php'); 
	include_once('app/Controllers/MainController.php'); 
?>
<div id="content" class="container col-md-12">
	<?php 
		if(isset($_POST['btnAdd'])){
			$brand_name = $_POST['brand_name'];
			
			$menu_image = $_FILES['brand_image']['name'];
			$image_error = $_FILES['brand_image']['error'];
			$image_type = $_FILES['brand_image']['type'];
			
			$error = array();
			
			if(empty($brand_name)){
				$error['brand_name'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}
			
			$allowedExts = array("gif", "jpeg", "jpg", "png");
			
			error_reporting(E_ERROR | E_PARSE);
			$extension = end(explode(".", $_FILES["brand_image"]["name"]));
					
			if($image_error > 0){
				$error['brand_image'] = " <span class='label label-danger'>Хуулах боломжгүй байна!!</span>";
			}else if(!(($image_type == "image/gif") || 
				($image_type == "image/jpeg") || 
				($image_type == "image/jpg") || 
				($image_type == "image/x-png") ||
				($image_type == "image/png") || 
				($image_type == "image/pjpeg")) &&
				!(in_array($extension, $allowedExts))){
			
				$error['brand_image'] = " <span class='label label-danger'>Зурагийн төрөл зөвхөн jpg, jpeg, gif, or png!</span>";
			}
			
			if(!empty($brand_name) && empty($error['brand_image'])){
				
				// create random image file name
				$string = '0123456789';
				$file = preg_replace("/\s+/", "_", $_FILES['brand_image']['name']);
				$function = new MainController;
				$menu_image = $function->get_random_string($string, 4)."-".date("Y-m-d").".".$extension;
					
				$upload = move_uploaded_file($_FILES['brand_image']['tmp_name'], 'upload/images/'.$menu_image);
		
				$sql_query = "INSERT INTO brand (brand_name, brand_image)
						VALUES(?, ?)";
				
				$upload_image = 'upload/images/'.$menu_image;
				$stmt = $connect->stmt_init();
				if($stmt->prepare($sql_query)) {	
					$stmt->bind_param('ss', 
								$brand_name, 
								$upload_image
								);
					$stmt->execute();
					$result = $stmt->store_result();
					$stmt->close();
				}
				
				if($result){
					$error['add_brand'] = " <h4><div class='alert alert-success'>
														* Шинэ брэнд амжилттай нэмлээ
														<a href='brand.php'>
														<i class='fa fa-check fa-lg'></i>
														</a></div>
												  </h4>";
				}else{
					$error['add_brand'] = " <span class='label label-danger'>Брэнд нэмэхэд алдаа гарлаа</span>";
				}
			}
			
		}

		if(isset($_POST['btnCancel'])){
			header("location: brand.php");
		}

	?>
	<div class="col-md-12">
		<h1>Брэнд нэмэх</h1>
		<?php echo isset($error['add_brand']) ? $error['add_brand'] : '';?>
		<hr />
	</div>
	
	<div class="col-md-5">
		<form method="post"
			enctype="multipart/form-data">
			<label>Брэнд нэр :</label><?php echo isset($error['brand_name']) ? $error['brand_name'] : '';?>
			<input type="text" class="form-control" name="brand_name"/>
			<br/>
			<label>Зураг :</label><?php echo isset($error['brand_image']) ? $error['brand_image'] : '';?>
			<input type="file" name="brand_image" id="brand_image" />
			<br/>
			<input type="submit" class="btn-primary btn" value="Батлах" name="btnAdd"/>
			<input type="reset" class="btn-warning btn" value="Цэвэрлэх"/>
			<input type="submit" class="btn-danger btn" value="Буцах" name="btnCancel"/>
		</form>
	</div>

	<div class="separator"> </div>
</div>
	
<?php include_once('config/close_database.php'); ?>
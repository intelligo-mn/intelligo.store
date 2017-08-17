<?php
	include_once('config/database.php'); 
	include_once('app/Controllers/MainController.php'); 
?>
<div id="content" class="container col-md-12">
	<?php 
		$sql_query = "SELECT category_id, category_name 
			FROM category 
			ORDER BY category_id ASC";
				
		$stmt_category = $connect->stmt_init();
		if($stmt_category->prepare($sql_query)) {	
			$stmt_category->execute();
			$stmt_category->store_result();
			$stmt_category->bind_result($category_data['category_id'], 
				$category_data['category_name']
				);		
		}
		
		$stmt = $connect->stmt_init();
		if($stmt->prepare($sql_query)) {	
			$stmt->execute();
			$stmt->store_result();
			$stmt->fetch();
			$stmt->close();
		}
			
		//$max_serve = 10;
			
		if(isset($_POST['btnAdd'])){
			$product_name = $_POST['product_name'];
			$category_ID = $_POST['category_id'];
			$price = $_POST['price'];
			$serve_for = $_POST['serve_for'];
			$description = $_POST['description'];
			$quantity = $_POST['quantity'];
				
			$product_image = $_FILES['product_image']['name'];
			$image_error = $_FILES['product_image']['error'];
			$image_type = $_FILES['product_image']['type'];
			
				
			$error = array();
			
			if(empty($product_name)){
				
				$error['product_name'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}
				
			if(empty($category_ID)){
				$error['category_id'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}				
				
			if(empty($price)){
				$error['price'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}else if(!is_numeric($price)){
				$error['price'] = " <span class='label label-danger'>Үнэ тоо байна!</span>";
			}

			if(empty($quantity)){
				$error['quantity'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}else if(!is_numeric($quantity)){
				$error['quantity'] = " <span class='label label-danger'>Тоо ширхэг!</span>";
			}
				
			if(empty($serve_for)){
				$error['serve_for'] = " <span class='label label-danger'>Сонгоно уу</span>";
			}			

			if(empty($description)){
				$error['description'] = " <span class='label label-danger'>Хоосон байна!</span>";
			}
			
			$allowedExts = array("gif", "jpeg", "jpg", "png");
			
			error_reporting(E_ERROR | E_PARSE);
			$extension = end(explode(".", $_FILES["product_image"]["name"]));
					
			if($image_error > 0){
				$error['product_image'] = " <span class='label label-danger'>Хуулах боломгүй байна!</span>";
			}else if(!(($image_type == "image/gif") || 
				($image_type == "image/jpeg") || 
				($image_type == "image/jpg") || 
				($image_type == "image/x-png") ||
				($image_type == "image/png") || 
				($image_type == "image/pjpeg")) &&
				!(in_array($extension, $allowedExts))){
			
				$error['product_image'] = " <span class='label label-danger'>Зургын өргөтгөл зөвхөн jpg, jpeg, gif, png!</span>";
			}
				
			if(!empty($product_name) && !empty($category_ID) && !empty($price) && is_numeric($price) &&
				!empty($serve_for) && empty($error['product_image']) && !empty($description) && !empty($quantity) && is_numeric($quantity)){
				
				$string = '0123456789';
				$file = preg_replace("/\s+/", "_", $_FILES['product_image']['name']);
				$function = new MainController;
				$product_image = $function->get_random_string($string, 4)."-".date("Y-m-d").".".$extension;
					
				$upload = move_uploaded_file($_FILES['product_image']['tmp_name'], 'upload/images/'.$product_image);
		
				$sql_query = "INSERT INTO product (product_name, category_id, price, serve_for, product_image, description, quantity)
						VALUES(?, ?, ?, ?, ?, ?, ?)";
						
				$upload_image = 'upload/images/'.$product_image;
				$stmt = $connect->stmt_init();
				if($stmt->prepare($sql_query)) {	
					// Bind your variables to replace the ?s
					$stmt->bind_param('sssssss', 
								$product_name, 
								$category_ID, 
								$price, 
								$serve_for, 
								$upload_image,
								$description,
								$quantity
								);
					// Execute query
					$stmt->execute();
					// store result 
					$result = $stmt->store_result();
					$stmt->close();
				}
				
				if($result){
					$error['add_product'] = " <span class='label label-primary'>Амжилттай нэмлээ</span>";
				}else {
					$error['add_product'] = " <span class='label label-danger'>Алдаа</span>";
				}
			}	
		}
	?>
	<div class="col-md-12">
	<h1>Бараа нэмэх <?php echo isset($error['add_product']) ? $error['add_product'] : '';?></h1>
	<hr />
	</div>

	<div class="col-md-12">
	
	<form method="post" enctype="multipart/form-data">

	<div class="col-md-9">
		<div class="col-md-12">
		<label>Бүтээгдэхүүний нэр :</label><?php echo isset($error['product_name']) ? $error['product_name'] : '';?>
		<input type="text" class="form-control" name="product_name"/>
		</div>
	    <div class="col-md-3">
	    <br>
	    <label>Үнэ (<?php echo $currency;?>) :</label><?php echo isset($error['price']) ? $error['price']:'';?>
		<input type="text" class="form-control" name="price"/>
		<br/>

		<label>Тоо :</label><?php echo isset($error['quantity']) ? $error['quantity']:'';?>
		<input type="text" class="form-control" name="quantity"/>
		<br/>
	    
	    <label>Статус :</label><?php echo isset($error['serve_for']) ? $error['serve_for'] : '';?>
		<select name="serve_for" class="form-control">
			<option>Available</option>
			<option>Sold Out</option>
		</select>
		<br/>

	    <label>Ангилал :</label><?php echo isset($error['category_id']) ? $error['category_id'] : '';?>
		<select name="category_id" class="form-control">
			<?php while($stmt_category->fetch()){ ?>
				<option value="<?php echo $category_data['category_id']; ?>"><?php echo $category_data['category_name']; ?></option>
			<?php } ?>
		</select>
		
		<br/>
		<label>Зураг :</label><?php echo isset($error['product_image']) ? $error['product_image'] : '';?>
		<input type="file" name="product_image" id="product_image"/>
		</div>

		<div class="col-md-9">
		<br>
		<label>Тайлбар :</label><?php echo isset($error['description']) ? $error['description'] : '';?>
		<textarea name="description" id="description" class="form-control" rows="16"></textarea>
		<script type="text/javascript" src="public/js/ckeditor/ckeditor.js"></script>
		<script type="text/javascript">                        
            CKEDITOR.replace( 'description' );
        </script>
		</div>
	</div>
	
	<br/>
	<div class="col-md-3">
		<div class="panel panel-default">
			<div class="panel-heading">Нэмэх</div>
				<div class="panel-body">
					<input type="submit" class="btn-primary btn" value="Нэмэх" name="btnAdd" />&nbsp;
					<input type="reset" class="btn-danger btn" value="Цэвэрлэх"/>
				</div>
		</div>
	</div>
	</form>
	</div>	
	<div class="separator"> </div>
</div>
			

<!DOCTYPE html>
<?php 
	include ("include/database.php");
?>

<html>
<head>

	<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
	<script>tinymce.init({ selector:'textarea' });</script>
	<title> </title>
</head>
<body>
	<form action="add.php" method="post" enctype="multipart/form-data">		
		<table align="center" width="1000" border="1">
			<tr>
				<td><h2>Бараа нэмэх</h2></td>
			</tr>
			<tr>
				<td>Барааны нэр:</td>
				<td><input type="text" name="product_title"/></td>
			</tr>
			<tr>
				<td>Барааны категор:</td>
				<td>
					<select name="product_cat">
						<option></option>
						<?php

							$get_cats = "select * from category";

							$run_cats = mysqli_query($db, $get_cats);

							while ($row_cats=mysqli_fetch_array($run_cats)) {
								
								$cat_id = $row_cats['cat_id'];
								$cat_title = $row_cats['cat_title'];

								echo "<option value='$cat_id'>$cat_title</option>";

							}
						?>
					</select>
				</td>
			</tr>
			<tr>
				<td>Барааны брэнд:</td>
				<td>
					<select name="product_brand">
						<option></option>
						<?php

							$get_brands = "select * from brands";

							$run_brands = mysqli_query($db, $get_brands);

							while ($row_brands=mysqli_fetch_array($run_brands)) {
								
								$brand_id = $row_brands['brand_id'];
								$brand_title = $row_brands['brand_title'];

								echo "<option value='$brand_id'>$brand_title</option>";

							}

						?>
					</select>
				</td>
			</tr>
			<tr>
				<td>Барааны зураг:</td>
				<td><input type="file" name="product_image"/></td>
			</tr>
			<tr>
				<td>Барааны үнэ:</td>
				<td><input type="text" name="product_price"/></td>
			</tr>
			<tr>
				<td>Барааны тайлбар:</td>
				<td><textarea name="product_desc" rows="20" cols="10"></textarea>	</td>
			</tr>
			<tr>
				<td>Барааны түлхүүр үг:</td>
				<td><input type="text" name="product_keywords"/></td>
			</tr>
			<tr>
				<td><input type="submit" name="insert_post"/></td>
			</tr>
		</table>
	</form>
</body>
</html>

<?php
	if (isset($_POST['insert_post'])) {
		
		$product_title = $_POST['product_title'];
		$product_cat = $_POST['product_cat'];
		$product_brand = $_POST['product_brand'];
		$product_price = $_POST['product_price'];
		$product_desc = $_POST['product_desc'];
		$product_keywords = $_POST['product_keywords'];

		$product_image = $_FILES['product_image']['name'];
		$product_image_tmp = $_FILES['product_image']['tmp_name'];

		move_uploaded_file($product_image_tmp, "uploads/$product_image");

		echo $insert_product = "insert into product 
		(product_cat, product_brand, product_title, product_price, product_desc, product_image, product_keywords) values
		('$product_cat', '$product_brand', $product_title, '$product_price', '$product_desc', '$product_image', '$product_keywords')";
	
		$insert_pro = mysqli_query($db, $insert_product);

		if ($insert_pro) {
			echo "<script>alert('Амжилттай нэмлээ');</script>";
			echo "<script>window.open('add.php','_self')</script>";
		} else {

			echo "<script>alert('Алдаа');</script>";
		}
	}
?>
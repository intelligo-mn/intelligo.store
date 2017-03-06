<?php
	include_once('config/database.php'); 
	include_once('app/functions.php'); 
?>

<div id="content" class="container col-md-12">
	<?php 
		
		$function = new functions;
		
		$data = array();
		
		if(isset($_GET['keyword'])){	
		
			$keyword = $function->sanitize($_GET['keyword']);
			$bind_keyword = "%".$keyword."%";
		}else{
			$keyword = "";
			$bind_keyword = $keyword;
		}
		
		
		$sql_query = "SELECT Value 
				FROM tbl_setting 
				WHERE Variable = 'Currency'";
		
		$stmt = $connect->stmt_init();
		if($stmt->prepare($sql_query)) {	
			// Execute query
			$stmt->execute();
			// store result 
			$stmt->store_result();
			$stmt->bind_result($currency);
			$stmt->fetch();
			$stmt->close();
		}	
		
		
		if(empty($keyword)){
			$sql_query = "SELECT Menu_ID, Menu_name, Category_name, Price, Serve_for, Menu_image, Quantity 
					FROM tbl_menu m, tbl_category c
					WHERE m.Category_ID = c.Category_ID  
					ORDER BY m.Menu_ID DESC";
		}else{
			$sql_query = "SELECT Menu_ID, Menu_name, Category_name, Price, Serve_for, Menu_image, Quantity  
					FROM tbl_menu m, tbl_category c
					WHERE m.Category_ID = c.Category_ID AND Menu_name LIKE ? 
					ORDER BY m.Menu_ID DESC";
		}
		
		$stmt = $connect->stmt_init();
		if($stmt->prepare($sql_query)) {	
		
			if(!empty($keyword)){
				$stmt->bind_param('s', $bind_keyword);
			}
		
			$stmt->execute();
		
			$stmt->store_result();
			$stmt->bind_result($data['Menu_ID'], 
					$data['Menu_name'], 
					$data['Category_name'],
					$data['Price'], 
					$data['Serve_for'],
					$data['Menu_image'],
					$data['Quantity']
					);
					
		
			$total_records = $stmt->num_rows;
		}
		
		// check page parameter
		if(isset($_GET['page'])){
			$page = $_GET['page'];
		}else{
			$page = 1;
		}
		
		// number of data that will be display per page		
		$offset = 10;
						
		//lets calculate the LIMIT for SQL, and save it $from
		if ($page){
			$from 	= ($page * $offset) - $offset;
		}else{
			//if nothing was given in page request, lets load the first page
			$from = 0;	
		}
		
		// get all data from reservation table
		if(empty($keyword)){
			$sql_query = "SELECT Menu_ID, Menu_name, Category_name, Price, Serve_for, Menu_image, Quantity  
					FROM tbl_menu m, tbl_category c
					WHERE m.Category_ID = c.Category_ID  
					ORDER BY m.Menu_ID DESC LIMIT ?, ?";
		}else{
			$sql_query = "SELECT Menu_ID, Menu_name, Category_name, Price, Serve_for, Menu_image, Quantity  
					FROM tbl_menu m, tbl_category c
					WHERE m.Category_ID = c.Category_ID AND Menu_name LIKE ? 
					ORDER BY m.Menu_ID DESC LIMIT ?, ?";
		}
		
		$stmt_paging = $connect->stmt_init();
		if($stmt_paging ->prepare($sql_query)) {
			// Bind your variables to replace the ?s
			if(empty($keyword)){
				$stmt_paging ->bind_param('ss', $from, $offset);
			}else{
				$stmt_paging ->bind_param('sss', $bind_keyword, $from, $offset);
			}
			// Execute query
			$stmt_paging ->execute();
			// store result 
			$stmt_paging ->store_result();
			
			$stmt_paging->bind_result($data['Menu_ID'], 
					$data['Menu_name'], 
					$data['Category_name'],
					$data['Price'], 
					$data['Serve_for'],
					$data['Menu_image'],
					$data['Quantity']
					);
			
			// for paging purpose
			$total_records_paging = $total_records; 
		}

		// if no data on database show "No Reservation is Available"
		if($total_records_paging == 0){
	
	?>
	<h1>Menu Not Available
		<a href="add-menu.php">
			<button class="btn btn-danger">Add New Menu</button>
		</a>
	</h1>
	<hr />
	
	<?php 
		// otherwise, show data
		}else{
			$row_number = $from + 1;
	?>
	<div class="col-md-12">
		<h1>
			Menu List 
			<a href="add-menu.php">
				<button class="btn btn-danger">Add New Menu</button>
			</a>
			<hr/>
		</h1>

	
	</div>
	<!-- search form -->
	<form class="list_header" method="get">
	<div class="col-md-12">
		<p class="pholder">Search by Name : </p>
	</div>

	<div class="col-md-3">
		<input type="text" class="form-control" name="keyword" />
	</div>
	<br>
		&nbsp;&nbsp;&nbsp;
		<input type="submit" class="btn btn-primary" name="btnSearch" value="Search" />
	</form>
	<!-- end of search form -->
	<br/>
	<div class="col-md-12">
	<div class="table-responsive">
	<table class='table table-hover table-condensed table-bordered'>
		<tr class="success">
			<th>Name</th>
			<th>Image</th>
			<th>Status</th>
			<th>Stock</th>
			<th>Price</th>
			<th>Category</th>
			<th>Action</th>
		</tr>
	<?php 
		// get all data using while loop
		while ($stmt_paging->fetch()){ ?>
		<tr>
			<td><?php echo $data['Menu_name'];?></td>
			<td width="10%"><img src="<?php echo $data['Menu_image']; ?>" width="60" height="40"/></td>
			<td><?php echo $data['Serve_for'];?></td>
			<td><?php echo $data['Quantity'];?></td>
			<td><?php echo $data['Price']." ".$currency;?></td>
			<td width="15%"><?php echo $data['Category_name'];?></td>
			<td width="15%">
				<a href="menu-detail.php?id=<?php echo $data['Menu_ID'];?>">
					Харах
				</a>&nbsp;

				<a href="edit-menu.php?id=<?php echo $data['Menu_ID'];?>">
					Засах
				</a>&nbsp;

				<a href="delete-menu.php?id=<?php echo $data['Menu_ID'];?>">
					Устгах
				</a>
			</td>
		</tr>
	<?php } }?>
	</table>
	</div>
	</div>

	<div class="col-md-12">
	<h4>
		<?php 
			
			$function->doPages($offset, 'menu.php', '', $total_records, $keyword);
		?>
	</h4>
	</div>
	
	<div class="separator"> </div>
</div> 
<?php 
	$stmt->close();
	include_once('config/close_database.php'); ?>
					
				
<?php
require_once("../comments/inc/config.php"); 
include 'inc/header.php';


if(isset($_GET['commentedit2'])){

$yorumid=$_POST['yorumid'];
$yorumicerik=tirnak_replace($_POST['yorumicerik']);

 $dbpdo->exec("UpDate yorumlar Set yorum = '$yorumicerik' where id like '$yorumid'");
header("Location: comments.php?comment=$yorumid");

exit();
}

if(isset($_GET['deletecomment'])){

	$yorumid=$_GET['deletecomment'];
	$don=$_GET['don'];

	$dbpdo->exec("DELETE FROM yorumlar where id = '$yorumid'");
	$dbpdo->exec("DELETE FROM begen where icerikid = '$yorumid' and begenitip='yorum'");
	$dbpdo->exec("DELETE FROM sikayet where icerikid = '$yorumid' ");

	if ($don=="unapproved"){
	header("Location: comments.php?unapproved");
		
	}elseif ($don=="reports"){
	header("Location: reports.php");
		
	}else{
		header("Location: comments.php");
		
	
	}

exit();
}
if(isset($_GET['approve'])){

	$yorumid=$_GET['approve'];

	$dbpdo->exec("UpDate yorumlar Set onay = '1' where id = '$yorumid'");
	header("Location: comments.php?unapproved");

exit();
}


?>
<div class="main">
	
	<div class="main-inner">

	    <div class="container">
		<div class="page-header">
		<h2 class="pull-left">
						  <i class="fa fa-comments red"></i>
						  <?php if(isset($_GET['unapproved'])){ ?>
						  <span>Unapproved Comments (<?php echo $dbpdo->query("select id from yorumlar where onay = '0' ")->rowCount(); ?>)</span>
						  <?php }else{ ?>
						  <span>Comments (<a href="?unapproved"><font color="green"><?php echo $dbpdo->query("select id from yorumlar where onay = '0' ")->rowCount(); ?> Unapproved</font></a>)</span>
						  
						  <?php } ?>
		
		</h2> 
		  <div class="pull-right">

		
					  <div class="btn-group">
					  <a class="btn btn-primary" href="#"><i class="icon-user icon-white"></i><?php if(isset($_GET['bysite'])){ echo $_GET['bysite']; }else{ echo 'All'; } ?></a>
					  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
					  <ul class="dropdown-menu">
					  <?php if(isset($_GET['bysite'])){ 
					
					  echo '<li><a href="comments.php"> All</a></li>';
								
					  
					  } ?>
					  	<?php
							$sites="";
							foreach(explode(",", $db_allowedsites) as $line){
								if($line>""){

								$line = str_replace("http://", "", 	$line);
								$line = str_replace("https://", "", 	$line);
								echo '<li><a href="?bysite='.$line.'"> '.$line.'</a></li>';
								}
								
							} 				
						?>
		
					 
					  </ul>
					</div>
                                         

		</div>
		</div>
<div class="clearfix"></div>
<?php if(isset($_GET['comment'])){

		$yorumid=$_GET['comment'];

	$yeniko  = $dbpdo->query("select * from yorumlar where id = '$yorumid'");

	if($yeniko = $yeniko->fetch()){
		$yorum=temizle_replace($yeniko["yorum"]);
		$ekleyen=$yeniko["ekleyen"];
		$tarih=$yeniko["tarih"];
		$icerikid=$yeniko["icerikid"];
		$feedtip=$yeniko["tip"];

	}else{
		echo "Not found this comment.";
		exit();
	}

	$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id = '$ekleyen'");
	if($yeni = $rsqa->fetch()){
	
	$kulladi=$yeni["kulladi"];
	$icon=$yeni["icon"];
	$seolinki=$yeni["seolinki"];
	}
	$orjorbas="";
							
		$iconne=resimcreate($icon,"s","member/avatar");					
			?>
			
		<div class="row">
			<div class="span8">
					
					<div class="widget">
							
						<div class="widget-header">
							<i class="fa fa-comment"></i>
							<h3>Comment ID: <?php echo $yorumid ?></h3>
						</div> <!-- /widget-header -->
						
						<div class="widget-content">
							
						
							
				
			<form action="?commentedit2" method="post" enctype="multipart/form-data" >
			<input class="input-style addon" name="yorumid" id="yorumid" type="hidden" value="<?php echo $yorumid ?>" style="width:350px">
			<div class="form-group clear">
				<label class="lab">User</label>
				
				<a href="users.php?user=<?php echo $seolinki ?>"><img src="<?php echo $iconne ?>" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;"><?php echo $kulladi ?></b><br><font size=2><?php echo timeConvert($tarih) ?></font></a>
				
				
				<div class="clear"> </div>
			</div>	

		<br>
		<br>
		
			<div class="form-group clear">
				<label class="lab">Comment</label>
				
				
				<textarea name="yorumicerik"  class="inputug" style="width:700px;height:217px;"><?php echo $yorum ?></textarea>
				<div class="clear"> </div>
			</div>
			
			

			<div class="postgo_section">
				<button class="btn btn-primary " type="submit"><i class="fa fa-save"></i> Edit</button>
				<a class="btn" href="comments.php" type="submit">Cancel</a>
				<a class='btn btn-danger ' style="float:right" onclick='return confirm("Do you realy want this?");' title='Delete Comment & Report' href='?deletecomment=<?php echo $yorumid ?>&don=comments'><i class='fa fa-remove-sign'></i> Delete</a>
			</div>
			</form>
			
					</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->	
					
			 </div>
			<div class="span4">
				<div class="widget">
							
					<div class="widget-header">
						<i class="fa fa-thumbs-up"></i>
						<h3>Who Likes: #<?php echo $yorumid ?></h3>
					</div> <!-- /widget-header -->
						
					<div class="widget-content">
						
								<?php
								$kkkl=0;
	$yeniko  = $dbpdo->query("select * from begen where icerikid = '$yorumid' and tiplike='like' limit 15");
	while($yenikoa = $yeniko->fetch()){
		
	$kulladi=$yenikoa["kulladi"];
	$tarih=$yenikoa["tarih"];

		$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id = '$kulladi'");
		if($yeni = $rsqa->fetch()){
		
		$kulladi=$yeni["kulladi"];
		$icon=$yeni["icon"];
		$seolinki=$yeni["seolinki"];
		$iconne=resimcreate($icon,"s","member/avatar");		
		
		echo '<a href="users.php?user='.$seolinki.'"><img src="'.$iconne.'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">'.$kulladi.'</b><br><font size=2 color=#ccc>'.timeConvert($tarih).' </font></a><div class="clearfix"></div>';
		}
		$kkkl=1;
	}
	if($kkkl==0){
		echo 'Nothing to see here';
		
	}
		?>
						
					</div> <!-- /widget-content -->
							
				</div> <!-- /widget -->					
				<div class="widget">
							
					<div class="widget-header">
						<i class="fa fa-thumbs-down"></i>
						<h3>Who Unlikes: #<?php echo $yorumid ?> </h3>
					</div> <!-- /widget-header -->
						
					<div class="widget-content">
						
										<?php 
										$kkkl=0;
	$yeniko  = $dbpdo->query("select * from begen where icerikid = '$yorumid' and tiplike='unlike' limit 15");
	while($yenikof = $yeniko->fetch()){
	$kulladi=$yenikof["kulladi"];
	$tarih=$yenikof["tarih"];

		$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id = '$kulladi'");
		if($yeni = $rsqa->fetch()){
		
		$kulladi=$yeni["kulladi"];
		$icon=$yeni["icon"];
		$seolinki=$yeni["seolinki"];
		$iconne=resimcreate($icon,"s","member/avatar");		
		
		echo '<a href="users.php?user='.$seolinki.'"><img src="'.$iconne.'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">'.$kulladi.'</b><br><font size=2 color=#ccc>'.timeConvert($tarih).' </font></a><div class="clearfix"></div>
				';
		}
	$kkkl=1;
	}
	if($kkkl==0){
		echo 'Nothing to see here';
		
	}
		?>
						
					</div> <!-- /widget-content -->
							
				</div> <!-- /widget -->		
					
				<div class="widget">
							
					<div class="widget-header">
						<i class="fa fa-flag"></i>
						<h3>Who Reported: #<?php echo $yorumid ?></h3>
					</div> <!-- /widget-header -->
						
					<div class="widget-content">
						
										<?php 
										$kkkl=0;
	$yeniko  = $dbpdo->query("select * from sikayet where icerikid = '$yorumid' limit 15");
	while($yenikof = $yeniko->fetch()){
	$gonderen=$yenikof["gonderen"];
	$tarih=$yenikof["tarih"];

		$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id = '$gonderen'");
		if($yeni = $rsqa->fetch()){
		
		$kulladi=$yeni["kulladi"];
		$icon=$yeni["icon"];
		$seolinki=$yeni["seolinki"];
		$iconne=resimcreate($icon,"s","member/avatar");		
		
		echo '<a href="users.php?user='.$seolinki.'"><img src="'.$iconne.'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">'.$kulladi.'</b><br><font size=2 color=#ccc>'.timeConvert($tarih).' </font></a><div class="clearfix"></div>
				';
		}
	$kkkl=1;
	}
	if($kkkl==0){
		echo 'Nothing to see here';
		
	}
		?>
						
					</div> <!-- /widget-content -->
							
				</div> <!-- /widget -->	
			</div>
		</div>	

		<?php }else{ ?>
		
		
	      <div class="row">
	      	
	      	<div class="span12">
	      		
	    
		
			<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" >
					<thead>
						<tr>
						
						<th width="1%" style="text-align:left">#</th>
						<th width="25%" style="text-align:left">By</th>	
						<th width="14%" style="text-align:left">Identifier</th>	
						<th width="40%">Comment</th>
						<th width="20%" style="text-align:center">Setting</th>
						</tr>
					</thead>

					<tfoot>
						<tr>
							
						<th width="1%" style="text-align:left">#</th>
						<th width="25%" style="text-align:left">By</th>	
						<th width="14%" style="text-align:left">Identifier</th>	
						<th width="40%">Comment</th>
						<th width="20%">Setting</th>
						</tr>
					</tfoot>

					<tbody>
				
					</tbody>
				</table>

		
		    </div> <!-- /spa12 -->
		    
		    	
			<?php } ?>

		    
	      </div> <!-- /row -->
	
	    </div> <!-- /container -->
    
	</div> <!-- /main-inner -->
	    
</div> <!-- /main -->
    



<?php
 include 'inc/footer.php';
?><script type="text/javascript" charset="utf-8">
	
			$(document).ready(function() {
					$('#example').dataTable( {
					 "order": [ 0, 'desc' ], 
					"bProcessing": true,
					"bServerSide": true,
					"sAjaxSource": "posts/comments_processing.php<?php if(isset($_GET['unapproved'])){ echo '?unapproved'; if(isset($_GET['bysite'])){ echo '&bysite='.$_GET['bysite']; } }elseif(isset($_GET['bysite'])){ echo '?bysite='.$_GET['bysite']; }elseif(isset($_GET['onlyreplies'])){ echo '?onlyreplies'; } ?>",
					"bPaginate":true, 
					"sPaginationType":"full_numbers",
					
					
					"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
						var u_email = aData[7]; // where 4 is the zero-origin column for 2D
						var u_name = aData[6]; // where 4 is the zero-origin column for 2D
						var yorum = aData[5]; // where 4 is the zero-origin column for 2D
						var ekleyen = aData[1]; // where 4 is the zero-origin column for 2D
						var tip = aData[2]; // where 4 is the zero-origin column for 2D
						var icerikid = aData[3]; // where 4 is the zero-origin column for 2D
						var tarih = aData[4]; // where 4 is the zero-origin column for 2D
						var id = aData[0]; // where 4 is the zero-origin column for 2D
			
			
							
						$('td:eq(0)', nRow).html('<em class="tarih">'+id+'</em>'); 
						
						if(ekleyen==0){
							$('td:eq(1)', nRow).html('<a href="javascript:void(0);" style="color:#000"><img src="'+resimcreate("","s","member/avatar")+'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">Guest ('+u_name+')</b><br><font size=2 color=#ccc>'+showDate(tarih)+'</font></a>'); 
							
						}else{
											
							var url = "posts/adminposts.php?action=uyebilgicek";
							$.post(url, {id: ekleyen}, function (ajaxCevap) {
						
							var chunks = ajaxCevap.split("|");

							var kulladi=chunks[0]; 
							var icon=resimcreate(chunks[1],"s","member/avatar");
							var seolinki=chunks[2];
							$('td:eq(1)', nRow).html('<a href="users.php?user='+seolinki+'"><img src="'+icon+'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">'+kulladi+'</b><br><font size=2 color=#ccc>'+showDate(tarih)+'</font></a>'); 
							});
						}
						
						if(tip=="yorumcevap" || tip=="yorumcevapyanit"){
						$('td:eq(2)', nRow).html("Reply of <a class='btn' href='?comment="+id+"' style='padding:1px 6px;'>#"+icerikid+"</a> "); 
						}else{
						$('td:eq(2)', nRow).html(icerikid+' <a href="'+tip+'" class="btn" style="padding:1px 6px;" target="_blank"><i class="fa fa-external-link"></i></a>'); 
						}
						
						$('td:eq(3)', nRow).html('<span class="konu" style="color:#999;">'+yorum.substr(0, 155)+'..</span>'); 

						$('td:eq(4)', nRow).attr("style", "text-align:center").html("<?php if(isset($_GET['unapproved'])){ ?><a class='btn btn-success' style='width:10px; margin-right: .5em;' href='?approve="+id+"'><i class='fa fa-check-square-o'></i></a><?php }?><a class='btn btn-primary' style='width:10px; margin-right: .5em;' href='?comment="+id+"'><i class='fa fa-cog'></i></a><a href='#myModal"+id+"' role='button' class='btn btn-success' style='width:10px; margin-right: .5em;' data-toggle='modal'><i class='fa fa-edit'></i></a><div id='myModal"+id+"' class='modal hide fade in' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button> <h3 id='myModalLabel'>Edit Comment : #"+id+"</h3></div> <form action='?commentedit2' method='post' enctype='multipart/form-data'><div class='modal-body'><input class='input-style addon' name='yorumid' id='yorumid' type='hidden' value='"+id+"' style='width:350px'><textarea name='yorumicerik'  class='inputug' style='width:98%;height:217px;'>"+yorum+"</textarea></div> <div class='modal-footer'><button class='btn' data-dismiss='modal' aria-hidden='true'>Close</button><button class='btn btn-primary'>Save changes</button></div></form></div><a class='btn btn-danger' style='width:10px' onclick='return confirm(\"Do you realy want this?\");' href='?deletecomment="+id+"<?php if(isset($_GET['unapproved'])){ echo "&don=unapproved"; }else{ echo "&don=comments"; }?>'><i class='fa fa-remove'></i></a>"); 
						
						return nRow;
						
						}
					
					
				});
			
			});
		</script>	
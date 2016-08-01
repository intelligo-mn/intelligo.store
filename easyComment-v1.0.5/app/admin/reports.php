<?php
require_once("../comments/inc/config.php"); 
include 'inc/header.php';

if(isset($_GET['deletereport'])){

	$reportid=$_GET['deletereport'];
	
	 $dbpdo->exec("DELETE FROM sikayet where id = '$reportid' ");
	header("Location: reports.php");
		
	
exit();
}



?>
<div class="main">
	
	<div class="main-inner">

	    <div class="container">
		<div class="page-header">
		<h2 class="pull-left">
						  <i class="fa fa-flag red"></i>
						  <span>Reports</span>
		</h2> 
		  <div class="pull-right">
						  <ul class="breadcrumb">
							<li>
							  <a href="index.php">
								<i class="fa fa-home"></i>
							  </a>
							</li>
					 
							<li class="separator">
							  <i class="fa fa-angle-right"></i>
							</li>
							<li class="active">Reports</li>
						  </ul>
						</div>
		</div>

		<?php if(isset($_GET['commentedit'])){

		$yorumid=$_GET['commentedit'];

	$yeniko  = $dbpdo->query("select * from yorumlar where id like '$yorumid'")->fetch();
	if(!$yeniko){
	echo "Bu yorum silinmiş zaten.";
	exit();
	}
	$yorum=$yeniko["yorum"];
	$ekleyen=$yeniko["ekleyen"];
	$tarih=$yeniko["tarih"];
	$icerikid=$yeniko["icerikid"];
	$feedtip=$yeniko["tip"];

	$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id like '$ekleyen'");
	if($yeni = $rsqa->fetch()){
	
	$kulladi=$yeni["kulladi"];
	$icon=$yeni["icon"];
	$seolinki=$yeni["seolinki"];
	}
	$orjorbas="";
							
			?>
		<div class="row">
			<div class="span12">
					
					<div class="widget">
							
						<div class="widget-header">
							<i class="fa fa-pushpin"></i>
							<h3>Sample Frequently Asked Questions</h3>
						</div> <!-- /widget-header -->
						
						<div class="widget-content">
							
						
							
				
			<form action="?commentedit2" method="post" enctype="multipart/form-data" >
			<input class="input-style addon" name="yorumid" id="yorumid" type="hidden" value="<?php echo $yorumid ?>" style="width:350px">
			<div class="form-group clear">
				<label class="lab">Gönderen</label>
				
				<a href="uyeler.php?uye=<?php echo $seolinki ?>"><img src="/upload/member/avatar/<?php echo $icon ?>-s.jpg" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;"><?php echo $kulladi ?></b><br><font size=2><?php echo timeConvert($tarih) ?> yazdı</font></a>
				
				
				<div class="clear"> </div>
			</div>	
		
			<div class="form-group clear">
				<label class="lab">Yorum</label>
				
				
				<textarea name="yorumicerik"  class="inputug" style="width:700px;height:217px;"><?php echo $yorum ?></textarea>
				<div class="clear"> </div>
			</div>
			
			

			<div class="postgo_section">
				<button class="btn btn-primary " type="submit"><i class="fa fa-save"></i> Düzenle</button>
				<a class="btn" href="comments.php" type="submit">İptal</a>
			</div>
			</form>
			
					</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->	
					
			 </div>

		</div>	

		<?php }else{ ?>
		
		
	      <div class="row">
	      	
	      	<div class="span12">
	      		
	    
		
			<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
						<th width="5%" style="text-align:left">#</th>
						<th width="30%" style="text-align:left">Reported</th>
						<th width="30%" style="text-align:left">Reporter</th>	
						<th width="20%">Time</th>
						<th width="15%">Settings</th>
						</tr>
					</thead>

					<tfoot>
						<tr>
						<th width="5%" style="text-align:left">#</th>
						<th width="30%" style="text-align:left">Reported</th>	
						<th width="30%" style="text-align:left">Reporter</th>	
						<th width="20%">Time</th>
						<th width="15%">Settings</th>
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
 
 $pagegone="?page=yorum";
?><script type="text/javascript" charset="utf-8">
	
			$(document).ready(function() {
					$('#example').dataTable( {
					 "order": [ 1, 'desc' ], 
					"bProcessing": true,
					"bServerSide": true,
					"sAjaxSource": "posts/reports_processing.php<?php echo $pagegone ?>",
					"bPaginate":true, 
					"sPaginationType":"full_numbers",
					
					
					"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
						
						var raporid = aData[0]; 
						var icerikid = aData[3]; 
						var uyeid = aData[1]; 
						var tarih = showDate(aData[2]); 
				
				
						$('td:eq(0)', nRow).html('<em class="tarih">#'+aData[0]+'</em>'); 
						
						$('td:eq(1)', nRow).html('<a href=comments.php?comment='+icerikid+' target=_blank>Comment #'+icerikid+'</a>'); 
						
					var url = "posts/adminposts.php?action=uyebilgicek";
					$.post(url, {id: uyeid}, function (ajaxCevap) {
						var chunks = ajaxCevap.split("|");

						var kulladi=chunks[0]; 
						var icon=resimcreate(chunks[1],"s","member/avatar");
						var seolinki=chunks[2];
						
						$('td:eq(2)', nRow).html('<a href="users.php?user='+seolinki+'"><img src="'+icon+'" style="width:35px;float:left;margin-right:8px;"><b style="float:left;font-weight:bold;">'+kulladi+'</b><br><font size=2 color=#ccc></font></a>'); 
									
					});
						$('td:eq(3)', nRow).addClass("center").html(tarih); 

						$('td:eq(4)', nRow).addClass("center").html("<a class='btn btn-danger ' onclick='return confirm(\"Do you realy want this?\");' title='Delete Comment & Report' href='?deletecomment="+icerikid+"&don=reports'><i class='fa fa-comment'></i> & <i class='fa fa-flag'></i></a>  <a class='btn btn-danger ' onclick='return confirm(\"Do you realy want this?\");' title='Only Delete Report' href='?deletereport="+raporid+"'><i class='fa fa-remove'></i></a>");
						
				
					  return nRow;
							
						}
					
					
				});
			
			});
		</script>	
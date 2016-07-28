<?php
require_once("../comments/inc/config.php"); 
include 'inc/header.php';

$action ="";
if(isset($_GET['action'])){
	$action = $_GET['action']; 
}


if ($action == 'userlock') { 
	$uye = $_GET['id']; 
	$do = $_GET['do']; 

	if($do=="lock"){
	 $dbpdo->exec("UpDate uyeler Set ban = '1' where id = '$uye'");
	
	}elseif($do=="unlock"){
	 $dbpdo->exec("UpDate uyeler Set ban = '0' where id = '$uye'");
	
	}
	
	header("Location: users.php?user=$uye");

}elseif ($action == 'makeadmin') { 
	$uye = $_GET['id']; 
	$do = $_GET['do']; 

	if($do=="admin"){
	 $dbpdo->exec("UpDate uyeler Set unvan = '1' where id = '$uye'");
	
	}elseif($do=="member"){
	 $dbpdo->exec("UpDate uyeler Set unvan = '0' where id = '$uye'");
	
	}
	
	header("Location: users.php?user=$uye");

}

?>
<div class="main">
	
	<div class="main-inner">
<?php
$phpson=$phptarih-900;
?>
	    <div class="container">
		<div class="page-header">
		<h2 class="pull-left">
						  <i class="fa fa-users red"></i>
						  <span>Users  (<font color="green"><?php echo $dbpdo->query("select id from uyeler where son_tarih > '$phpson' ")->rowCount(); ?> Online</font>) - <a href="?locked"><font size="3" color="gray"><?php echo $dbpdo->query("select id from uyeler where ban = '1' ")->rowCount(); ?> Locked</font></a> - <a href="?admins"><font size="3" color="gray"><?php echo $dbpdo->query("select id from uyeler where unvan = '1' ")->rowCount(); ?> Admins</font></a> - <a href="?mods"><font size="3" color="gray"><?php echo $dbpdo->query("select id from uyeler where unvan = '5' ")->rowCount(); ?> Mods</font></a></span>
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
							<li class="active">Users</li>
						  </ul>
						</div>
		</div>

		<?php 
if(isset($_GET['user'])){

	
if(isset($_GET['tab'])){
$tabne=$_GET['tab'];
}else{
$tabne="";
}

$rsqa  = $dbpdo->query("select * from uyeler where seolinki='$_GET[user]' or id='$_GET[user]'");

If ($yeni = $rsqa->fetch()){  

$id=$yeni["id"];
$kulladi=$yeni["kulladi"];
$yasne=$yeni["yasne"];
$kayittarih=$yeni["kayittarih"];
$isim=$yeni["isim"];
$soyisim=$yeni["soyisim"];
$seolinki=$yeni["seolinki"];
$sehir=$yeni["sehir"];
$profilcinsiyet=$yeni["cinsiyet"];
$banlimi=$yeni["ban"];
$unvan=$yeni["unvan"];
$email=$yeni["email"];
$icon=$yeni["icon"];
$social=$yeni["social"];
$socialtip=$yeni["socialtip"];

$cinsiyet=$yeni["cinsiyet"];
$son_tarih=$yeni["son_tarih"];
}else{
header("Location: users.php");
exit();
}

$zaman = $phptarih-3000;

If ($son_tarih > $zaman){
$durum = '<div class="profile-status"><i class="fa fa-check-circle"></i> Online</div>';
}Else{
$durum = '<div class="profile-status red"><i class="fa fa-circle-o"></i> Offline</div>';
}

$sontarihgetir=substr($son_tarih,0,8)." ".substr($son_tarih,8,2).":".substr($son_tarih,10,2);


$yasyil=substr($yasne,0,4);
$yasay=substr($yasne,4,2);
$yasgun=substr($yasne,6,8);

$iconres=resimcreate($icon,"m","member/avatar");
$commentnum=$dbpdo->query("select id from yorumlar where ekleyen = '$id' ")->rowCount();						
$likenum=$dbpdo->query("select id from begen where kulladi = '$id' and tiplike='like'")->rowCount();						
$unlikenum=$dbpdo->query("select id from begen where kulladi = '$id' and tiplike='unlike'")->rowCount();						
$reportnum=$dbpdo->query("select id from sikayet where gonderen = '$id' ")->rowCount();						
			?>
		<div class="row">
		<div class="clearfix"></div>
			<div class="span3">
					
					<div class="widget">
							
						<div class="widget-header">
							<i class="fa fa-user"></i>
							<h3>User Profile</h3>
						</div> <!-- /widget-header -->
						
						<div class="widget-content">
							
						<img src="<?php echo $iconres ?>" width="90" style="float:left">
						<div style="margin-left:100px;">
							<h3><?php echo $kulladi ?></h3>
							<a href="?user=<?php echo $id ?>&tab=edit">Edit profile
							<a href="?user=<?php echo $id ?>"><p style="color:#444;"><?php echo $commentnum; ?> Comment</p></a>
							
							
				<?php if($banlimi=="1"){?>
				<a href="?action=userlock&id=<?php echo $id ?>&do=unlock" title="Unlock" class=" btn btn-danger"><i class="fa fa-unlock" style="margin-right:0"></i></a>
				<?php }else{?>
				
				<a href="?action=userlock&id=<?php echo $id ?>&do=lock" title="Lock" class=" btn btn-blur"><i class="fa fa-lock" style="margin-right:0"></i></a>
				
				<?php if($unvan=="1"){?>
				<a href="?action=makeadmin&id=<?php echo $id ?>&do=member" title="Make Member" class=" btn btn-danger "><i class="fa fa-download" style="margin-right:0"></i></a>
				<?php }else{?>
				<a href="?action=makeadmin&id=<?php echo $id ?>&do=admin" title="Make Admin" class=" btn btn-blur"><i class="fa fa-upload" style="margin-right:0"></i></a>
				<?php }?>
				<?php }?>	
			
						</div>	
			
						</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->	
					
					<div class="widget">
							
						<div class="widget-header">
							<i class="fa fa-tags"></i>
							<h3>About</h3>
						</div> <!-- /widget-header -->
						
						<div class="widget-content">
							
									<span class="list-group-item"><i class="fa fa-user" style=""></i>&nbsp;&nbsp;Name: <strong><?php if($isim>""){ echo $isim."&nbsp;".$soyisim; }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-asterisk" style=""></i>&nbsp;&nbsp;Genre: <strong><?php if($cinsiyet>""){ echo $cinsiyet ; }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-gift" style=""></i>&nbsp;&nbsp;Age: <strong><?php if($yasne>""){ echo timeaygunyil($yasne); }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-map-marker" style=""></i>&nbsp;&nbsp;Town: <strong><?php if($sehir>""){ echo $sehir;  }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-envelope" style=""></i>&nbsp;&nbsp;Email: <strong><?php if($email>""){ echo $email; }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-signin" style=""></i>&nbsp;&nbsp;Registered: <strong><?php if($kayittarih>""){ echo timeaygunyil($kayittarih); ?><?php }else{ echo "-";} ?></strong></span><BR>
									<span class="list-group-item"><i class="fa fa-off" style=""></i>&nbsp;&nbsp;Last: <strong><?php if($son_tarih>""){ echo timeConvert($son_tarih);  }else{ echo "-";} ?></strong></span><BR>
						
				<style>.list-group-item i{float:left;width:15px;margin-right:0;color: #4ab6d5;margin-top:2px;text-align:center;}</style>
						</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->	
					
			 </div>
			<div class="span9">
					
					<?php 
					 if($tabne=="delete"){
						if(isset($_GET['deleteuser'])){
							
							
						 $dbpdo->exec("DELETE FROM begen where kulladi = '$id'");
						 $dbpdo->exec("DELETE FROM sikayet where gonderen = '$id'");
						 $dbpdo->exec("DELETE FROM yorumlar where ekleyen = '$id'");
						 $dbpdo->exec("DELETE FROM uyeler where id = '$id'");

							
						header("Location: users.php");
								
			
						exit();	
					}	
					 
					 
					 Echo 'You realy want to delete this user?<br><br> Will delete following items: <b>'.$commentnum.' Comments</b>, <b>'.$likenum.' Likes</b>, <b>'.$unlikenum.' Unlikes</b>, <b>'.$reportnum.' Reports</b> by '.$kulladi.'<br><br><br><br>
					
					<a href="users.php"  class="btn" ><i class="fa fa-caret-left"></i> Cancel</a>
					
					<a class="btn btn-danger" href="?user='.$id.'&tab=delete&deleteuser"><i class="fa fa-delete"></i> Delete</a>
					 
					 ';
					
					
					 }elseif($tabne=="edit"){

					
					
							if(isset($_GET['edit2'])){
							require_once("../comments/inc/upload/uploadfunction.php"); 

							$uyeid = $_POST["uyeid"]; 
							$kulladi = $_POST["kulladi"]; 
							$sifre = $_POST["sifre"]; 
							
							$yasyil = $_POST["yasyil"]; 	
							$yasay = $_POST["yasay"]; 	
							$yasgun = $_POST["yasgun"]; 	
							$isim = $_POST["isim"]; 
							$soyisim = $_POST["soyisim"]; 
							$seolinki = $_POST["seolinki"]; 
							$sehir = $_POST["sehir"]; 
							$unvan = $_POST["unvan"]; 
							$cinsiyet = $_POST["cinsiyet"]; 
							$email = $_POST["email"]; 
							$social = $_POST["social"]; 
							$socialtip = $_POST["socialtip"]; 

							$yasne = $yasyil.$yasay.$yasgun; 	
							
							if ($kulladi=="" or $seolinki=="" or $email=="") {
							echo '<div class="alert">
                                              <button type="button" class="close" data-dismiss="alert">×</button>
                                              <strong>Warning!</strong> Kullanıcı adı, Kullanıcı Adresi veya Email alanları boş kalamaz
                                            </div>';
						
							}else{
								
								$rsqa = $dbpdo->query("select * from uyeler where kulladi like '$kulladi' and id not like '$uyeid' or seolinki like '$seolinki'  and id not like '$uyeid' or email like '$email' and id not like '$uyeid' ");
								$rsqaj = $rsqa->rowCount();
								if ($rsqaj>=1){
								echo '<div class="alert">
                                              <button type="button" class="close" data-dismiss="alert">×</button>
                                              <strong>Warning!</strong> Kullanıcı adı, Kullanıcı Adresi veya Email adreslerinden bir veya bir kaçı farklı bir üye için kullanılıyor.
                                            </div>';
								}else{
									
								
									$olanresim=$icon;
									
								
									if (isset($_FILES['icon']['tmp_name'])){
										$resimdonen=$olanresim;
										if(strlen($_FILES['icon']['tmp_name']) !== 0){
										 $resimdonen=resimgo($_FILES['icon']['name'], $_FILES['icon']['type'], $_FILES['icon']['error'], $_FILES['icon']['tmp_name'] , 'member/avatar', "$seolinki","$olanresim","","");
										
										}
										
										if($resimdonen=="Invalid file"){
										header("Location: ?error=Logo image type must be: Gif,Png,Jpg.");exit();
										}
									}else{
									$resimdonen=$olanresim;
									}
						

									$sifremd5=md5($sifre);
									if($sifre>""){
									 $return = $dbpdo->prepare("UpDate uyeler Set sifre = '$sifremd5' where id='$uyeid'");
									 $return = $return->execute();
									}

									 $dbpdo->exec("UpDate uyeler Set icon = '$resimdonen', kulladi = '$kulladi' , unvan = '$unvan', seolinki = '$seolinki', isim = '$isim', soyisim = '$soyisim', email = '$email', social = '$social', socialtip = '$socialtip', cinsiyet = '$cinsiyet', yasne = '$yasne', sehir = '$sehir' where id like '$uyeid'");
								
									header("Location: ?user=$id&tab=edit&edited");
								
									}
								}
							}
					if(isset($_GET['edited'])){
						echo '<div class="alert alert-success">
                                                  <button type="button" class="close" data-dismiss="alert">×</button>
                                                  <strong>Success!</strong> Successfuly edited.
                                                </div>';
					}	
					?>
			
		<div class="widget">
			<div class="widget-header">
					<i class="fa fa-cog"></i>
						<h3>User Edit</h3>
						</div> <!-- /widget-header -->
						<div class="widget-content">
										
						<form action="?user=<?php echo $id ?>&tab=edit&edit2" method="post" enctype="multipart/form-data" >
						<input class="input-style addon" name="uyeid" id="uyeid" type="hidden" value="<?php echo $id ?>" style="width:350px">
						<div class="form-group clear">
							<label class="lab">Type</label>
							
							<select name="unvan" id="unvan" class="inputug" style="width: 150px;">
								<option value="<?php echo $unvan ?>" selected=""> (<?php if($unvan==1){echo "Admin";}elseif($unvan==5){echo "Moderator";}else{echo "Member";} ?>)</option>
								<option value="0">Member</option>
								<option value="1">Admin</option>
								<option value="5">Moderator</option>
							</select>
							<div class="clear"> </div>
						</div>		
						<div class="form-group clear">
							<label class="lab">Username</label>
							
							<input class="input-style addon" name="kulladi" id="kulladi" value="<?php echo $kulladi ?>" type="text" style="width:350px">
						
							<div class="clear"> </div>
						</div>		
						<div class="form-group clear">
							<label class="lab">Username Slug</label>
							
							<input class="input-style addon" name="seolinki" id="seolinki" value="<?php echo $seolinki ?>" type="text" style="width:350px">
						
							<div class="clear"> </div>
						</div>			
						<div class="form-group clear">
							<label class="lab">Password</label>
							
							<input class="input-style addon" name="sifre" id="sifre" value="" type="text" style="width:350px"> 
						
							<div class="clear"> </div>
						</div>		
						<div class="form-group clear">
							<label class="lab">Name</label>

							<input class="input-style addon" name="isim" id="isim" value="<?php echo $isim ?>" type="text" style="width:350px">

							<div class="clear"> </div>
						</div>		
						<div class="form-group clear">
							<label class="lab">Surname</label>

							<input class="input-style addon" name="soyisim" id="soyisim" value="<?php echo $soyisim ?>" type="text" style="width:350px">

							<div class="clear"> </div>
						</div>			
						<div class="form-group clear">
							<label class="lab">Email</label>
							
							<input class="input-style addon" name="email" id="email" value="<?php echo $email ?>" type="text" style="width:350px">
						
							<div class="clear"> </div>
						</div>			
						<div class="form-group clear">
							<label class="lab">Social Id</label>
							
							<input class="input-style addon" name="social" id="social" value="<?php echo $social ?>" type="text" style="width:350px">
						
							<div class="clear"> </div>
						</div>							
						<div class="form-group clear">
							<label class="lab">Social Account On</label>
							
							<input class="input-style addon" name="socialtip" id="socialtip" value="<?php echo $socialtip ?>" type="text" style="width:350px">
						
							<div class="clear"> </div>
						</div>	
						<div class="form-group clear">
							<label class="lab">Town</label>
							
							<input class="input-style addon" name="sehir" id="sehir" value="<?php echo $sehir ?>" type="text" style="width:350px">
							
							<div class="clear"> </div>
						</div>						
						<div class="form-group clear">
							<label class="lab">Gender</label>
							
							<select name="cinsiyet" id="cinsiyet" class="inputug" style="width: 150px;">
								<option value="<?php echo $cinsiyet ?>" selected=""> (<?php echo $cinsiyet ?>)</option>
								<option value="">Empty</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Other">Other</option>
							</select>
							<div class="clear"> </div>
						</div>		
						<div class="form-group clear">
							<label class="lab">Age</label>
							
							
							<select id="yasgun" name="yasgun" class="inputug"><option value="<?php echo $yasgun ?>"> (<?php echo $yasgun ?>)</option><option value="">Empty</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
							<select id="yasay" name="yasay" class="inputug"><option value="<?php echo $yasay ?>"> (<?php echo $yasay ?>)</option><option value="">Empty</option><option value="01">January </option> <option value = "02"> February </option> <option value = "03"> March </option> <option value = "04"> April </option> <option value = "05 "> May </option> <option value =" 06 "> June </option> <option value =" 07 "> July </option> <option value =" 08 "> August </option> <option value = "09"> September </option> <option value = "10"> October </option> <option value = "11"> November </option> <option value = "12"> December</option></select>
							<select id="yasyil" name="yasyil" class="inputug"><option value="<?php echo $yasyil ?>"> (<?php echo $yasyil ?>)</option><option value="">Empty</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option>												</select>
																	
							<div class="clear"> </div>
						</div><hr>


						<div class="form-group clear">
							<label class="lab">Avatar</label>
							
							<input type="file" name="icon" id="icon" class="fileresim" style="left: -115px; top: 12px;">
							<div class="clear"> </div>
						</div>
						
				

						<hr>

						<div class="postgo_section">
							<button class="btn btn-primary "  type="submit"><i class="fa fa-save"></i> Edit</button>
						</div>
						</form>
										
			
						</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->		
					<?php }else{ ?>
			
					
					<div class="widget">
							
						<div class="widget-header">
							<i class="fa fa-comments"></i>
							<h3>Comments</h3>
						</div> <!-- /widget-header -->
						
			<div class="widget-content">
			<!-- easyComment Content Div -->
			<div id="easyComment_Content"></div>
	
			<script type="text/javascript">
			// CONFIGURATION VARIABLES
			var easyComment_ContentID = '<?php echo $id ?>';
			var easyComment_ByUserID = 'Yes';
			
			// CORE 
			var easyComment_Domain = '<?php echo $db_siteadres ?>';
			
			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var EC = document.createElement('script');
				EC.type = 'text/javascript';
				EC.async = true;
				EC.src = easyComment_Domain + 'plugin/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(EC);
			})();
		</script>
						</div> <!-- /widget-content -->
							
					</div> <!-- /widget -->	
						<?php } ?>
		
			 </div>

		</div>	

		<?php }else{ ?>
		
		
	      <div class="row">
	      	
	      	<div class="span12">
	      		
	    
		
			<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
						<th width="30%" style="text-align:left"><span>User</span></th>
						<th width="20%" style="text-align:left"><span>Email</span></th>
						<th width="15%" style="text-align:left"><span>Status</span></th>
						<th width="15%"><span>Last activity</span></th>
						<th width="20%"><span>Settings</span></th>
						</tr>
					</thead>

					<tfoot>
						<tr>
						<th width="30%" style="text-align:left"><span>User</span></th>
						<th width="20%" style="text-align:left"><span>Email</span></th>
						<th width="15%" style="text-align:left"><span>Status</span></th>
						<th width="15%"><span>Last activity</span></th>
						<th width="20%"><span>Settings</span></th>
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
				var phptarihsononline="<?php echo $phptarih-900; ?>";
			
					$('#example').dataTable( {
					 "order": [ 1, 'desc' ], 
					"bProcessing": true,
					"bServerSide": true,
					"sAjaxSource": "posts/users_processing.php<?php if(isset($_GET['locked'])){ echo '?locked'; }elseif(isset($_GET['admins'])){ echo '?admins'; }if(isset($_GET['mods'])){ echo '?mods'; }?>",
					"bPaginate":true, 
					"sPaginationType":"full_numbers",
					
					
					"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
					  //var imgLink = aData['b_resim']; // if your JSON is 3D
					 var imgLinkS = aData[5];
						var haberid = aData[0]; 
						var haberbaslik = aData[4]; 
					var iletisimemail = aData[1]; 
					var uyeunvan = aData[2]; 
					var iletisimtarih = aData[3]; 
					var uyedurumid = aData[6]; 
					
					imgLink="default";
					if(imgLinkS > ""){ imgLink=imgLinkS;  }
					
					if(uyeunvan=="1"){uyeunvan="Admin";}else if(uyeunvan=="0"){uyeunvan="Member";}else if(uyeunvan=="5"){uyeunvan="Mod";} 
									
					imgLinka=resimcreate(imgLink,"s","member/avatar");
					online="<font color=red>Offline</font>";
					if (iletisimtarih > phptarihsononline){
					online="<font color=green>Online</font>";
					}
					
						$('td:eq(0)', nRow).html("<img class=img  src=" + imgLinka + " width=50 height=50 style='float:left'><div style='margin-left: 65px;'><a href=?user="+haberid+">"+haberbaslik+"</a> - <span style='font-size:11px'>"+online+"</span><br><span>"+uyeunvan+"</span></div>"); // where 4 is the zero-origin visible column in the HTML
						$('td:eq(3)', nRow).html('<em class="tarih">'+showDate(iletisimtarih)+'</em>').addClass("center"); 
						
						
						
						if(uyedurumid=="1"){uyedurum="<div class='mailtips box-danger' style='float:left'><i class='fa fa-lock' style='margin-right:0'></i> Locked</div>"}else	if(uyedurumid=="2"){uyedurum="<div class='mailtips box-navy' style='float:left'>Unauthorised mail</div>"}else	if(uyedurumid=="0"){uyedurum="<div class='mailtips box-warning' style='float:left'>Authorised</div>"}
						
						$('td:eq(2)', nRow).addClass("center").html(uyedurum); 
			
						
						$('td:eq(1)', nRow).html('<a href="?user='+haberid+'"> <span>'+iletisimemail+'</span></a>'); 
						$('td:eq(4)', nRow).addClass("center"); 
						
						$('td:eq(4)', nRow).html("<a class='btn btn-primary ' href=?user="+haberid+"><i class='fa fa-share-square'></i> Profile</a> <a class='btn btn-success' href=users.php?user="+haberid+"&tab=edit><i class='fa fa-cog'></i> Edit</a> <a class='btn btn-danger' href=users.php?user="+haberid+"&tab=delete><i class='fa fa-delete'></i> Del</a>"); // where 4 is the zero-origin visible column in the HTML

						return nRow;
						
						}
					
					
				});
			
			});
		</script>	
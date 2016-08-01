<?php
require_once("../comments/inc/config.php"); 
include 'inc/header.php';

?>
<div class="main">
  <div class="main-inner">
    <div class="container">
      <div class="row">
        <div class="span6">
          <div class="widget widget-nopad">
            <div class="widget-header"> <i class="fa fa-list-alt"></i>
              <h3> Today's Stats</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <div class="widget big-stats-container">
                <div class="widget-content">
                  <h6 class="bigstats">A rich comment script for your website</h6>
                  <div id="big_stats" class="cf">
                    <div class="stat"> <i class="fa fa-comment"></i> <span class="value"><?php echo $dbpdo->query("select id from yorumlar where left(tarih,8) like '$zamangunayyil' ")->rowCount(); ?></span> </div>
                    <!-- .stat -->
                    
                    <div class="stat"> <i class="fa fa-thumbs-up"></i> <span class="value"><?php echo $dbpdo->query("select id from begen where left(tarih,8) like '$zamangunayyil' and begenitip='yorum' and tiplike='like'")->rowCount(); ?></span> </div>
                    <!-- .stat -->
                    
                    <div class="stat"> <i class="fa fa-thumbs-down"></i> <span class="value"><?php echo $dbpdo->query("select id from begen where left(tarih,8) like '$zamangunayyil' and begenitip='yorum' and tiplike='unlike'")->rowCount(); ?></span> </div>
                    <!-- .stat -->
                    
                    <div class="stat"> <i class="fa fa-user"></i> <span class="value"><?php echo $dbpdo->query("select id from uyeler where left(kayittarih,8) like '$zamangunayyil' ")->rowCount(); ?>+</span> </div>
                    <!-- .stat --> 
                  </div>
                </div>
                <!-- /widget-content --> 
                
              </div>
            </div>
          </div>
  
          <!-- /widget -->
          <div class="widget">
            <div class="widget-header"> <i class="fa fa-file"></i>
              <h3>Last Comments</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <ul class="messages_layout">
			  <?PHP

$stmtooo  = $dbpdo->query("SELECT * FROM yorumlar  where onay = '1' and tip != 'yorumcevap' and tip != 'yorumcevapyanit' ORDER BY tarih DESC limit 0, 5");
$rowingele = $stmtooo->fetchAll();
$ddf=1;
foreach ($rowingele as $gelenl){	

				$ekleyen	=  $gelenl['ekleyen'];
				$yorum	=  $gelenl['yorum'];
				$yorum=nl2br(cust_text(temizle_replace($yorum)));
				$yorumid	=  $gelenl['id'];
				$yorumtarih	=  timeConvert($gelenl['tarih']);
				$yorumspoiler	=  $gelenl['spoiler'];
				$u_name	=  $gelenl['u_name'];
				$u_email	=  $gelenl['u_email'];
				
				
				if($yorumspoiler==1){$yorumspoilerne="block";$yorumspoilerne2="none";}else{$yorumspoilerne="none";$yorumspoilerne2="block";}
				
				if($ekleyen==0){
					$yorumyazanid="";
					$yorumyazankulladi=$u_name;
					$yorumyazankulladi2="";
					$yorumyazanicon=resimcreate("","s","member/avatar");
					$yorumyazanunvan="0";
				}else{
					$rsqam  = $dbpdo->query("Select id,kulladi,seolinki,icon,unvan from uyeler where id = '".$ekleyen."' limit 1");
					$gelenm = $rsqam->fetch();
					$yorumyazanid=$gelenm["id"];
					$yorumyazankulladi=$gelenm["kulladi"];
					$yorumyazankulladi2='users.php?user='.$yorumyazanid.'';
					$yorumyazanicon=resimcreate($gelenm["icon"],"s","member/avatar");
					$yorumyazanunvan=$gelenm["unvan"];
				}
				
				if($ekleyen==0){
					$yorumyazanunvancolor='class="guest" style="cursor:default"';$yorumyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($yorumyazanunvan==1){$yorumyazanunvancolor='class="admin"';$yorumyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($yorumyazanunvan==5){$yorumyazanunvancolor='class="mod"';$yorumyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$yorumyazanunvancolor="";$yorumyazanunvanyazi="";}
				}
			
			if($ddf==2 or $ddf==4){
				$leftornot="right";
				
			}else{
				$leftornot="left";
			}
		
	echo '
	              <li class="from_user '.$leftornot.'" style="float:none;display:block"> <a href="#" class="avatar"><img width=55 src="'.$yorumyazanicon.'"/></a>
                  <div class="message_wrap" style="float:none;display:block"> <span class="arrow"></span>
                    <div class="info"> <a href="'.$yorumyazankulladi2.'" class="name" '.$yorumyazanunvancolor.'>'.$yorumyazankulladi.''.$yorumyazanunvanyazi.'</a> <span class="time">'.$yorumtarih.'</span>
                      <div class="options_arrow">
                        <div class="dropdown pull-right"> <a class="dropdown-toggle " id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#"> <i class=" fa fa-caret-down"></i> </a>
                          <ul class="dropdown-menu " role="menu" aria-labelledby="dLabel">
                            <li><a href="comments.php?comment='.$yorumid.'"><i class=" fa fa-share-alt fa fa-large"></i> Edit</a></li>
                            <li><a onclick="return confirm(\'Do you realy want this?\');" href="comments.php?deletecomment='.$yorumid.'"><i class=" fa fa-trash fa fa-large"></i> Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="text">'.$yorum.'</div>
					 <div class="clearfix"></div>
                  </div>
				  <div class="clearfix"></div>
                </li>
	';				
	
		
	$ddf=$ddf+1;
		
	}
	if($ddf==1){ echo 'Nothing to see here'; }
			  ?>
			  
  

              </ul>
            </div>
            <!-- /widget-content --> 
          </div>

          <div class="widget widget-table action-table">
            <div class="widget-header"> <i class="fa fa-th-list"></i>
              <h3>Pending Comments</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th> Comment </th>
                    <th> Details</th>
                    <th class="td-actions"> </th>
                  </tr>
                </thead>
                <tbody>
				<?PHP

$stmtooo  = $dbpdo->query("SELECT * FROM yorumlar  where onay = '0' ORDER BY tarih DESC limit 0, 10");
$rowingele = $stmtooo->fetchAll();
$ddf=1;
foreach ($rowingele as $gelenl){	

				$ekleyen	=  $gelenl['ekleyen'];
				$yorum	=  $gelenl['yorum'];
				$yorum=nl2br(temizle_replace($yorum));
				$yorumid	=  $gelenl['id'];
				$yorumtarih	=  timeConvert($gelenl['tarih']);
				$yorumspoiler	=  $gelenl['spoiler'];
				$u_name	=  $gelenl['u_name'];
				$u_email	=  $gelenl['u_email'];
				
				
				if($yorumspoiler==1){$yorumspoilerne="block";$yorumspoilerne2="none";}else{$yorumspoilerne="none";$yorumspoilerne2="block";}
				
				if($ekleyen==0){
					$yorumyazanid="";
					$yorumyazankulladi=$u_name;
					$yorumyazankulladi2="javascript:;";
					$yorumyazanicon=resimcreate("","s","member/avatar");
					$yorumyazanunvan="0";
				}else{
					$rsqam  = $dbpdo->query("Select id,kulladi,seolinki,icon,unvan from uyeler where id = '".$ekleyen."' limit 1");
					$gelenm = $rsqam->fetch();
					$yorumyazanid=$gelenm["id"];
					$yorumyazankulladi=$gelenm["kulladi"];
					$yorumyazankulladi2='users.php?user='.$yorumyazanid.'';
					$yorumyazanicon=resimcreate($gelenm["icon"],"s","member/avatar");
					$yorumyazanunvan=$gelenm["unvan"];
				}
				
				if($ekleyen==0){
					$yorumyazanunvancolor='class="guest" style="cursor:default"';$yorumyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($yorumyazanunvan==1){$yorumyazanunvancolor='class="admin"';$yorumyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($yorumyazanunvan==5){$yorumyazanunvancolor='class="mod"';$yorumyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$yorumyazanunvancolor="";$yorumyazanunvanyazi="";}
				}
			
			if($ddf==2 or $ddf==4){
				$leftornot="right";
				
			}else{
				$leftornot="left";
			}
		
	echo ' <tr>
                    <td>'.substr($yorum,0,20).'... </td>
                    <td><a href="'.$yorumyazankulladi2.'" '.$yorumyazanunvancolor.'><img width="25" src="'.$yorumyazanicon.'"> '.$yorumyazankulladi.' '.$yorumyazanunvanyazi.'</a> </td>
                    <td class="td-actions"><a href="comments.php?approve='.$yorumid.'" class="btn btn-small btn-success"><i class="btn-fa fa-only fa fa-check-square-o"> </i></a><a onclick="return confirm(\'Do you realy want this?\');" href="comments.php?deletecomment='.$yorumid.'&don=unapproved" class="btn btn-danger btn-small"><i class="btn-fa fa-only fa fa-remove"> </i></a></td>
                  </tr>
		
	';				
	
		
	$ddf=$ddf+1;
		
	}
	
			  ?>
				
  
                
                </tbody>
              </table><?php if($ddf==1){ echo '<div style="padding:10px">Nothing to see here</div>'; } ?>
            </div>
            <!-- /widget-content --> 
          </div>
          <!-- /widget --> 
        </div>
        <!-- /span6 -->
        <div class="span6">
         <?php 	if ($_SESSION['kimdir']=="1"){ ?>  
		 <div class="widget">
            <div class="widget-header"> <i class="fa fa-code"></i>
              <h3>Your Code</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
       
<textarea style="margin: 0px 0px 9px; width: 522px; height: 361px;">
<!-- easyComment Content Div -->
<div id="easyComment_Content"></div>
	
<!-- easyComment -->
<script type="text/javascript">
	// CONFIGURATION VARIABLES
	var easyComment_ContentID = 'MyUnquieId';
	
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
</textarea><!-- /easyComment -->
	   
              <!-- /shortcuts --> 
            </div>
            <!-- /widget-content --> 
		 </div>   <?php } ?>        
		  <div class="widget">
            <div class="widget-header"> <i class="fa fa-bookmark"></i>
              <h3>Important Shortcuts</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <div class="shortcuts"> <a href="settings.php" class="shortcut"><i class="shortcut-icon fa fa-cog"></i><span
                                        class="shortcut-label">App Settings</span> </a><a href="themes.php" class="shortcut"><i
                                            class="shortcut-icon fa fa-asterisk"></i><span class="shortcut-label">Themes</span> </a>
											<a href="reports.php" class="shortcut"><i class="shortcut-icon fa fa-signal"></i> <span class="shortcut-label">Reports</span> </a>
											<a href="comments.php"" class="shortcut"> <i class="shortcut-icon fa fa-comment"></i><span class="shortcut-label">Comments</span> </a>
										
													</div>
              <!-- /shortcuts --> 
            </div>
            <!-- /widget-content --> 
          </div>
          <!-- /widget -->

          <div class="widget widget-nopad">
            <div class="widget-header"> <i class="fa fa-list-alt"></i>
              <h3> Recent News</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <ul class="news-items">
			  <?php
  $z = new XMLReader;
$z->open('http://easycomment.akbilisim.com/feeds.xml');

$doc = new DOMDocument;


while ($z->read() && $z->name !== 'feed');


while ($z->name === 'feed')
{

    $node = simplexml_import_dom($doc->importNode($z->expand(), true));

  
		echo '   <li><div class="news-item-date"> <span class="news-item-day">'.$node->date.'</span> <span class="news-item-month">'.$node->datem.'</span> </div>
                  <div class="news-item-detail"> <a href="'.$node->link.'" class="news-item-title" target="_blank">'.$node->title.'</a>
                    <p class="news-item-preview"> '.$node->desc.' </p>
                  </div>
                  
                </li>';

    $z->next('feed');
}
			  ?>
           
              </ul>
            </div>
            <!-- /widget-content --> 
          </div>
          <!-- /widget -->
        </div>
        <!-- /span6 --> 
      </div>
      <!-- /row --> 
    </div>
    <!-- /container --> 
  </div>
  <!-- /main-inner --> 
</div>
<!-- /main -->
<?php
 include 'inc/footer.php';
?>
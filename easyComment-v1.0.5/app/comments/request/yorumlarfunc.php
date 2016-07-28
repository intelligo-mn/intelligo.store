<?php


function likeitems($icerikid)
{	
global $dbpdo;global $lang;global $db_siteadres;
	$iceriktip="yorum";
	$yorumlikedonmu="";

	$toplamliked  = $dbpdo->query("SELECT count(id) FROM begen where icerikid=$icerikid and  begenitip='$iceriktip' and tiplike like 'like'")->fetchColumn();
	$toplamunliked  = $dbpdo->query("SELECT count(id) FROM begen where icerikid=$icerikid and  begenitip='$iceriktip' and tiplike like 'unlike'")->fetchColumn();
		
 return '<span class="like" onclick="comment_like('.$icerikid.',\'yorum\')"><abbr id="like_'.$icerikid.'">'.$toplamliked.'</abbr>
 <span class="fa fa-thumbs-up"></span></span>|<span class="dislike" onclick="comment_dislike('.$icerikid.',\'yorum\')"><abbr id="dislike_'.$icerikid.'">'.$toplamunliked.'</abbr><span class="fa fa-thumbs-down"></span></span>';

	
} 

function yorumaddsubcomment($icerikid)
{	
global $lang;
	$iconm="";$logincontent="";
	if(isset($_SESSION["icon"])){$iconm= $_SESSION["icon"]; }
 if(!isset($_SESSION["oturumid"])){
		
$logincontent = '<div class="loginbox">
	<div class="typerq">
		<a href="javascript:;" id="chooseiType"><i class="fa fa-sign-in"></i><span class="name">Login</span> <span class="fa fa-angle-down"></span></a>
		<ul class="dropdown-menu">
           <li><a href="javascript:;" onclick="chooseType(\'Login\',0, this);" class="selected"><i class="fa fa-sign-in"></i>Login <i class="fa fa-selected fa-check"></i></a></li>
			<li><a href="javascript:;" onclick="chooseType(\'Register\',0, this);"><i class="fa fa-user-plus"></i>Register <i class="fa fa-selected fa-check"></i></a></li>
			<li><a href="javascript:;" onclick="chooseType(\'Register\',1, this);"><i class="fa fa-user-secret"></i>Guest <i class="fa fa-selected fa-check"></i></a></li>
       </ul>
	</div>
	<div class="callingsing Login-sign open">
		<a href="javascript:;" onclick="authLogin()" title="'.$lang["C_4A"].'" class="social-button">
			<span class="fa-stack easycomment fa-lg">
				  <i class="fa fa-square fa-stack-2x"></i>
				  <i class="fa fa-comments fa-stack-1x"></i>
			</span>
		</a>	
		<a href="javascript:;" onclick="authFacebook()" title="'.$lang["C_5A"].'" class="social-button">
			<span class="fa-stack facebook fa-lg">
				  <i class="fa fa-square fa-stack-2x"></i>
				  <i class="fa fa-facebook fa-stack-1x"></i>
			</span>
		</a>
	
	
	<div class="clear"></div>
	</div>
	<div class="callingsing Register-sign">
		<span class="boxinput"><input name="user_username" placeholder="Type a Username" ></span>
		<span class="boxinput"><input name="user_email"  placeholder="Type a Email" ></span>
		<span class="boxinput"><input name="user_password"  placeholder="Password" ></span>
	</div> 

</div>';
	}
 return '<div class="add-subcomment" id="open_add_subcomment_'.$icerikid.'">
 <div class="loader-ajax"></div>
 <div class="formm"><img src="'.resimcreate($iconm,"s","member/avatar").'" alt="" class="usericont"/>
 <div class="inner">
 <form id="subcomment_'.$icerikid.'" action="" onsubmit="return false;">
 <input type="hidden" name="comment_id" value="'.$icerikid.'" />
 <textarea name="comment_text" cols="30" rows="10" placeholder="'.$lang["COMMENT_LINK_9C"].'" onclick="excomment_text(this)"></textarea>
 <div class="subcomment-alt"><button type="submit" onclick="addSubComment(this, '.$icerikid.')">'.$lang["COMMENT_LINK_3C"].'</button>
 '.$logincontent.' 
 </div></form></div></div></div>';

	
}
 
 
function yorumget($yorumicerikid,$yorumicerikdesc,$sayfaid,$yorumdesc)
{	
global $dbpdo;
global $db_siteadres;
global $lang;
global $db_commentsnumberperpage;
global $db_populercommentcount;
	
$veri="";



	// Sayfalama 

$satir_sayisi  = $dbpdo->query("SELECT count(*) from yorumlar where icerikid = '".$yorumicerikid."' and onay = '1'")->fetchColumn();
$sayfa          = $sayfaid; 
$limit          = $db_commentsnumberperpage; 
$sayfa_sayisi = ceil( $satir_sayisi / $limit ); 
$sayfa          = ( $sayfa > $sayfa_sayisi ? 1 : $sayfa ); 
$goster          = ( $sayfa * $limit ) - $limit; 
			


if($yorumdesc=="populer"){
	$sayfa="populer"; 
	
}
		
	if($yorumdesc=="populer"){
		$stmtooo  = $dbpdo->query("
		SELECT * from (
		SELECT 
		A.*, (SELECT COUNT(*) FROM begen B where B.icerikid=A.id and B.begenitip = 'yorum' and B.tiplike = 'like') AS memberCount
		FROM yorumlar A where A.icerikid='$yorumicerikid' and A.onay = '1'
		) T where T.memberCount >= '10'
	 ORDER BY T.memberCount DESC
    limit 0, $db_populercommentcount");
	}ELSEif($yorumdesc=="user"){
		$stmtooo  = $dbpdo->query("SELECT * FROM yorumlar where ekleyen='$yorumicerikid' and onay = '1' ORDER BY tarih DESC limit $goster, $limit");
	}ELSE{
		if($yorumicerikdesc=="best"){
			$stmtooo  = $dbpdo->query("
				SELECT * from (
				SELECT 
				A.*, (SELECT COUNT(*) FROM begen B where B.icerikid=A.id and B.begenitip = 'yorum' and B.tiplike = 'like') AS memberCount
				FROM yorumlar A where A.icerikid='$yorumicerikid' and A.onay = '1'
				) T  
			 ORDER BY T.memberCount DESC
			limit $goster, $limit");
		}ELSEif($yorumicerikdesc=="old"){
			$stmtooo  = $dbpdo->query("SELECT * FROM yorumlar  where İcerikid='$yorumicerikid' and onay = '1' ORDER BY tarih ASC limit $goster, $limit");
		}ELSE{
			$stmtooo  = $dbpdo->query("SELECT * FROM yorumlar  where İcerikid='$yorumicerikid' and onay = '1' ORDER BY tarih DESC limit $goster, $limit");
		}
		
	}
		
$rowingele = $stmtooo->fetchAll();

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
					$yorumyazankulladi2='onclick="profilego('.$yorumyazanid.')"';
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
			
			
		
	$islemler='';	
	 if (isset($_SESSION['oturumid'])) { if ($_SESSION['kimdir']=="1") { 
	 $islemler='<a href="../admin/comments.php?comment='.$yorumid.'" target="_blank" style="margin-right:5px;"><span class="fa fa-pencil"></span></a> <a href="javascript:;" onclick="CommentDelete('.$yorumid.')" title="'.$lang["COMMENT_LINK_9B"].'"><span class="fa fa-times"></span></a> '; 
	  }else if ($_SESSION['oturumid']!=$yorumyazanid) {
		$islemler='<a href="javascript:;" data-open="#comment-report" onclick="comment_complain('.$yorumid.')" title="'.$lang["COMMENT_LINK_9A"].'"><span class="fa fa-flag"></span></a>'; 
	  }
	  }			
				
	$veri=$veri.'
 <div class="comment" id="yorum'.$yorumid.'">
 <span style=""><img class="avatar" src="'.$yorumyazanicon.'" alt=""/>
 <div class="c-text"><div class="c-top">
 <span class="report">'.$islemler.'</span>
 <a '.$yorumyazanunvancolor.' href="javascript:;" '.$yorumyazankulladi2.' data-id="'.$yorumyazanid.'" data-user="'.$yorumyazankulladi.'" onmouseover="loaduserWidget(this)">'.$yorumyazankulladi.''.$yorumyazanunvanyazi.'</a>
 <span class="date"><span>•</span> '.$yorumtarih.'</span></div>
 <div class="spoiler-text" style="display: '.$yorumspoilerne.'">'.$lang["COMMENT_LINK_8A"].' <span>'.$lang["COMMENT_LINK_8B"].'</span></div>
 <p style="display: '.$yorumspoilerne2.'">'.$yorum.'</p>
 <div class="c-alt"> <a href="javascript:;" onclick="openSubcommentForm('.$yorumid.', this)" class="open-subcomment">'.$lang["COMMENT_LINK_7A"].'</a> • '.likeitems($yorumid).' 
	
 </div>
 </span>
<div id="comment_content_'.$yorumid.'" style="position: relative">
 <div class="form-loader"></div>
	
	'.yorumcevaplarget($yorumid,"").'
 
 </div>
 '.yorumaddsubcomment($yorumid).'
 </div><div class="clear"></div></div>';				
	

	}
	
	if ($satir_sayisi>$limit and $yorumdesc!="populer"){

	$veri=$veri.'<div class="pagination center" style="margin-bottom:20px;"><ul class="pagination" >';
										if( $sayfa > 1 ) 
										{ 
								 
											$veri=$veri.'<li><a href="javascript:;" class="previous" data-page="1"> <i class="fa fa-angle-double-left"></i></a></li>';
												
											$veri=$veri.'<li><a href="javascript:;" class="previous" data-page="'.($sayfa - 1).'"><i class="fa fa-angle-left"></i></a></li>';
											
										}
										 
										for( $i = $sayfa - 3; $i < $sayfa + 4; $i++ ) 
										{ 
											if( $i > 0 && $i <= $sayfa_sayisi ) 
											{ 
												$veri=$veri.'<li class="'.($i == $sayfa ? 'active' : '').'"><a href="javascript:;" data-page="'.$i.'">'.$i.'</a></li>';
											} 
										} 
										 
										if( $sayfa != $sayfa_sayisi ) 
										{ 
											$veri=$veri.'<li><a href="javascript:;" class="next" data-page="'.($sayfa + 1).'"><i class="fa fa-angle-right"></i></a></li>';
											$veri=$veri.'<li><a href="javascript:;" class="next" data-page="'.$sayfa_sayisi.'"><i class="fa fa-angle-double-right"></i></a></li>';
										}
						$veri=$veri.'</ul></div>';			
	}

 
	
return $veri;

	
}


 function yorumcevaplarget($yorumid,$fullmu)
{	
global $dbpdo;
global $lang;
global $db_siteadres;
$veri="";

		$yorummesajsay  = $dbpdo->query("select count(*) from yorumlar where icerikid = '".$yorumid."' and tip = 'yorumcevap' and onay = '1'")->fetchColumn();		
		
		if ($fullmu=="full"){
			$goster="0";
			$limit=$yorummesajsay;
			
	
		}else{
			if ($yorummesajsay>2){
			$goster=$yorummesajsay-2;
			$limit="2";
			}else{
			$goster="0";
			$limit=$yorummesajsay;
	
			}
		}
		
		if($yorummesajsay > "0"){
		
		$rsqalcev  = $dbpdo->query("select tarih,yorum,id,ekleyen,spoiler,u_name,u_email from yorumlar where icerikid = '".$yorumid."' and tip = 'yorumcevap' and onay = '1' order by tarih asc limit ".$goster.", ".$limit."");
		$rowingelew = $rsqalcev->fetchAll();
		
		}

		if ($fullmu!="full" and $yorummesajsay > "2") {$veri=$veri.'<a class="load-more-comment" href="javascript:;" onclick="loadComments('.$yorumid.',this,0)">'.$lang["COMMENT_Z_1"].''.$yorummesajsay.''.$lang["COMMENT_Z_2"].' <span class="fa fa-angle-down"></span></a>';}
		
		$veri=$veri.'<div id="comments'.$yorumid.'">';
		
		if($yorummesajsay > "0"){
		foreach ($rowingelew as $gelenlcev){	

		$cevaptarih=timeConvert($gelenlcev["tarih"]);
		$cevapyorum=nl2br(cust_text(temizle_replace($gelenlcev["yorum"])));
		$cevapid=$gelenlcev["id"];
		$cevapekleyen=$gelenlcev["ekleyen"];
		$cevapspoiler	=  $gelenlcev['spoiler'];
		$u_name	=  $gelenlcev['u_name'];
		$u_email	=  $gelenlcev['u_email'];
				
			if($cevapspoiler==1){$cevapspoilerne="block";$cevapspoilerne2="none";}else{$cevapspoilerne="none";$cevapspoilerne2="block";}
				
				if($cevapekleyen==0){
					$cevapyazanid="";
					$cevapyazankulladi=$u_name;
					$cevapyazankulladi2="";
					$cevapyazanicon=resimcreate("","s","member/avatar");
					$cevapyazanunvan="0";
				}else{
					$gelenmu  = $dbpdo->query("Select id,kulladi,seolinki,icon,unvan from uyeler where id = '".$cevapekleyen."' limit 1");
					$gelenmu = $gelenmu->fetch();
					
					$cevapyazanid=$gelenmu["id"];
					$cevapyazankulladi=$gelenmu["kulladi"];
					$cevapyazankulladi2='onclick="profilego('.$cevapyazanid.')"';
					$cevapyazanicon=resimcreate($gelenmu["icon"],"s","member/avatar");
					$cevapyazanunvan=$gelenmu["unvan"];
				}
				
				
				if($cevapekleyen==0){
					$cevapyazanunvancolor='class="guest" style="cursor:default"';$cevapyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($cevapyazanunvan==1){$cevapyazanunvancolor='class="admin"';$cevapyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($cevapyazanunvan==5){$cevapyazanunvancolor='class="mod"';$cevapyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$cevapyazanunvancolor="";$cevapyazanunvanyazi="";}
				}	
				
		
				
		$islemler='';	
	 if (isset($_SESSION['oturumid'])) { if ($_SESSION['kimdir']=="1") { 
	 $islemler='<a href="../admin/comments.php?comment='.$cevapid.'" target="_blank" style="margin-right:5px;"><span class="fa fa-pencil"></span></a> <a href="javascript:;" onclick="CommentDelete('.$cevapid.')" title="'.$lang["COMMENT_LINK_9B"].'"><span class="fa fa-times"></span></a> '; 
	  }else if ($_SESSION['oturumid']!=$cevapyazanid) {
		$islemler='<a href="javascript:;" data-open="#comment-report" onclick="comment_complain('.$cevapid.')" title="'.$lang["COMMENT_LINK_9A"].'"><span class="fa fa-flag"></span></a>'; 
	  }
	  }	
				
$veri=$veri.'
<div class="comment" id="yorum'.$cevapid.'" data-id="'.$cevapid.'"><img class="avatar" src="'.$cevapyazanicon.'" alt=""/>
<div class="c-text"><div class="c-top"> <span class="report">'.$islemler.'</span><a '.$cevapyazanunvancolor.'  href="javascript:;" '.$cevapyazankulladi2.' data-id="'.$cevapyazanid.'"  data-user="'.$cevapyazankulladi.'" onmouseover="loaduserWidget(this)">'.$cevapyazankulladi.''.$cevapyazanunvanyazi.'</a>
<span class="date" style=""><span>•</span> '.$cevaptarih.'</span></div>
<div class="spoiler-text" style="display: '.$cevapspoilerne.'">'.$lang["COMMENT_LINK_8C"].' <span>'.$lang["COMMENT_LINK_8B"].'</span></div>
<p style="display: '.$cevapspoilerne2.';">'.$cevapyorum.'</p>
<div class="c-alt" style="">
<a href="javascript:;" onclick="openSubcommentForm('.$cevapid.', this, 1)" class="open-subcomment">'.$lang["COMMENT_LINK_7A"].'</a> • '.likeitems($cevapid).'
</div>
<div id="comment_content_'.$cevapid.'" style="position: relative"><div class="form-loader"></div>
'.yorumcevaplaryanitget($cevapid,"").'

</div>
'.yorumaddsubcomment($cevapid).'
</div>
</div>';		
		
		}
		}
$veri=$veri.'</div>';


	
return $veri;

	
} 
function yorumcevaplaryanitget($cevapid,$fullmu)
{	
global $dbpdo;
global $lang;
global $db_siteadres;
$veri="";



		$yorummesajsay  = $dbpdo->query("select count(*) from yorumlar where icerikid = '".$cevapid."' and tip = 'yorumcevapyanit' and onay = '1'")->fetchColumn();		
		
		if ($fullmu=="full"){
			$goster="0";
			$limit=$yorummesajsay;
		
		}else{
			if ($yorummesajsay>2){
			$goster=$yorummesajsay-2;
			$limit="2";
			}else{
			$goster="0";
			$limit=$yorummesajsay;

			}
		}
		
		if ($fullmu!="full" and $yorummesajsay > "2") {$veri=$veri.'<a class="load-more-comment" href="javascript:;" onclick="loadComments('.$cevapid.',this,1)">'.$lang["COMMENT_Z_1"].''.$yorummesajsay.''.$lang["COMMENT_Z_2"].' <span class="fa fa-angle-down"></span></a>';}
		
		$veri=$veri.'<div id="comments'.$cevapid.'">';
		
		if($yorummesajsay > "0"){

		
			$rsqasd  = $dbpdo->query("select tarih,yorum,id,ekleyen,spoiler,u_name,u_email from yorumlar where icerikid = '".$cevapid."' and tip = 'yorumcevapyanit' and onay = '1' order by tarih asc limit $goster, $limit");
			$rowiaslew = $rsqasd->fetchAll();
			
		
		
		foreach ($rowiaslew as $gelaslcev){	

		$cevapyanittarih=timeConvert($gelaslcev["tarih"]);
		$cevapyaniyorum=nl2br(cust_text(temizle_replace($gelaslcev["yorum"])));
		$cevapyaniid=$gelaslcev["id"];
		$cevapyaniekleyen=$gelaslcev["ekleyen"];
		$cevapyanispoiler	=  $gelaslcev['spoiler'];
		$u_name	=  $gelaslcev['u_name'];
		$u_email	=  $gelaslcev['u_email'];
				
				if($cevapyanispoiler==1){$cevapyanispoilerne="block";$cevapyanispoilerne2="none";}else{$cevapyanispoilerne="none";$cevapyanispoilerne2="block";}
				
	
				if($cevapyaniekleyen==0){
					$cevapyaniyazanid="";
					$cevapyaniyazankulladi=$u_name;
					$cevapyaniyazankulladi2="";
					$cevapyaniyazanicon=resimcreate("","s","member/avatar");
					$cevapyaniyazanunvan="0";
				}else{
					
				$gelenmu  = $dbpdo->query("Select id,kulladi,seolinki,icon,unvan from uyeler where id = '".$cevapyaniekleyen."' limit 1");
				$gelenmu = $gelenmu->fetch();
				$cevapyaniyazanid=$gelenmu["id"];
				$cevapyaniyazankulladi=$gelenmu["kulladi"];
				$cevapyaniyazankulladi2='onclick="profilego('.$cevapyaniyazanid.')"';
				$cevapyaniyazanicon=resimcreate($gelenmu["icon"],"s","member/avatar");
				$cevapyaniyazanunvan=$gelenmu["unvan"];
				}
				
				
				if($cevapyaniekleyen==0){
					$cevapyaniyazanunvancolor='class="guest" style="cursor:default"';$cevapyaniyazanunvanyazi='<span class="tag guest">'.$lang["COMMENT_TIP_2B"].'</span>';
				}else{
				if($cevapyaniyazanunvan==1){$cevapyaniyazanunvancolor='class="admin"';$cevapyaniyazanunvanyazi='<span class="tag admin">'.$lang["COMMENT_TIP_2C"].'</span>';}
				elseif($cevapyaniyazanunvan==5){$cevapyaniyazanunvancolor='class="mod"';$cevapyaniyazanunvanyazi='<span class="tag moderator">'.$lang["COMMENT_TIP_2D"].'</span>';}
				else{$cevapyaniyazanunvancolor="";$cevapyaniyazanunvanyazi="";}
				}	
				
				
				
			
				
	$islemler='';	
	 if (isset($_SESSION['oturumid'])) { if ($_SESSION['kimdir']=="1") { 
	 $islemler='<a href="../admin/comments.php?comment='.$cevapyaniid.'" target="_blank" style="margin-right:5px;"><span class="fa fa-pencil"></span></a> <a href="javascript:;" onclick="CommentDelete('.$cevapyaniid.')" title="'.$lang["COMMENT_LINK_9B"].'"><span class="fa fa-times"></span></a> '; 
	  }else if ($_SESSION['oturumid']!=$cevapyaniyazanid) {
		$islemler='<a href="javascript:;" data-open="#comment-report" onclick="comment_complain('.$cevapyaniid.')" title="'.$lang["COMMENT_LINK_9A"].'"><span class="fa fa-flag"></span></a>'; 
	  }
	  }	
	  
$veri=$veri.'
<div class="comment" id="yorum'.$cevapyaniid.'" data-id="'.$cevapyaniid.'">
<img class="avatar" src="'.$cevapyaniyazanicon.'" alt=""/>
<div class="c-text"><div class="c-top"><span class="report">'.$islemler.'</span><a '.$cevapyaniyazanunvancolor.'  href="javascript:;" '.$cevapyaniyazankulladi2.' data-id="'.$cevapyaniyazanid.'" data-user="'.$cevapyaniyazankulladi.'" onmouseover="loaduserWidget(this)">'.$cevapyaniyazankulladi.''.$cevapyaniyazanunvanyazi.'</a>
<span class="date" style=""><span>•</span> '.$cevapyanittarih.'</span></div>
<div class="spoiler-text" style="display: '.$cevapyanispoilerne.'">'.$lang["COMMENT_LINK_8C"].' <span>'.$lang["COMMENT_LINK_8B"].'</span>
</div><p style="display: '.$cevapyanispoilerne2.';">'.$cevapyaniyorum.'</p>
<div class="c-alt" style=""><a href="javascript:;" onclick="openSubcommentForm('.$cevapid.', this, 1)" class="open-subcomment">'.$lang["COMMENT_LINK_7A"].'</a> • '.likeitems($cevapyaniid).'

 
</div>
</div>
</div>
';
		}
		}
// burda cevap'.$lang["COMMENT_LINK_7A"].'rının yeni formu oluşturmuyoruz bir önceki yorum gelen cevabın formundan '.$lang["COMMENT_LINK_3C"].'iyoruz. yani cevap yanit için yeni bir id alanı oluşturmadan  cevabı yanıtının altına yorum gidiyor
$veri=$veri.'</div>';

return $veri;
}
?>
<?php 
require_once("../../comments/inc/config.php"); 

require_once("../inc/cagir.php"); 


$action = $_GET['action']; 
if ($action == 'uyeduzenle') { 

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
	$facebook = $_POST["facebook"]; 

	$yasne = $yasyil.$yasay.$yasgun; 	
	
	if ($kulladi=="" or $seolinki=="" or $email=="") {
	echo "Kullanıcı adı, Kullanıcı Adresi veya Email alanları boş kalamaz";
	exit();
	}

	$rsqa = $dbpdo->query("select * from uyeler where kulladi like '$kulladi' and id not like '$uyeid' or seolinki like '$seolinki'  and id not like '$uyeid' or email like '$email' and id not like '$uyeid' ");
	$rsqaj = $rsqa->rowCount();
	if ($rsqaj>=1){
	echo "Kullanıcı adı, Kullanıcı Adresi veya Email adreslerinden bir veya bir kaçı farklı bir üye için kullanılıyor.";
	exit();
	}	
	
	$rsqa  = $dbpdo->query("select icon from uyeler where id like '$uyeid'");
	if($yeni = $rsqa->fetch()){
	
	$haberb_resim=$yeni["icon"];
	
	$olanresim=$haberb_resim;
	}else{
	$olanresim="";
	}
	
	if (isset($_FILES['icon']['name'])){
	$resimdonen=resimgo($_FILES['icon']['name'], $_FILES['icon']['type'], $_FILES['icon']['error'], $_FILES['icon']['tmp_name'] , 'uyeimg/presim', "$seolinki","$olanresim","","");
	}else{
	$resimdonen=$olanresim;
	}

	$sifremd5=md5($sifre);
	if($sifre>""){
	$return = $dbpdo->prepare("UpDate uyeler Set sifre = '$sifremd5' where id='$uyeid'");
	$return = $return->execute();
	}

	 $dbpdo->exec("UpDate uyeler Set icon = '$resimdonen', kulladi = '$kulladi' , unvan = '$unvan', seolinki = '$seolinki', isim = '$isim', soyisim = '$soyisim', email = '$email', facebook = '$facebook', cinsiyet = '$cinsiyet', yasne = '$yasne', sehir = '$sehir' where id like '$uyeid'");
	
	echo "ok";

}elseif ($action == 'uyebilgicek') { 

	$uyeid = $_POST["id"]; 

	if ($uyeid=="") {
	echo "boş kalamaz";
	exit();
	}
	


	$rsqa  = $dbpdo->query("select icon,seolinki,kulladi from uyeler where id = '$uyeid'");
	if($yeni = $rsqa->fetch()){
	
	$kulladi=$yeni["kulladi"];
	$icon=$yeni["icon"];
	$seolinki=$yeni["seolinki"];
	
	echo $kulladi."|".$icon."|".$seolinki."|".$uyeid;
	
	}
	
}elseif ($action == 'newpages') { 

$pagetip = $_POST["pagetip"];
$uzunaciklama = $_POST["uzunaciklama"];


	if ($pagetip=="" or $uzunaciklama=="") {
	echo "Alanları Doldurun";
	exit();
	}

	$rsqaj = $dbpdo->query("select * from pages where iceriktip like '$pagetip'")->rowCount();
	
	
	if ($rsqaj=="") {
	
	 $dbpdo->exec("INSERT INTO pages (text,iceriktip,tarih) VALUES ('$uzunaciklama' , '$pagetip' , '$phptarih')");

	echo "ok";
	exit();
	}else{
	 $dbpdo->exec("UpDate pages Set text = '$uzunaciklama', tarih = '$phptarih' where iceriktip like '$pagetip'");
	echo "edited";
	exit();
	}

}elseif ($action == 'uyebanla') { 
	$uye = $_GET['uye']; 
	$banla = $_GET['banla']; 

	if($banla=="yap"){
	 $dbpdo->exec("UpDate uyeler Set ban = '1' where seolinki like '$uye'");
	
	}elseif($banla=="kaldir"){
	 $dbpdo->exec("UpDate uyeler Set ban = '0' where seolinki like '$uye'");
	
	}
	
	header("Location: ../users.php?user=$uye");

}elseif ($action == 'uyeyoneticiyap') { 
	$uye = $_GET['uye']; 
	$yonetici = $_GET['yonetici']; 

	if($yonetici=="yap"){
	 $dbpdo->exec("UpDate uyeler Set unvan = '1' where seolinki like '$uye'");
	
	}elseif($yonetici=="kaldir"){
	 $dbpdo->exec("UpDate uyeler Set unvan = '0' where seolinki like '$uye'");
	
	}
	
	header("Location: ../users.php?user=$uye");
}
?>

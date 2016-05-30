<!DOCTYPE>
<?php 
	header('Content-Type: text/html; charset=utf-8');
	include ("functions/function.php");
	include ("functions/product.php");
?>

<link rel="stylesheet" type="text/css" href="css/style.css">

<link rel="stylesheet" type="text/css" href="css/core.css">

<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<!--theme-style-->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--fonts-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<!--//fonts-->
<script src="js/jquery.min.js"></script>

<?php include ("templates/front/header.php");?>	

<div class="container">
	<div class="shoes-grid">
	<a href="single.html">
	<div class="wrap-in">
		<div class="wmuSlider example1 slide-grid">		 
		   <div class="wmuSliderWrapper">		  
			   <article style="position: absolute; width: 100%; opacity: 0;">					
				<div class="banner-matter">
				<div class="col-md-5 banner-bag">
					<img class="img-responsive " src="images/wa.jpg" alt=" " />
					</div>
					<div class="col-md-7 banner-off">							
						<h2>Хамгийн хямд</h2>
						<label>Хамгийн хямд</label>
						<p>Шинэ бараа </p>					
						<span class="on-get">Цааш</span>
					</div>
					
					<div class="clearfix"> </div>
				</div>
				</article>
				
				<article style="position: absolute; width: 100%; opacity: 0;">					
				<div class="banner-matter">
				<div class="col-md-5 banner-bag">
					<img class="img-responsive " src="images/wat.jpg" alt=" " />
					</div>
					<div class="col-md-7 banner-off">							
						<h2>Хамгийн хямд</h2>
						<label>Хамгийн хямд</label>
						<p>Шинэ бараа </p>					
						<span class="on-get">Цааш</span>
					</div>
					
					<div class="clearfix"> </div>
				</div>
				</article>
				<article style="position: absolute; width: 100%; opacity: 0;">					
				<div class="banner-matter">
				<div class="col-md-5 banner-bag">
					<img class="img-responsive " src="images/pic2.jpg" alt=" " />
					</div>
					<div class="col-md-7 banner-off">							
						<h2>Хамгийн хямд</h2>
						<label>Хамгийн хямд</label>
						<p>Шинэ бараа </p>					
						<span class="on-get">Цааш</span>
					</div>
					
					<div class="clearfix"> </div>
				</div>
				</article>
				
			 </div>
			 </a>
            <ul class="wmuSliderPagination">
            	<li><a href="#" class="">0</a></li>
            	<li><a href="#" class="">1</a></li>
            	<li><a href="#" class="">2</a></li>
            </ul>
			 <script src="js/jquery.wmuSlider.js"></script> 
		  <script>
   			$('.example1').wmuSlider();         
   	     </script> 
        </div>
      </div>
       	</a>
   	      <!---->
   	     <div class="shoes-grid-left">
	<a href="single.html">				 
   	     	<div class="col-md-6 con-sed-grid">
			
   	     		<div class=" elit-grid"> 
				
   		     		<h4>Онцлох бараа</h4>
   		     		<label>Онцлох бараа</label>
					<p>Онцлох бараа </p>
					<span class="on-get">Онцлох бараа</span>						
				</div>						
				<img class="img-responsive shoe-left" src="images/pic2.jpg" alt=" " />
					
				<div class="clearfix"> </div>
				
   	     	</div>
			</a>
			<a href="single.html">	
   	     	<div class="col-md-6 con-sed-grid sed-left-top">
			
   	     		<div class=" elit-grid"> 
				
   		     		<h4>Онцлох бараа</h4>
   		     		<label>Онцлох бараа</label>
					<p>Онцлох бараа </p>
					<span class="on-get">Онцлох бараа</span>						
				</div>						
				<img class="img-responsive shoe-left" src="images/pic2.jpg" alt=" " />
					
				<div class="clearfix"> </div>
				
   	     	</div>
			</a>
   	     </div>
   	     <div class="products">
   	     	<h5 class="latest-product">Онцлох бараа</h5>	
   	     	  <a class="view-all" href="product.php">Дэргэрэнгүй<span> </span></a> 		     
   	     </div>
   	     <div class="product-left">
   	     	<?php
   	     		getProduct();
   	     	?>
   	     	 <div class="clearfix"> </div>
   	     </div>
   	     <div class="products">
   	     	<h5 class="latest-product">Шинэ бараа</h5>		     
   	     </div>
   	     <div class="product-left">
   	     	<?php
   	     		getProduct();
   	     	?>
   	     	 <div class="clearfix"> </div>
   	     </div>
   	     <div class="clearfix"> </div>
   	   </div>   
	   <div class="sub-cate">
		<div class=" top-nav rsidebar span_1_of_left">
			<h3 class="cate">Ангилал</h3>
			 <ul class="menu">
			 	<?php
			 		getCategory();
			 	?>
			</ul>
			</div>
		<!--initiate accordion-->
<script type="text/javascript">
	$(function() {
	    var menu_ul = $('.menu > li > ul'),
	           menu_a  = $('.menu > li > a');
	    menu_ul.hide();
	    menu_a.click(function(e) {
	        e.preventDefault();
	        if(!$(this).hasClass('active')) {
	            menu_a.removeClass('active');
	            menu_ul.filter(':visible').slideUp('normal');
	            $(this).addClass('active').next().stop(true,true).slideDown('normal');
	        } else {
	            $(this).removeClass('active');
	            $(this).next().stop(true,true).slideUp('normal');
	        }
	    });
	
	});
</script>	
	</div>
   	    <div class="clearfix"> </div>        	         
</div>


<?php include ("templates/front/footer.php");?>	
	
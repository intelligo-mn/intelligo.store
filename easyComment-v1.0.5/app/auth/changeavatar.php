<?php
require_once("../comments/inc/config.php"); 

if (!isset($_SESSION['oturumid'])){ 
		echo "Error";
	exit();
}
	
?>
<!DOCTYPE html>
<html lang="en" id="js-content">
  
 <head>
    <meta charset="utf-8">
    <title>Change Avatar</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
<link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="../assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />

<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
<link href="../assets/bootstrap/css/style.css" rel="stylesheet" type="text/css">
<link href="../assets/bootstrap/css/pages/signin.css" rel="stylesheet" type="text/css">

</head>

<body>

	<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">

			<a class="brand" href="javascript:;">
			<img alt="<?php echo $db_sitemotto; ?>" style="max-height:20px" src="<?php echo $db_siteadres ?>app/assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> Upload Avatar				
			</a>	

		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->


<div class="account-container">

	<div class="content clearfix">

		<?php
		if (isset($_GET['uploadfile'])){ 
		
		
			$olanresim=$_SESSION["icon"];
			
			if(substr($olanresim,0,4)=="http"){
				$olanresim="";
			}
			
			if (isset($_FILES['avatar']['tmp_name'])){
				require_once("../comments/inc/upload/uploadfunction.php"); 

				
				// $resimdonen=resimgo($_FILES['avatar']['name'], $_FILES['avatar']['type'], $_FILES['avatar']['error'], $_FILES['avatar']['tmp_name'] , 'member/avatar', "$_SESSION[seolinki]","$olanresim","","");
				$resimdonen="";
				if($resimdonen=="Invalid file"){
				ECHO '<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Alert!</strong> Must be: Gif,Png,Jpg.</div>';
				
				}else{
				

				//  $_SESSION['icon']=$resimdonen;
				// 	$return2 = $dbpdo->prepare("UpDate uyeler Set  icon = '$resimdonen' where id = '$_SESSION[oturumid]'");
				// 	$return2 = $return2->execute();
					

					ECHO '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong></div>
					
					<script>
						setTimeout(function(){ window.close(); }, 250);

					</script>
					';
					
				}
			}else{
				
				ECHO '<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Alert!</strong> No image select!</div>';
				
			}
		
		
		
		
		}
		?>
		<form action="?uploadfile" method="post"  enctype="multipart/form-data">
		
			<div class="login-fields">
				
				<div class="field">
					<label for="avatar">Photo File:</label>
					<input type="file" id="avatar" name="avatar" value="" placeholder="Avatar" />
				</div> <!-- /field -->
		
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
			
									
				<button class="button btn btn-success btn-large" >Upload</button>
				
			</div> <!-- .actions -->
			
			
			
		</form>
		
	</div> <!-- /content -->

</div> <!-- /account-container -->

<script src="../assets/bootstrap/js/jquery.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.js"></script>
<script src="../assets/signin.js"></script>


 <script>
    

    (function () {
        // https://gist.github.com/3108177
        var supportsGCS = "defaultView" in window.document && "getComputedStyle" in window.document.defaultView;

        function getStyle(element, property) {
            // `element.ownerDocument` returns the used style values relative to the
            // element's parent document (which may be another frame). `defaultView`
            // is required for Safari 2 support and when retrieving framed styles in
            // Firefox 3.6 (https://github.com/jquery/jquery/pull/524#issuecomment-2241183).
            var style = supportsGCS ? element.ownerDocument.defaultView.getComputedStyle(element, null) : element.currentStyle;
            return (style || element.style)[property];
        }

        function getWindowPadding() {
            // Based in part on
            // http://stackoverflow.com/questions/1275849/get-height-of-enter-browser-window-in-ie8

            if (window.outerHeight !== undefined) {
                return {
                    x: window.outerWidth - window.innerWidth,
                    y: window.outerHeight - window.innerHeight
                }
            }

            var docElem = document.documentElement;

            // Old browser (IE8 and below). Need to resize window, observe change in
            // clientWidth/Height in order to determine padding.
            var oldX = docElem.clientWidth;
            var oldY = docElem.clientHeight;

            // clientWidth/Height *will* be smaller than the current window size. But
            // not by much. I figure this is the least jarring size to pick.
            window.resizeTo(oldX, oldY);

            var padding = {
                x: oldX - docElem.clientWidth,
                y: oldY - docElem.clientHeight
            };

            // Restore window to original dimensions
            window.resizeTo(oldX + padding.x, oldY + padding.y);

            return padding;
        }

        function getScrollbarWidth() {
            // credits: http://davidwalsh.name/detect-scrollbar-width
            // Create the measurement node
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "scrollbar-measure";
            document.body.appendChild(scrollDiv);

            // Get the scrollbar width
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            // Delete the DIV
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        }

        if (window.resizeTo) {
            window.onload = function () {
				
                // Should only calculate document dimensions after page has fully loaded.
                // I've also observed some funky results without using setTimeout to wrap
                // the callback. Other applications seem to resize on a delay, so I suspect
                // this is necessary.
                setTimeout(function () {
                    var content = document.getElementById('js-content'),
                        buffer = 130,
                        width = content.offsetWidth,
                        height = content.offsetHeight,
                        padding = getWindowPadding(),
                        scrollWidth = getScrollbarWidth(),
                        viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        viewportWidth = window.innerWidth || ((document.documentElement.clientWidth || document.body.clientWidth) + scrollWidth),
                        browser = window.outerHeight || viewportHeight;
				
                    // resize only when content is cropped
                    if(viewportHeight < height + buffer || viewportWidth < width) {
                        window.resizeTo(Math.max(width, viewportWidth), height + (browser - viewportHeight) + buffer);
                    }
                }, 250);
            }
        }
    }());
</script>

</body>

 </html>
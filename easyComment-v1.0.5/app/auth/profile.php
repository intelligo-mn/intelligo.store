<?php
require_once("../comments/inc/config.php"); 


	
	if (isset($_GET['user'])){ 
		
		$rsqawy = $dbpdo->query("select id,kulladi,seolinki from uyeler where id = '$_GET[user]'");
		if($gelenww = $rsqawy->fetch()){
		$id= $gelenww["id"];
		$kulladi= $gelenww["kulladi"];
		$seolinki= $gelenww["seolinki"];
		}else{
		exit();
		}
		
	}else{
		exit();
	}
?>
<!DOCTYPE html>
<html lang="en" id="js-content">
  
 <head>
    <meta charset="utf-8">
    <title>Signup</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
<link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="../assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />


    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
<link href="../assets/bootstrap/css/style.css" rel="stylesheet" type="text/css">
<link href="../assets/bootstrap/css/pages/signin.css" rel="stylesheet" type="text/css">

</head>

<body  style="background-color: #fff;">

	<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">
	
			
			<a class="brand" href="javascript:;">
			<img alt="<?php echo $db_sitemotto; ?>" style="max-height:20px" src="<?php echo $db_siteadres ?>app/assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> <?php echo $kulladi; ?>				
			</a>
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->

<div class="container" style="margin-top: 25px;">
	   <div class="row">
		<div class="span12">
		<!-- easyComment Content Div -->
		<div id="easyComment_Content"></div>

        </div>
        <!-- /span12 --> 
		</div>
      <!-- /row --> 
    </div>


<script src="../assets/bootstrap/js/jquery.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.js"></script>
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
			<script type="text/javascript">
			// CONFIGURATION VARIABLES
			var easyComment_Theme = 'Default';
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
</body>

 </html>
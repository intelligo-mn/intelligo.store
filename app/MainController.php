<?php
	class MainController{
		
		public $currency_info = array(
			array('code' => 'EUR', 'name' => 'Euro'),
			array('code' => 'USD', 'name' => 'US Dollar'),
			array('code' => 'MNT', 'name' => 'Mongolian Tugrug')
		);
		
	
		function get_random_string($valid_chars, $length){
    
			$random_string = "";

			$num_valid_chars = strlen($valid_chars);

			for ($i = 0; $i < $length; $i++)
			{
				$random_pick = mt_rand(1, $num_valid_chars);

				$random_char = $valid_chars[$random_pick-1];

				$random_string .= $random_char;
			}

			return $random_string;
		}

		function sanitize($string){
		
			$string = mysql_escape_string(trim(strip_tags(stripslashes($string))));
			return $string;
		}
		
		function check_integer($which) {
			if(isset($_GET[$which])){
				if (intval($_GET[$which])>0) {
					return intval($_GET[$which]);
				} else {
					return false;
				}
			}
			return false;
		}

		function get_current_page() {
			if(($var=$this->check_integer('page'))) {
		
				return $var;
			} else {
		
				return 1;
			}
		}

		function doPages($page_size, $thepage, $query_string, $total=0, $keyword) {
		
			$index_limit = 10;
			
		
			$query='';
			
			if(strlen($query_string)>0){
				$query = "&amp;".$query_string;
			}
		
			$current = $this->get_current_page();
			
			$total_pages=ceil($total/$page_size);
			$start=max($current-intval($index_limit/2), 1);
			$end=$start+$index_limit-1;

			echo '<div id="page_num">';
			echo '<ul class="pagination">';

			if($current==1) {
				echo '';
			} else {
				$i = $current-1;
				echo '<li><a href="'.$thepage.'?page='.$i.$query.'&keyword='.$keyword.'" rel="nofollow" title="go to page '.$i.'">&laquo;</a></li>';
		
			}
		
			if($start > 1) {
				$i = 1;
				echo '<li><a href="'.$thepage.'?page='.$i.$query.'&keyword='.$keyword.'" title="go to page '.$i.'">'.$i.'</a></li>';
			}

			for ($i = $start; $i <= $end && $i <= $total_pages; $i++){
				if($i==$current) {
					echo '<li class="active"><a>'.$i.'</a></li>';
				} else {
					echo '<li><a href="'.$thepage.'?page='.$i.$query.'&keyword='.$keyword.'" title="go to page '.$i.'">'.$i.'</a></li>';
				}
			}

			if($total_pages > $end){
				$i = $total_pages;
				echo '<li><a href="'.$thepage.'?page='.$i.$query.'&keyword='.$keyword.'" title="go to page '.$i.'">'.$i.'</a></li>';
			}

			if($current < $total_pages) {
				$i = $current+1;
				echo '<li><a href="'.$thepage.'?page='.$i.$query.'&keyword='.$keyword.'" rel="nofollow" title="go to page '.$i.'">&raquo;</a></li>';
			} else {
				echo '';
			}
			
			echo '</ul>';

			if ($total != 0){
				echo '<p><br>( total '.$total.' )</p></div>';
			}else {
				echo '</div>';
			};
		 
		}		
	}
?>
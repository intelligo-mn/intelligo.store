<?php
	date_default_timezone_set("UTC");
	class DGLSecure{
		public function generateAccessKey(){
			$year = date("Y");
			$month = date("m");
			$day = date("d");
			$D = 4;
			$G = 7;
			$L = 12;
			return ($year + $month + $day) *$D*$G*$L * ($year * $L + $month * $G + $day * $D);
		}
	}

?>
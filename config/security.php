<?php
	date_default_timezone_set("UTC");
	class DGLSecure{
		public function generateAccessKey($accesskey){
			$year = date("Y");
			$month = date("m");
			$day = date("d");
			$D = 4;
			$G = 7;
			$L = 12;

			$value1 = ($year + $month + $day) *$D*$G*$L * ($year * $L + $month * $G + ($day-1) * $D);
			$value2 = ($year + $month + $day) *$D*$G*$L * ($year * $L + $month * $G + $day * $D);
			$value3 = ($year + $month + $day) *$D*$G*$L * ($year * $L + $month * $G + ($day+1) * $D);

			return $value1 == $accesskey || $value2 == $accesskey || $value1 == $accesskey;
		}
	}

?>
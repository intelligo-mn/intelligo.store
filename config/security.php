<?php
	date_default_timezone_set("UTC");
	class AppBaseSecure{
		public function generateAccessKey($accesskey){
			$year = date("Y");
			$month = date("m");
			$day = date("d");
			$day1 = $day - 1;
			$day2 = $day + 1;
			$D = 4;
			$G = 7;
			$L = 12;

			$value1 = ($year + $month + $day) *$D*$G*$L * ($year * $L + $month * $G + $day * $D);
			$value2 = ($year + $month + $day1) *$D*$G*$L * ($year * $L + $month * $G + $day1 * $D);
			$value3 = ($year + $month + $day2) *$D*$G*$L * ($year * $L + $month * $G + $day2 * $D);

			return $value1 == $accesskey || $value2 == $accesskey || $value3 == $accesskey;
		}
	}

?>
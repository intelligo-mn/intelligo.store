<?php
class Helper
{
	public static function makeArray($array = null){
		return is_array($array) ? $array : array($array);
	}
}
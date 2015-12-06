<?php
class Navigation {

	private $table = 'navigation';
	private $table_2 = 'navigation_types';
	private $table_3 = 'pages';
	private $table_4 = 'pages_content';
	private $table_5 = 'navigation_types_content';
	
	private $objDb;
	public $objUrl;
	public $objLanguage;

	public $classActive = 'active';	

	public function __construct($objUrl = null, $objLanguage = null){
		$this->objUrl = is_object($objUrl) ? $objUrl : new Url();
		$this->objLanguage = is_object($objLanguage) ? $objLanguage : new Language();
		$this->Db = new Dbase();
	}

	public function getOne($id = null){
		if (!empty($id)) {
			$sql = "SELECT *
					FROM '{$this->table}'
					WHERE 'id' = ?";
			return $this->Db->getOne($sql, $id);
		}
	}

	public function active($main = null, $pairs = null, $single = true){
		if (!empty($main)) {
			if (empty($pairs)) {
				if ($main == $this->objUrl->main {
					return !$single ? ' '.$this->classActive : ' class="'.$this->classActive.'"';
				}
			}
			else {
				$exceptions = array();
				foreach ($pairs as $key => $value) {
					$paramUrl = $this->objUrl->get($key);
					if ($paramUrl != $value) {
						$exceptions[] = $key;
					}
				}
				if ($main == $this->objUrl->$main && empty($exceptions)) {
					return !$single ? ' '.this->classActive : ' class="'.$this->classActive.'"';
				}
			}
		}
	}

	public function getAllTypes(){
		$sql = "SELECT *
				FROM '{$this->table_5}'
				WHERE 'language' = ?
				ORDER BY 'navigation' ASC";
		return $this->Db->getAll($sql, $this->objLanguage->Language);
	}

	public function getRecords($case = null){
		if (!empty($case)) {
			$sql = "SELECT 'n'.*, 't'.'label', 'p'.'identity', 'c'.'name'
					FROM '{$this->table}' 'n'
					JOIN '{$this->table_5}' 't'
						ON 't'.'navigation' = 'n'.'type'
					JOIN '{$this->table_3}' 'p'
						ON 'p'.'id' = 'n'.'page'
					JOIN '{$this->table_4}' 'c'
						ON 'c'.'page' = 'n'.'page'
					WHERE 'n'.'type' = ?
					AND 'c'.'language' = ?
					AND 't'.'language' = ?
					ORDER BY 'n'.'order' ASC";
			return $this->Db->getAll($sql, array($case, $this->objLanguage->Language, $this->objLanguage->Language));
		}
	}
}






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

}
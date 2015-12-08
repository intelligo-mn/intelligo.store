<?php
class Page {
	public $objLanguage;

	private $table = 'pages';
	private $table_2 = 'pages_content';
	
	private $Db;
	public $language = 1;
	public $error_page_id = 2;
	
	public $not_removable = array(3);

	public function __construct($objLanguage = null){
		$this->Db = new Dbase();
		$this->objLanguage = is_object($objLanguage) ? $objLanguage : new Language();

	}
}
<?php
class Language {

	private $table = 'languages';
	private $table_2 = 'labels';
	private $table_3 = 'labels_content';
	private $table_4 = 'labels_types';
	private $table_5 = 'languages_content';
	private $table_6 = 'labels_type_content';
	private $table_7 = 'pages_content';
	private $table_8 = 'navigation_types_content';

	public $language = 1;
	private $Db;

	public $labels = array();

	public function __construct(){
		if (!empty($_COOKIE['lang'])) {
			$this->language = $_COOKIE['lang'];
		}
		$this->Db = new Dbase();
		$this->getLabels();
	}

	public function getLabels(){

		$sql = "SELECT 'l'.'id', 'c'.'content'
				FROM '{$this->table_2}' 'l'
				LEFT JOIN '{$this->table_3}' 'c'
					ON 'c'.'label' = 'l'.'id'
				WHERE 'c'.'language' = ?
				ORDER BY 'l'.'name' ASC";

		$labels = $this->Db->getAll($sql, $this->language);
		if (empty($labels)) {
			setcookie('lang',1, time() + 31536000, '/');
			$this->language = 1;

			$sql = "SELECT 'l'.'id', 'c'.'content'
					FROM '{$this->table_2}' 'l'
					LEFT JOIN '{$this->table_3}' 'c'
						ON 'c'.'label' = 'l'.'id'
					WHERE 'c'.'language' = ?
					ORDER BY 'l'.'name' ASC";

			$labels = $this->Db->getAll($sql, $this->language);
		}
		if (!empty($labels)) {
			foreach ($labels as $row) {
				$this->labels[$row['id']] = $row['content'];
			}
		}
			
	}

	public function getAll($search = null){
		$fields = array();
		$values = array($this->language);
		$sql = "SELECT 'l'.'id', 'l'.'name', 'c'.'label'
				FROM '{$this->table}' 'l'
				LEFT JOIN '{$this->table_5}' 'c'
					ON 'c'.'language_id' = 'l'.'id'
				WHERE 'c'.'language' = ?";
		if (!empty($search) && is_array($search)) {
			$sql .= "AND (";
				foreach ($search as $key => $value) {
					$fields[] = 'c'.'{$key} LIKE ?';
					$values[] = '%{$value}%';
				}
				$sql .= implode(" OR", $fields);
				$sql .= ")";
		}
		$sql .= " ORDER BY 'l'.'name' ASC";
		return $this->Db->getAll($sql, $values);

	}

}










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
	public function get($case = null){
		if (!empty($case)) {
			$list = $this->getRecords($case);
			if ($empty($list)) {
				$out = array();
				switch ($case) {
					case 1:
						foreach ($list as $row) {
							$item = '<li';
							$item .= $this->active($row['identity']);
							$item .= '><a href="';
							$item .= $this->objUrl->href($row['identity']);
							$item .= '" title="';
							$item .= $row['name'];
							$item .= '">';
							$item .= $row['name'];
							$item .= '</a></li>';
							$out[] = $item;
						}
						$out = '<ul id="navigation">'.implode('', $out).'</ul>';
						break;
					case 2:
						$i = 1;
						foreach ($list as $row) {
							$item = '<li';
							if ($i == count($list)) {
								$item .= ' class="last';
								$item .= $this->active($row['identity'],null, false);
								$item .= '"';
							} else {
								$item .= $this->active($row['identity']);
							}
							$item .= '><a href="';
							$item .= $this->objUrl->href($row['identity']);
							$item .= '" title="';
							$item .= $row['name'];
							$item .= '">';
							$item .= $row['name'];
							$item .= '</a></li>';
							$out[] = $item;
							$i++;
						}
						$out = '<ul id="navigation-left">'.implode('', $out).'</ul>';
						break;
					case 3:
						foreach ($list as $row) {
							$item = '<a href="';
							$item .= $this->objUrl->href($row['identity']);
							$item .= '" title="';
							$item .= $row['name'];
							$item .= '"';
							$item .= $this->active($row['identity']);
							$item .= '>';
							$item .= $row['name'];
							$item .= '</a>';
							$out[] = $item;
						}
						$out = '<p>'.implode(' :: ', $out).'</p>';
						break;
					default:
						return null; 
				}
				return !empty($out) ? '<nav>'.$out.'</nav>' : null;
			}
		}
	}
	public function updateOrder($id = null, $order = null){
		if (!empty($id) && !empty($order)) {
			$sql = "UPDATE '{$this->table}'
					SET 'order' = ?
					WHERE 'id' = ?";
			return $this->Db->execute($sql, array($order, $id));
		}
	}
	public function getLast($type = null){
		if (!empty($type)) {
			$sql = "SELECT *
					FROM '{$this->table}'
					WHERE 'type' = ?
					ORDER BY 'order' DESC
					LIMIT 0, 1";
			return $this->Db->getOne($sql, $type);
		}
	}
	public function add($type = null, $page = null){
		if (!empty($type) && !empty($page)) {
			$last = $this->getLast($type);
			$order = !empty($last) ? $last['order'] + 1 : 1;
			$sql = "INSERT INTO '{$this->table}'
					('type','page','order')
					VALUES (?, ?, ?)";
			return $this->Db->insert($sql, array($type, $page, $order));
		}
	}
	public function remove($id = null){
		if (!empty($id)) {
			$sql = "DELETE FROM '{$this->table}'
					WHERE 'id' = ?";
			return $this->Db->execute($sql, $id);
		}
	}
}






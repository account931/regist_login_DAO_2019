<?php
    namespace Cubet;
	
	
	class DAO_Object extends Connection {
  private $table;
  private $connection;
 
  public function __construct($table) {
    $this->setTable($table);
    $this->connection = new Connection();
  }
 
  // Define get/set
  public function getTable() { return $this->table; }
  public function setTable($name) { $this->table = '`' . $name '`'; }
  public function getConnection() { return $this->connection; }
 
  public function getAll() { ... }
  public function getById() { ... }
  public function deleteById() { ... }
  ...
}
	
	
	
?>
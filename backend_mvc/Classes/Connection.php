<?php
 namespace Namespace2;
include("config/db_config.php");
	
	
	
class Connection {
  private $connection;
  //private $host = getenv('DB_HOST');
  //private $user = getenv('DB_USER');
  //private $pass = getenv('DB_PASS');

  public function __construct() {
    //$this->connection = new mysqli($this->host, $this->user, $this->pass, $this->db);
  }

  public function query($sql) {
    return $this->connection->query($sql);
  }
  
  public function test() {
    echo "<br>TESSTTT " . MYSQL_HOST;
  }
  
}


?>
<?php
 namespace Namespace2;
include("config/db_config.php");
	
	
	
class Connection {
	/*
  //private $connection;
  //private $host = getenv('DB_HOST');
  //private $user = getenv('DB_USER');
  //private $pass = getenv('DB_PASS');

  public function __construct() {
    //$this->connection = new mysqli($this->host, $this->user, $this->pass, $this->db);
  }

  public function query($sql) {
    return $this->connection->query($sql);
  }
  */
  
  
  
 





//singletone
// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
    protected static $_instance;  // class instance
  
    public static function getInstance()// get  a class instance
    { 
        if (self::$_instance === null){ // if  class instance  does  not  exist
            self::$_instance = new self;  // create  new  class instance
         } 
         return self::$_instance; // returen  class instance
     }
	 
    //constructor
    private  function __construct(){ 
       $this->connectDB(); //call  this  Class   function which  creates connection  to  DB 
   }
   
   //prohibit  object cloning by  "private "
   private function __clone() { }
 
   //prohibit  object cloning by  "private "       
   private function __wakeup() {}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
//end  singletone





// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
  public function connectDB()
  { 
   
    global $conn;
    $servername = MYSQL_HOST;   //Host  const from config/db_config.php");
    $username = MYSQL_LOGIN;    //Login const from config/db_config.php");
    $password = MYSQL_PASSWORD; //Passw const from config/db_config.php");
	$database = MYSQL_DATABASE;
	
    try {
        $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "</br>Connected successfully to  DataBase"; 
        //$_POST['connection_flag']='connection_flag_OK';
		
    } catch(PDOException $e) {
       echo "</br>Connection failed: " . $e->getMessage();
    }
  } //END function 
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//



 public static function test() {
    echo "<br>TEST OF Connection->  " . MYSQL_HOST;
  }
  


}

?>
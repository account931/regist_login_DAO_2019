<?php
namespace Namespace2;
include("config/db_config.php");
	
	
	
class ConnectionX {
	
	
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
  
  
  
 
//global $conn;




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
   private function __clone() {}
 
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
  public static function connectDB()
  { 
   
    global $connX;
    $servername = MYSQL_HOST;   //Host  const from config/db_config.php");
    $username = MYSQL_LOGIN;    //Login const from config/db_config.php");
    $password = MYSQL_PASSWORD; //Passw const from config/db_config.php");
	$database = MYSQL_DATABASE;
	
	
	
    try {
        $connX = new \PDO("mysql:host=$servername;dbname=$database", $username, $password); //MEGA ERROR was here due to namespace, should be {new \PDO} not {new PDO}. Or simply, u can {use \PDO;}
        // set the PDO error mode to exception
        //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "</br>Connected successfully(singletone) to DataBase-> " . $database; 
        //$_POST['connection_flag']='connection_flag_OK';
		
    } catch(PDOException $e) {
       echo "</br>Connection failed: " . $e->getMessage();
    }
  } //END function 
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//



    public static function testtt() {
        echo "<br>TEST OF Connection->  " . MYSQL_HOST;
    }
  


}

?>
<?php
// Class   for  GetTemplate  function
//Comment  this  function in index.php, add "require"  and  use  $get = new GetTemplateClass() $get->GetTemplate($);

 namespace ControllerName;
 class ControllerX
 {
	
	
    // **************************************************************************************
    // **************************************************************************************
    // **                                                                                  **
    // **                                                                                  **
    public function getTemplateR($fileR)
    {
		if (file_exists($fileR)) {  
		    //echo 22222;
            ob_start(); 
            include($fileR); 
            $htmlR = ob_get_contents();  
            ob_end_clean(); 
            return $htmlR;
		} else {
			echo "<p class='red'>PAGE DOES NOT EXIST</p>";
			//throw new Exception("Value must be 1 or below");
		}
    }
    // **                                                                                  **
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	//call a relevant View template, temeplate name and $_GET must be set equal
	// **************************************************************************************
    // **************************************************************************************
    // **                                                                                  **
    // **                                                                                  **
    public function getRoute()
    {
		//if no GET display main
		if(empty($_GET)){ 
			echo $this->getTemplateR('php_my_classes/View/main.php');
		} else{ 
		    try{
		        $getName = explode("?",$_SERVER['REQUEST_URI'])[1]; //gets parametr name after {?}
			    echo $this->getTemplateR('php_my_classes/View/' . $getName . '.php');
			} catch(Exception $e){
				echo 3333;
				echo 'Message: ' .$e->getMessage();
			}
		}
    }
    // **                                                                                  **
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
 }
?>

<?php
//error_reporting(0);    //0 = error reporting is switched OFF 
ini_set('display_errors',1);
error_reporting(E_ALL | E_STRICT);
		
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Data Object Access">
  <meta name="keywords" content="registration">
  <meta name="author" content="">

  <title>Sign up/Sign in(DAO)</title>

  <!-- Bootstrap core CSS -->
  <link href="template_vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- CSS STYLES -->
  <link href="css/template_css/scrolling-nav.css" rel="stylesheet"><!-- template theme provided css-->
  <link href="css/my_css/mycss.css" rel="stylesheet"><!--my own css-->
  <link href="css/my_css/loader.css" rel="stylesheet"><!--my own css-->
  
  <!--Favicon-->
  <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

</head>

<body id="page-top" >
<div id="all" class="animate-bottom">
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Sign up/Sign in(DAO)</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
	  
	  <ul class="navbar-nav ml-auto">
		<!-- explode("?",$_SERVER['REQUEST_URI'])[0] gets the base folder without $GET(after ?) -->
		<!-- $GET name must be the same as a relevant view file in php_my_classes/Views -->
		
		<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="<?php echo explode("?",$_SERVER['REQUEST_URI'])[0];?>">Home</a>
          </li>
		  
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="<?php echo explode("?",$_SERVER['REQUEST_URI'])[0]; ?>?login=on">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href=" <?php echo explode("?",$_SERVER['REQUEST_URI'])[0]; ?>?register">Sign up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="<?php echo explode("?",$_SERVER['REQUEST_URI'])[0]; ?>login">Test SEF</a>
          </li>
        </ul>
	  
        
      </div>
    </div>
  </nav>

  
  <header class="bg-primary text-white">
    <div class="container text-center">
      <h1>Welcome to Sign up/Sign in(DAO)</h1>
      <p class="lead">freshly redesigned for Bootstrap 4</p>
    </div>
  </header>

  
  <!--------------------------------- Main Div ----------------------------------------->
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <!--<h2>Sign up/Sign in(DAO)</h2>-->
         
		  <?php
		  // **************************************************************************************
          // **************************************************************************************
          //                                                                                     **  
		  require 'vendor/autoload.php'; //Composer autoload
		  
		  //Class that uses PSR-4 namespace. It is set in composer.json in {"psr-4": {}}
		  
		   //Namespace variant_1 TEST----------
			use Cubet\ExampleClass as Dima;
			//$class = new Cubet\ExampleClass();
			$class = new Dima();//new Forkk\ExampleClass();
			$class->example_method();  //echo Namespace_1 is OK
			//END Namespace variant_1 TEST-----
			
			
			//Main Controller, triggering {getRoute()}, which uses {getTemplateR($fileR)} ---------------------
			use ControllerName\ControllerX;
			$controller_main = new ControllerX();
			//$mainContent = $controller_main->getTemplateR('php_my_classes/View/main.php');
		    //echo $mainContent;
			//Main Controller Router, decides which view template to include
			$controller_main->getRoute();
			//END Main Controller, triggering {getRoute()}, which uses {getTemplateR($fileR)} ---------------------
			
			
			
			//DB Singletone Connection
			use Namespace2\ConnectionX;
            //$connect = new Connection();
			ConnectionX::testtt();
			ConnectionX::connectDB(); //!!!!!!!!!!!! CAUSES CRASH //MEGA ERROR was here due to namespace in Classes/ConnectionX, there should be {new \PDO} not {new PDO}. Or simply, u can {use \PDO;}
			
			
			
			
	
	
	
	
			
			//END DB Singletone Connection
			// **                                                                                  **
            // **************************************************************************************
            // **************************************************************************************
		  ?>
		 
        </div> <!-- End <div class="col-lg-8 mx-auto" -->
      </div> <!-- End div class="row" -->
    </div> <!-- class="container" -->
  </section>
  <!--------------------------------- END Main Div ----------------------------------------->
  
  
  
  
  

  <!--
  <section id="services" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Services we offer</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
        </div>
      </div>
    </div>
  </section>
  -->

  
  
  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Sign up/Sign in(DAO) &copy; Dima <?php echo date("Y"); ?></p>
    </div>
    <!-- /.container -->
  </footer>

  
<div/><!--<div id="all">-->

  <!------ JavaScript ------------->
  <!-- Bootstrap core JavaScript -->
  <script src="template_vendor/jquery/jquery.min.js"></script>
  <script src="template_vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>

  
  <!-- Plugin JavaScript -->
  <script src="template_vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom provided JavaScript for this template theme -->
  <script src="js/template_js/scrolling-nav.js"></script>
  
   <!-- MY JS Browserify bundle-> Main (and the only) entry JS script -->
  <script src="js/my_js/dist/js/bundle_js.js"></script>

</body>

</html>

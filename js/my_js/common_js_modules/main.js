
var test_file = require('./modules/test.js');
var loader_file = require('./modules/loader.js');




$(document).ready(function(){

    //var test = new test_file();
	//test.loadExampleCoordinates();
	
	
	
   //preloader
    var loaderX = new loader_file();
	loaderX.loadLoader();
	
	
	
	
	

//Click SPLIT  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#splitButton").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        
		var splitModule = new split_file();
		
		//if textarea is empty, stop it all
		if(!splitModule.getFormValue()){
			return false; 
		}
		
		//Promise
		$.when( splitModule.getAjaxCoordinates())
		   .then(function( ) {    
                //splitModule.displayResults();		   
                setTimeout(splitModule.displayResults, 2000);               
           }); 
		
	
    });
//END Click SPLIT  Button
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

	




// END READY
});



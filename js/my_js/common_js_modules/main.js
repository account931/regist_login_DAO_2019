
var test_file = require('./modules/test.js');
var loader_file = require('./modules/loader.js');//Loader
var regExp_file = require('./modules/regexp_validation.js');//reg exp validation for registration





$(document).ready(function(){

    //var test = new test_file();
	//test.loadExampleCoordinates();
	
	
	
   //preloader
    var loaderX = new loader_file();
	loaderX.loadLoader();
	
	//RegExp validation for registartion
	var regExpCheck = new regExp_file();
	regExpCheck.checkField();
	
	
	
	
	
	
	
	
	
	
//NOT USED BELOW!!!!!!!!!!!!!!!!!!
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



//compare 2 passwords in registration

var $ = require('jquery');


function password_compare_validation(){
	

  


    //OnChange checks RegExp for reister fields -----------
    this.checkPasswords = function(butttonToDisable){  //arg is an id of Button
   
	    //check PASSWORD1 ON INPUT CHANGE
        $("#pwd").on('input', function(e) {
            //if password2 is not already empty			
	        if( $("#pwd2").val().trim()!= ""){
				//logic that checks if match or not display relevant message + block submit
			    var enforce = new disable_enable_button();
				enforce.check(butttonToDisable, $(this));	 //add arg id1, id2 
	      
        });
		
		
		
		 //check PASSWORD2 ON INPUT CHANGE
        $("#pwd2").on('input', function(e) {
            //if password1 is not already empty			
	        if( $("#pwd").val().trim()!= ""){
			    if($("#pwd").val().trim() != $("#pwd2").val().trim()){
					$(this).prevAll(".sp:first").html('Passwords does not match, check them');
				} else {
					$(this).prevAll(".sp:first").html('Passwords match');
				}					
		    } 
	      
        });
	  
    }
  
 

   
  
   
}





  function disable_enable_button(){
	
    ////logic that checks if match or not display relevant message + block submits -----------
    this.check = function(butttonToDisable, thisX){  
	    if($("#pwd").val().trim() != $("#pwd2").val().trim()){
					thisX.prevAll(".sp:first").html('Passwords does not match, check them');
					$("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', true);
                    $("#" + butttonToDisable).html/*val*/('Disabled');
				} else {
					thisX.prevAll(".sp:first").html('Passwords match');
					$("#" + butttonToDisable).prop('disabled', false);
                    $("#" + butttonToDisable).html('Submit');
					
				}
	}
}











module.exports = password_compare_validation;
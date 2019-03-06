//compare 2 passwords in registration if they match each other
//var $ = require('jquery');


function password_compare_validation(){
	
    //OnChange checks RegExp for reister fields -----------
    this.checkPasswords = function(butttonToDisable){  //arg is an id of Button
   
	    //check PASSWORD1 ON INPUT CHANGE
        $("#pwd").on('input', function(e) {
            //if password2 is not already empty, i.e user has already typed there something			
	        if( $("#pwd2").val().trim()!= ""){
				
				//logic that checks if passwords are equal and if to or not to display relevant message + block submit
				//can not simply use this.functionName
			    var enforce = new disable_enable_button(); //uses other module in this very file
				enforce.check(butttonToDisable, $(this), "pwd", "pwd2"); //args(submitButton ID to enable/disable, $(this), input1_ID, input2_ID))
			}
	      
        });
		
		
		
		 //check PASSWORD2 ON INPUT CHANGE
        $("#pwd2").on('input', function(e) {
            //if password1 is not already empty, i.e user has already typed there something			
	        if( $("#pwd").val().trim()!= ""){
				
				var enforce = new disable_enable_button();//uses other module in this very file
			   	enforce.check(butttonToDisable, $(this), "pwd2", "pwd"); //args(submitButton to enable/disable, this, input1_ID, input2_ID))				
		    } 
	      
        });
	  
    }
  
 

   
  
   
}


//==========================================================================================================





  function disable_enable_button(){
	
    //logic that checks if passwords are equal and if to or not to display relevant message + block submit
    this.check = function(butttonToDisable, thisX, input1_ID, input2_ID){  //args(submitButton to enable/disable, this, input1_ID, input2_ID)  
	
	    //if passwords don't match each other
	    if( $("#" + input1_ID).val().trim() != $("#" + input2_ID).val().trim()){
					thisX.prevAll(".sp:first").html('Passwords does not match, check them');
					$("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', true);
                    $("#" + butttonToDisable).html/*val*/('Disabled');
				} else {
					//if passwords DO match each other
					thisX.prevAll(".sp:first").html('Passwords match');
					$("#" + butttonToDisable).prop('disabled', false);
                    $("#" + butttonToDisable).html('Submit');
					$("#" + input2_ID).prevAll(".sp:first").html(''); //clears the the opposite error sign input if any(if type in #pwd, it clears error in #pwd2, and vice versa)
					
				}
	}
} //end function disable_enable_button()











module.exports = password_compare_validation;
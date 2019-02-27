//reg exp validation for registration SLAVE

var $ = require('jquery');

function regexp_validation_slave(){
	
  //this.RegExp_Template_Name = /^[a-zA-Z]{1,16}$/,
  

 
 
 
  //Function that Validate inputs  on change (confirm delete 2nd arg (id)?????). So far, validates 2nd input only, the 1st input is type="number" in html
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     ** 
  this.myValidate = function(thisX, id, regExp, butttonToDisable,  message, e)  //{e} -. it is change event from {$(document).on("change", '.fileCheck', function(e) { }
  //args($this, $this.id, RegExp, button to disable, message to show, event)
  {

     //if (e.target.files[0].name !=='')
     if ($("#" +id).val()!==''){
		
		
		//var fileName = e.target.files[0].name;  //gets the input file name
		//alert(fileName);
		
        //alert (id);
		//gets the input
        var idm = $("#" +id).val();   //alert('val is-> '+idm);    //$('input[type=file]').val()

        //if  REgEXp  match
        if (idm/*fileName*/.match(regExp)){
            thisX.prevAll(".sp:first").html('Correct');// erase  error  message //$("#" +id).prevAll(".sp:first").html('Correct');// erase  error  message
            $("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', false); //enable  button  //$(':input[type="button"]').prop('disabled', false);
            $("#" + butttonToDisable).html('Submit OK');
                      
         } else {  //if RegExp  does not  match
		 
             thisX.prevAll(".sp:first").html(message);   //$("#" +id).prevAll(".sp:first").html(message);   //finds the 1st prev span
             $("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', true);
             $("#" + butttonToDisable).html/*val*/('Disabled');
         }
     //  end if ($("#" +id).val()!==''){
   
     } else {//if  the input is empty, set no  error to span
         thisX.prevAll(".sp:first").html('');
		 $("#" + butttonToDisable).prop('disabled', false);
         $("#" + butttonToDisable).html('Submit');   
     } 
  }
  
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
 
 
 
 
 
 
  
}

module.exports = regexp_validation_slave;
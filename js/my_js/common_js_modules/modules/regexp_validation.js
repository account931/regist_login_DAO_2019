//reg exp validation for registration

var $ = require('jquery');
var regExp_file_slave = require('./regexp_validation_slave.js');//Uses function myValidate(reg exp validation for registration)

function regexp_validation(){
	
  //this.RegExp_Template_Name = /^[a-zA-Z]{1,16}$/,
  


  //OnChange checks RegExp for reister fields -----------
  this.checkField = function(){ 
      var RegExp_login = /^[a-zA-Z0-9]{1,16}$/;  //RegExp for Login
      var RegExp_name = /^[a-zA-Z]{1,16}$/;  //RegExp for Name
	  var RegExp_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;  //RegExp for E-mail
      
	  //Creates an object of regexp_validation_slave.js
	  var validateSlave = new regExp_file_slave();
	  
	  //check Login regExp on input change
      $("#login").on('input', function(e) { 
	      //calling the slave function myValidate() from regexp_validation_slave.js
	      validateSlave.myValidate($(this), this.id, RegExp_login, 'submitBTN', '   not a valid login ', e);
	      //args($this, $this.id, RegExp, button to disable, message to show, event)
      });
	  
	   //check Name regExp on input change
	   $("#name").on('input', function(e) { 
	      //calling the slave function myValidate() from regexp_validation_slave.js
	      var validateSlave = new regExp_file_slave();
	      validateSlave.myValidate($(this), this.id, RegExp_name, 'submitBTN', '   not a valid name ', e);
	      //args($this, $this.id, RegExp, button to disable, message to show, event)
      });
	  
	  //check Emai regExp on input change
	   $("#email").on('input', function(e) { 
	      //calling the slave function myValidate() from regexp_validation_slave.js
	      var validateSlave = new regExp_file_slave();
	      validateSlave.myValidate($(this), this.id, RegExp_email, 'submitBTN', '   not a valid e-email', e);
	      //args($this, $this.id, RegExp, button to disable, message to show, event)
      });
  }
  
  
 
 
 
 
 
 
 
  
}

module.exports = regexp_validation;
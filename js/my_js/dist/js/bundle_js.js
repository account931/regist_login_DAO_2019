(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var test_file = require('./modules/test.js');





$(document).ready(function(){

    var testt = new test_file();
	testt.loadExampleCoordinates();
	
	
	
	
	

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



},{"./modules/test.js":2}],2:[function(require,module,exports){
function test(){
	
  this.coordinatesSet =	"it is test, CommonJS works",

	
  this.loadExampleCoordinates = function(){
	  //$("#coordsInput").val(this.coordinatesSet); //  was \n  in the  end 
	  alert(this.coordinatesSet);
   }
}

module.exports = test;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9teV9qcy9jb21tb25fanNfbW9kdWxlcy9tYWluLmpzIiwianMvbXlfanMvY29tbW9uX2pzX21vZHVsZXMvbW9kdWxlcy90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG52YXIgdGVzdF9maWxlID0gcmVxdWlyZSgnLi9tb2R1bGVzL3Rlc3QuanMnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciB0ZXN0dCA9IG5ldyB0ZXN0X2ZpbGUoKTtcclxuXHR0ZXN0dC5sb2FkRXhhbXBsZUNvb3JkaW5hdGVzKCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblxyXG4vL0NsaWNrIFNQTElUICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjc3BsaXRCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXsgICAgICAgIC8vICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5jaXJjbGUnLCBmdW5jdGlvbigpIHsgICAvLyB0aGlzICBjbGljayAgaXMgIHVzZWQgIHRvICAgcmVhY3QgIHRvICBuZXdseSBnZW5lcmF0ZWQgY2ljbGVzO1xyXG4gICAgICAgIFxyXG5cdFx0dmFyIHNwbGl0TW9kdWxlID0gbmV3IHNwbGl0X2ZpbGUoKTtcclxuXHRcdFxyXG5cdFx0Ly9pZiB0ZXh0YXJlYSBpcyBlbXB0eSwgc3RvcCBpdCBhbGxcclxuXHRcdGlmKCFzcGxpdE1vZHVsZS5nZXRGb3JtVmFsdWUoKSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vUHJvbWlzZVxyXG5cdFx0JC53aGVuKCBzcGxpdE1vZHVsZS5nZXRBamF4Q29vcmRpbmF0ZXMoKSlcclxuXHRcdCAgIC50aGVuKGZ1bmN0aW9uKCApIHsgICAgXHJcbiAgICAgICAgICAgICAgICAvL3NwbGl0TW9kdWxlLmRpc3BsYXlSZXN1bHRzKCk7XHRcdCAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzcGxpdE1vZHVsZS5kaXNwbGF5UmVzdWx0cywgMjAwMCk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSk7IFxyXG5cdFx0XHJcblx0XHJcbiAgICB9KTtcclxuLy9FTkQgQ2xpY2sgU1BMSVQgIEJ1dHRvblxyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHJcbi8vIEVORCBSRUFEWVxyXG59KTtcclxuXHJcblxyXG4iLCJmdW5jdGlvbiB0ZXN0KCl7XHJcblx0XHJcbiAgdGhpcy5jb29yZGluYXRlc1NldCA9XHRcIml0IGlzIHRlc3QsIENvbW1vbkpTIHdvcmtzXCIsXHJcblxyXG5cdFxyXG4gIHRoaXMubG9hZEV4YW1wbGVDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XHJcblx0ICAvLyQoXCIjY29vcmRzSW5wdXRcIikudmFsKHRoaXMuY29vcmRpbmF0ZXNTZXQpOyAvLyAgd2FzIFxcbiAgaW4gdGhlICBlbmQgXHJcblx0ICBhbGVydCh0aGlzLmNvb3JkaW5hdGVzU2V0KTtcclxuICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3Q7Il19

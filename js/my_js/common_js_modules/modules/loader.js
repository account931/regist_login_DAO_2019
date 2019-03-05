var $ = require('jquery');
function loader(){
	
  //this.coordinatesSet =	"it is test, CommonJS works",

	
  this.loadLoader = function(){
	 this.appendLoaderDiv(); //appends a div id="loaderX" with pure CSS loader to body, no code in index.php, just css to mycss.css
	 var myVar = setTimeout(this.showPage, 1000);
  }
  
  
   //Hides loader in 1 sec
   this.showPage = function(){   
      document.getElementById("loaderX").style.display = "none"; //hides loader
      document.getElementById("all").style.display = "block";    //show div id="all"
   }
   
   
   //appends a div id="loaderX" with pure CSS loader to body, no code in index.php, just css to mycss.css
   this.appendLoaderDiv = function(){
	   var elemDiv = document.createElement('div');
	   elemDiv.id = "loaderX";
       //elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100; top:20px;';
	   //$("#loaderX").append('<img id="theImg" src="images/load.gif" />');
	   //elemDiv.innerHTML = '<img id="theImg" src="images/load.gif" />'; 
	   //elemDiv.style.backgroundColor = "black";
	   //$("#loaderX").css("background", "url('images/load.gif')");
       document.body.appendChild(elemDiv);
	   //document.getElementsByTagName('body')[0].innerHTML += elemDiv;
	   
   }
   
}

module.exports = loader;
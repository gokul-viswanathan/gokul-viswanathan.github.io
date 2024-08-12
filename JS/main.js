const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 


// navbar scrolling

var didScroll;// on scroll, let the interval function know the user has scrolled
var lastScrollTop = 0;
var delta = 8;
var navbarHeight = $('nav').outerHeight();
var navbar = document.querySelector('.navbar')

$(window).scroll(function(event){
  didScroll = true;
});// run hasScrolled() and reset didScroll status

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  // do stuff here...
  var scrollTop = $(this).scrollTop();
  console.log(lastScrollTop, scrollTop)
  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    	return;
  if (scrollTop > lastScrollTop && scrollTop > navbarHeight){  // Scroll Down
  	navbar.style.top = '-50px';
	// navbar.style.position = 'fixed'
	} 
	else {  // Scroll Up
		navbar.style.top = '0';
		// navbar.style.position = 'static'
	}
	lastScrollTop = scrollTop;
}
	
var UB = document.getElementById("UB")
var SE = document.getElementById("SE")
var ASE = document.getElementById("ASE")

function butonClick(val){
	if (val == "UB"){
		$(UB).removeClass("UB-hide").addClass("UB-show");
		$(SE).removeClass("SE-show").addClass("SE-hide");
		$(ASE).removeClass("ASE-show").addClass("ASE-hide");
		console.log("UB")
	} else if(val == "SE"){
		$(SE).removeClass("SE-hide").addClass("SE-show");
		$(UB).removeClass("UB-show").addClass("UB-hide");
		$(ASE).removeClass("ASE-show").addClass("ASE-hide");
		console.log("SE")
	} else {
		$(ASE).removeClass("ASE-hide").addClass("ASE-show");
		$(UB).removeClass("UB-show").addClass("UB-hide");
		$(SE).removeClass("SE-show").addClass("SE-hide");
		console.log("ASE")
	}
}
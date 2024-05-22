const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

// navbar scrolling

var didScroll;// on scroll, let the interval function know the user has scrolled
var lastScrollTop = 0;
var delta = 8;
var navbarHeight = $('nav').outerHeight();

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
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta)
    	return;
  if (st > lastScrollTop && st > navbarHeight){  // Scroll Down
  	$('nav').removeClass('navbar').addClass('nav-up');} 
	else {  // Scroll Up
  	  	  $('nav').removeClass('nav-up').addClass('navbar');
	}
	lastScrollTop = st;
}
	
var UB = document.getElementById("UB")
var SE = document.getElementById("SE")
var ASE = document.getElementById("ASE")

function butonClick(val){
	if (val == "UB"){
		$(UB).removeClass("UB-hide").addClass("UB-show");
		$(SE).removeClass("SE-show").addClass("SE-hide");
		$(ASE).removeClass("ASE-show").addClass("ASE-hide");
		// console.log("UB")
	} else if(val == "SE"){
		$(SE).removeClass("SE-hide").addClass("SE-show");
		$(UB).removeClass("UB-show").addClass("UB-hide");
		$(ASE).removeClass("ASE-show").addClass("ASE-hide");
		// console.log("SE")
	} else {
		$(ASE).removeClass("ASE-hide").addClass("ASE-show");
		$(UB).removeClass("UB-show").addClass("UB-hide");
		$(SE).removeClass("SE-show").addClass("SE-hide");
		// console.log("ASE")
	}
}
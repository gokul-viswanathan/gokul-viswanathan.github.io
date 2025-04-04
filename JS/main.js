
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 


// navbar scrolling

var didScroll;// on scroll, let the interval function know the user has scrolled
var lastScrollTop = 0;
var delta = 8;
// var navbarHeight = $('nav').outerHeight();
var navbarHeight = document.querySelector("nav").offsetHeight;
// console.log(navbarHeight);
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
//   console.log(lastScrollTop, scrollTop)
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

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}



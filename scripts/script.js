if (document.getElementById("nav-container").style.display = "initial") {
	document.getElementById("nav-container").style.display = "none"
}
window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
	window.parent.postMessage("resize", "*");
}
$(window).on("load", function() {
	$(".loader-wrapper").fadeOut("slow");
	setTimeout(() => {
		$('body').css({
			overflow: 'auto'
		});
		document.getElementById("nav-container").style.display = "initial"
	}, 250);
});

window.onscroll = function() {
	myFunction()
};
var navbar = document.querySelector("#navbar");
var navbarmenu = document.querySelector(".menu__box");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		navbarmenu.classList.remove("dd")
		navbarmenu.classList.add("sticky-menu-box")
	} else {
		navbar.classList.remove("sticky");
		navbarmenu.classList.remove("sticky-menu-box")
		navbarmenu.classList.add("dd")
	}
}


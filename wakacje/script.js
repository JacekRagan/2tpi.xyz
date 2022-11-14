/* MAIN PAGE */
window.onscroll = function() {
	myFunction()
};
var navbar = document.querySelector("#navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		navbar.style.backgroundColor = "RGBA(0,0,0,0.3)";
	} else {
		navbar.classList.remove("sticky");
		navbar.style.backgroundColor = "RGBA(0,0,0,0.0)";
	}
}
/* OFFER PAGE */
var wrp = document.getElementById('wrap');
var img = wrp.getElementsByTagName('img');
for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("mouseover", function() {
		setEffect(this);
	});
	img[i].addEventListener("mouseout", resEffect);
};

function setEffect(el) {
	for (var i = 0; i < img.length; i++) {
		img[i].style.filter = 'blur(1.5px)';
		img[i].style.opacity = '0.9';
	};
	el.style.filter = null;
	el.style.opacity = null;
}

function resEffect() {
	for (var i = 0; i < img.length; i++) {
		img[i].style.filter = null;
		img[i].style.opacity = null;
	};
}
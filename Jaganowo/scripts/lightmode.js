let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
	document.body.classList.remove('normalmode')
	document.body.classList.add('darkmode');
	document.getElementById("light").style.display = "none"
	document.getElementById("dark").style.display = "initial"
	document.getElementById("bnr1img").src = "images/baner1.png"
	document.getElementById("bnr2img").src = "images/baner2.png"
	document.getElementById("bnr3img").src = "images/baner3.png"
	document.getElementById("gearimg").src = "images/gear.png";
	document.getElementById("skullimg").src = "images/skull.png";
	document.getElementById("userimg").src = "images/user.png";
	document.getElementById("cartimg").src = "images/cart2.png";
	document.getElementById("vsimg").src = "images/vs.png";
	document.getElementById("warning1").src = "images/warning.png"
	document.getElementById("warning2").src = "images/warning.png"
	document.getElementById("warning3").src = "images/warning.png"
	document.getElementById("warning4").src = "images/warning.png"
	document.getElementById("warning5").src = "images/warning.png"
	document.getElementById("warning6").src = "images/warning.png"
	document.getElementById("warning7").src = "images/warning.png"
	document.getElementById("warning8").src = "images/warning.png"
	document.getElementById("warning9").src = "images/warning.png"
	document.getElementById("warning10").src = "images/warning.png"
	document.getElementById("warning11").src = "images/warning.png"
	document.getElementById("warning12").src = "images/warning.png"
	document.getElementById("instagram").src = "images/instagram.png"
	document.getElementById("twitter").src = "images/twitter.png"
	document.getElementById("facebook").src = "images/facebook.png"

	localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	document.body.classList.add('normalmode');
	document.getElementById("bnr1img").src = "images/baner1_white.png";
	document.getElementById("bnr2img").src = "images/baner2_white.png";
	document.getElementById("bnr3img").src = "images/baner3_white.png";
	document.getElementById("light").style.display = "initial";
	document.getElementById("dark").style.display = "none";
	document.getElementById("gearimg").src = "images/gear_black.png";
	document.getElementById("skullimg").src = "images/skull_black.png";
	document.getElementById("userimg").src = "images/user_black.png";
	document.getElementById("cartimg").src = "images/cart1.png";
	document.getElementById("warning1").src = "images/warning_white.png"
	document.getElementById("warning2").src = "images/warning_white.png"
	document.getElementById("warning3").src = "images/warning_white.png"
	document.getElementById("warning4").src = "images/warning_white.png"
	document.getElementById("warning5").src = "images/warning_white.png"
	document.getElementById("warning6").src = "images/warning_white.png"
	document.getElementById("warning7").src = "images/warning_white.png"
	document.getElementById("warning8").src = "images/warning_white.png"
	document.getElementById("warning9").src = "images/warning_white.png"
	document.getElementById("warning10").src = "images/warning_white.png"
	document.getElementById("warning11").src = "images/warning_white.png"
	document.getElementById("warning12").src = "images/warning_white.png"
	document.getElementById("vsimg").src = "images/vs_white.png"
	document.getElementById("instagram").src = "images/instagram_black.png"
	document.getElementById("twitter").src = "images/twitter_black.png"
	document.getElementById("facebook").src = "images/facebook_black.png"
	localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
	enableDarkMode();
}
const whiteImages = () => {
	document.getElementById("bnr1img").src = "images/baner1_white.png";
	document.getElementById("bnr2img").src = "images/baner2_white.png";
	document.getElementById("bnr3img").src = "images/baner3_white.png";
	document.getElementById("warning1").src = "images/warning_white.png"
	document.getElementById("warning2").src = "images/warning_white.png"
	document.getElementById("warning3").src = "images/warning_white.png"
	document.getElementById("warning4").src = "images/warning_white.png"
	document.getElementById("warning5").src = "images/warning_white.png"
	document.getElementById("warning6").src = "images/warning_white.png"
	document.getElementById("warning7").src = "images/warning_white.png"
	document.getElementById("warning8").src = "images/warning_white.png"
	document.getElementById("warning9").src = "images/warning_white.png"
	document.getElementById("warning10").src = "images/warning_white.png"
	document.getElementById("warning11").src = "images/warning_white.png"
	document.getElementById("warning12").src = "images/warning_white.png"
	document.getElementById("instagram").src = "images/instagram_black.png"
	document.getElementById("twitter").src = "images/twitter_black.png"
	document.getElementById("facebook").src = "images/facebook_black.png"
	document.getElementById("vsimg").src = "images/vs_white.png"
}
if (document.body.classList == 'normalmode') {
	whiteImages();
	document.getElementById("light").style.display = "initial";
	document.getElementById("dark").style.display = "none";
}
if (document.body.classList == 'darkmode') {
	document.getElementById("light").style.display = "none"
	document.getElementById("dark").style.display = "initial"
}
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});


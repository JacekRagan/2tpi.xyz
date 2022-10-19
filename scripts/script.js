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
var first_click = true;

function selectlang() {
	if (first_click) {
		document.getElementById("dropdown").style.display = "inherit";
		document.getElementById("dropdown2").style.display = "inherit";
		first_click = false;
	} else {
		document.getElementById("dropdown").style.display = "none";
		document.getElementById("dropdown2").style.display = "none";
		first_click = true;
	}
}
let englishMode = localStorage.getItem('englishMode');
const englishModeToggle = document.querySelector('#english-mode-toggle');
const enableEnglishMode = () => {
	document.body.classList.add("ENG");
	document.body.classList.remove("PL");
	document.getElementById("announce-top-text-b").innerHTML = "Gryf jaganowo is under development!";
	document.getElementById("announce-top-text").innerHTML = "And it will stay a little longer...";
	document.getElementById("announce-top-button").innerHTML = "See more";
	document.getElementById("flag-text").innerHTML = "English, USA";
	document.getElementById("flag-text2").innerHTML = "English, USA";
	document.getElementById("flag-icon").src = "images/en.png"
	document.getElementById("flag-icon2").src = "images/en.png"
	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("contact2").innerHTML = "Contact";
	document.getElementById("contact3").innerHTML = "Contact";
	document.getElementById("skarbnik").innerHTML = "Paymaster";
	document.getElementById("skarbnik2").innerHTML = "Paymaster";
	document.getElementById("skarbnik3").innerHTML = "Paymaster";
	document.getElementById("news").innerHTML = "News";
	document.getElementById("news2").innerHTML = "News";
	document.getElementById("news3").innerHTML = "News";
	document.getElementById("projects").innerHTML = "Projects";
	document.getElementById("projects2").innerHTML = "Projects";
	document.getElementById("projects3").innerHTML = "Projects";
	document.getElementById("devs").innerHTML = "Developers";
	document.getElementById("devs2").innerHTML = "Developers";
	document.getElementById("devs3").innerHTML = "Developers";
	document.getElementById("main-text").innerHTML = "Welcome to 2tpi.xyz!";
	document.getElementById("bottom-text").innerHTML = "We are a group that is passionate about programming and making big money out of it.";
	document.getElementById("main-button").innerHTML = "See our projects";
	document.getElementById("main-button3").innerHTML = "See our projects";
	document.getElementById("divgrid-gridinside-p").innerHTML = "We are talented and inventive creators of many projects that are gaining great popularity due to our brand promotion skills.";
	document.getElementById("divgrid-gridinside-h1").innerHTML = "Meet the epic developers";
	document.getElementById("divgrid-gridinside-h12").innerHTML = "Check out the latest news";
	document.getElementById("divgrid-gridinside-p1").innerHTML = "We will post various information related to our business and events significant for us here.";
	document.getElementById("main-button2").innerHTML = "See the news";
	localStorage.setItem('englishMode', 'enabled');
}
const disableEnglishMode = () => {
	localStorage.setItem('englishMode', null);
}
if (englishMode === 'enabled') {
	enableEnglishMode();
}
let polishMode = localStorage.getItem('polishMode');
const polishModeToggle = document.querySelector('#polish-mode-toggle');
const enablePolishMode = () => {
	document.body.classList.remove("ENG");
	document.body.classList.add("PL");
	document.getElementById("announce-top-text-b").innerHTML = "Gryf jaganowo jest w rozwoju!";
	document.getElementById("announce-top-text").innerHTML = "I jeszcze trochę pobędzie...";
	document.getElementById("announce-top-button").innerHTML = "Zobacz więcej";
	document.getElementById("flag-text").innerHTML = "Polski";
	document.getElementById("flag-text2").innerHTML = "Polski";
	document.getElementById("flag-icon").src = "images/pl.png"
	document.getElementById("flag-icon2").src = "images/pl.png"
	document.getElementById("contact").innerHTML = "Kontakt";
	document.getElementById("contact2").innerHTML = "Kontakt";
	document.getElementById("contact3").innerHTML = "Kontakt";
	document.getElementById("skarbnik").innerHTML = "Skarbnik";
	document.getElementById("skarbnik2").innerHTML = "Skarbnik";
	document.getElementById("skarbnik3").innerHTML = "Skarbnik";
	document.getElementById("news").innerHTML = "Wiadmości";
	document.getElementById("news2").innerHTML = "Wiadmości";
	document.getElementById("news3").innerHTML = "Wiadmości";
	document.getElementById("projects").innerHTML = "Projekty";
	document.getElementById("projects2").innerHTML = "Projekty";
	document.getElementById("projects3").innerHTML = "Projekty";
	document.getElementById("devs").innerHTML = "Developerzy";
	document.getElementById("devs2").innerHTML = "Developerzy";
	document.getElementById("devs3").innerHTML = "Developerzy";
	document.getElementById("main-text").innerHTML = "Witaj na 2tpi.xyz!";
	document.getElementById("bottom-text").innerHTML = "Jesteśmy grupą, która pasjonuje się programowaniem i robienia z tego dużego hajsu.";
	document.getElementById("main-button").innerHTML = "Zobacz nasze projekty";
	document.getElementById("main-button3").innerHTML = "Zobacz nasze projekty";
	document.getElementById("divgrid-gridinside-p").innerHTML = "Jesteśmy zdolnymi i pomysłowymi twórcami wielu projektów, które zyskują dużą popularność przez nasze umiejętności promowania marki.";
	document.getElementById("divgrid-gridinside-h1").innerHTML = "Poznaj epickich developerów";
	document.getElementById("divgrid-gridinside-h12").innerHTML = "Przejrzyj najnowsze wiadomości";
	document.getElementById("divgrid-gridinside-p1").innerHTML = "Różne informacje związane z naszą działalnością i znaczące dla nas wydarzenia będziemy postować tutaj.";
	document.getElementById("main-button2").innerHTML = "Zobacz wiadomości";
	localStorage.setItem('polishMode', 'enabled');
}
const disablePolishMode = () => {
	localStorage.setItem('polishMode', null);
}
if (polishMode === 'enabled') {
	enablePolishMode();
}

const polishminiModeToggle = document.querySelector('#polishmini-mode-toggle');


const englishminiModeToggle = document.querySelector('#englishmini-mode-toggle');


polishModeToggle.addEventListener('click', () => {
	polishMode = localStorage.getItem('polishMode');
	if (polishMode !== 'enabled') {
		disableEnglishMode();
		enablePolishMode();
		if ($(window).scrollTop() === 0) {} else {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
		}
	}
});
englishminiModeToggle.addEventListener('click', () => {
	englishminiMode = localStorage.getItem('englishminiMode');
	if (englishminiMode !== 'enabled') {
		disablePolishMode();
		enableEnglishMode();
		if ($(window).scrollTop() === 0) {} else {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
		}
	}
});
polishminiModeToggle.addEventListener('click', () => {
	polishminiMode = localStorage.getItem('polishminiMode');
	if (polishminiMode !== 'enabled') {
		disableEnglishMode();
		enablePolishMode();
		if ($(window).scrollTop() === 0) {} else {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
		}
	}
});
englishModeToggle.addEventListener('click', () => {
	englishMode = localStorage.getItem('englishMode');
	if (englishMode !== 'enabled') {
		disablePolishMode();
		enableEnglishMode();
		if ($(window).scrollTop() === 0) {} else {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
		}
	}
});	
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
	if (window.pageYOffset > sticky) {
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


function mainlangpl() {
	document.getElementById("announce-top-text-b").innerHTML = "Gryf jaganowo jest w rozwoju!";
	document.getElementById("announce-top-text").innerHTML = " I jeszcze trochę pobędzie...";
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
}

function mainlangeng() {
	document.getElementById("announce-top-text-b").innerHTML = "Gryf jaganowo is under development!";
	document.getElementById("announce-top-text").innerHTML = " And it will stay a little longer...";
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
}

function gryfpl() {
	document.getElementById("contact").innerHTML = "Kontakt";
	document.getElementById("contact2").innerHTML = "Kontakt";
	document.getElementById("contact3").innerHTML = "Kontakt";
	document.getElementById("skarbnik").innerHTML = "Skarbnik";
	document.getElementById("skarbnik2").innerHTML = "Skarbnik";
	document.getElementById("skarbnik3").innerHTML = "Skarbnik";
	document.getElementById("news").innerHTML = "Wiadmości";
	document.getElementById("main-button").innerHTML = "Wejdź na Jaganowo";
	document.getElementById("news2").innerHTML = "Wiadmości";
	document.getElementById("news3").innerHTML = "Wiadmości";
	document.getElementById("projects").innerHTML = "Projekty";
	document.getElementById("projects2").innerHTML = "Projekty";
	document.getElementById("projects3").innerHTML = "Projekty";
	document.getElementById("divgrid-gridinside-p").innerHTML = "Najlepszy klub sportowy w Polsce, który swój początek zaczął w Słupsku. Gryf rozszerza swoją ofertę chociażby sponsorując profesjonalną drużynę e-sportową w CS:GO.";
	document.getElementById("divgrid-gridinside-h1").innerHTML = "Odkryj Gryf Jaganowo";
	document.getElementById("divgrid-gridinside-h12").innerHTML = "Zobacz merch dla kibiców";
	document.getElementById("divgrid-gridinside-p2").innerHTML = "Wysokiej jakości przedmioty od kominiarek do kontrabandy już w wyprzedaży! 10% z zarobionych pieniędzy przeznaczamy na wspomaganie młynu podczas naszych następnych meczy.";
	document.getElementById("divgrid-gridinside-h13").innerHTML = "Przeczytaj najnowsze wiadomości";
	document.getElementById("divgrid-gridinside-p3").innerHTML = "W miare czasu, prasa Gryfa publikuje wiadomości odnośnie meczy i nowinek w świecie piłkarskim.";
	document.getElementById("devs").innerHTML = "Developerzy";
	document.getElementById("leftgryf-warning").innerHTML = "Uwaga! Jaganowo aktualnie jest w wszczesnym dostępie.";
	document.getElementById("devs2").innerHTML = "Developerzy";
	document.getElementById("devs3").innerHTML = "Developerzy";
	document.getElementById("flag-text").innerHTML = "Polski";
	document.getElementById("flag-text2").innerHTML = "Polski";
	document.getElementById("main-button3").innerHTML = "Zobacz nasze projekty";
	document.getElementById("leftgryf-p").innerHTML = "aktualny update 2.11";
	document.getElementById("flag-icon").src = "images/pl.png"
	document.getElementById("flag-icon2").src = "images/pl.png"
}

function gryfeng() {
	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("contact2").innerHTML = "Contact";
	document.getElementById("contact3").innerHTML = "Contact";
	document.getElementById("skarbnik").innerHTML = "Paymaster";
	document.getElementById("main-button").innerHTML = "Enter Jaganowo";	
	document.getElementById("skarbnik2").innerHTML = "Paymaster";
	document.getElementById("leftgryf-warning").innerHTML = "Warning! Jaganowo is currently in the early acess.";
	document.getElementById("skarbnik3").innerHTML = "Paymaster";
	document.getElementById("news").innerHTML = "News";
	document.getElementById("news2").innerHTML = "News";
	document.getElementById("news3").innerHTML = "News";
	document.getElementById("projects").innerHTML = "Projects";
	document.getElementById("projects2").innerHTML = "Projects";
	document.getElementById("projects3").innerHTML = "Projects";
	document.getElementById("divgrid-gridinside-p").innerHTML = "The best sports club in Poland, which started in Słupsk. Gryf is expanding its offer, for example by sponsoring a professional e-sport team in CS:GO.";
	document.getElementById("divgrid-gridinside-h1").innerHTML = "Discover Gryf Jaganowo";
	document.getElementById("divgrid-gridinside-h12").innerHTML = "See fan merch";
	document.getElementById("divgrid-gridinside-p2").innerHTML = "High-quality items from balaclavas to contraband on sale! We spend 10% of earned money on supporting the mill during our next matches.";
	document.getElementById("divgrid-gridinside-h13").innerHTML = "Read the latest news";
	document.getElementById("divgrid-gridinside-p3").innerHTML = "As time goes on, the Gryf press publishes news about matches and news in the football world.";
	document.getElementById("devs").innerHTML = "Developers";
	document.getElementById("leftgryf-p").innerHTML = "current update 2.11";
	document.getElementById("devs2").innerHTML = "Developers";
	document.getElementById("devs3").innerHTML = "Developers";
	document.getElementById("flag-text").innerHTML = "English, USA";
	document.getElementById("flag-text2").innerHTML = "English, USA";
	document.getElementById("main-button3").innerHTML = "See our projects";
	document.getElementById("flag-icon").src = "images/en.png"
	document.getElementById("flag-icon2").src = "images/en.png"
}


function projectseng() {
	document.getElementById("devs").innerHTML = "Developers";
	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("skarbnik").innerHTML = "Paymaster";
	document.getElementById("news").innerHTML = "News";
	document.getElementById("projects").innerHTML = "Projects";
	document.getElementById("devs2").innerHTML = "Developers";
	document.getElementById("contact2").innerHTML = "Contact";
	document.getElementById("skarbnik2").innerHTML = "Paymaster";
	document.getElementById("news2").innerHTML = "News";
	document.getElementById("projects").innerHTML = "Projects";
	document.getElementById("flag-text").innerHTML = "English, USA";
	document.getElementById("flag-text2").innerHTML = "English, USA";
	document.getElementById("flag-icon").src = "images/en.png"
	document.getElementById("flag-icon2").src = "images/en.png"
	document.getElementById("gryfh1").innerHTML = "PROJECTS"
	document.getElementById("leftprojects-p").innerHTML = "Epic projects from epic developers"
	document.getElementById("divgrid-gridinsideprojects-p").innerHTML = "The best sports club in Poland, which started in Słupsk. Gryf is expanding its offer, for example by sponsoring a professional e-sport team in CS:GO."
	document.getElementById("divgrid-gridinside-p").innerHTML = "Warning! Jaganowo is in early access."
	document.getElementById("autorgryf").style.marginTop = "30px"
	document.getElementById("divgrid-gridinsideprojects-p-updateinfo").innerHTML = "current update 2.11"
	document.getElementById("comingsoon").innerHTML = "More projects coming soon"
	document.getElementById("main-button3").innerHTML = "See our projects";
	document.getElementById("devs3").innerHTML = "Developers";
	document.getElementById("projects3").innerHTML = "Projects";
	document.getElementById("news3").innerHTML = "News";
	document.getElementById("skarbnik3").innerHTML = "Paymaster";
	document.getElementById("contact3").innerHTML = "Contact";
	document.getElementById("divgrid-gridinside-h1-wakacje").innerHTML = "Vacation Offers";
	document.getElementById("divgrid-gridinsideprojects-p-wakacje").innerHTML = "No description."
}
function projectspl() {
	document.getElementById("devs").innerHTML = "Developerzy";
	document.getElementById("contact").innerHTML = "Kontakt";
	document.getElementById("skarbnik").innerHTML = "Skarbnik";
	document.getElementById("news").innerHTML = "Wiadomości";
	document.getElementById("projects").innerHTML = "Projekty";
	document.getElementById("devs2").innerHTML = "Developerzy";
	document.getElementById("contact2").innerHTML = "Kontakt";
	document.getElementById("skarbnik2").innerHTML = "Skarbnik";
	document.getElementById("news2").innerHTML = "Wiadomości";
	document.getElementById("projects").innerHTML = "Projekty";
	document.getElementById("flag-text").innerHTML = "Polski";
	document.getElementById("flag-text2").innerHTML = "Polski";
	document.getElementById("flag-icon").src = "images/pl.png"
	document.getElementById("flag-icon2").src = "images/pl.png"
	document.getElementById("gryfh1").innerHTML = "PROJEKTY"
	document.getElementById("leftprojects-p").innerHTML = "Epickie projekty od epickich developerów"
	document.getElementById("divgrid-gridinsideprojects-p").innerHTML = "Najlepszy klub sportowy w Polsce, który swój początek zaczął w Słupsku. Gryf rozszerza swoją ofertę chociażby sponsorując profesjonalną drużynę e-sportową w CS:GO."
	document.getElementById("divgrid-gridinside-p").innerHTML = "Uwaga! Jaganowo jest w wszczesnym dostępie."
	document.getElementById("autorgryf").style.marginTop = "50px"
	document.getElementById("divgrid-gridinsideprojects-p-updateinfo").innerHTML = "aktualny update 2.11"
	document.getElementById("comingsoon").innerHTML = "Więcej projektów wkrótce"
	document.getElementById("main-button3").innerHTML = "Zobacz nasze projekty";
	document.getElementById("devs3").innerHTML = "Developerzy";
	document.getElementById("projects3").innerHTML = "Projekty";
	document.getElementById("news3").innerHTML = "Wiadomości";
	document.getElementById("skarbnik3").innerHTML = "Skarbnik";
	document.getElementById("contact3").innerHTML = "Kontakt";
	document.getElementById("divgrid-gridinside-h1-wakacje").innerHTML = "Oferty na wakację";
	document.getElementById("divgrid-gridinsideprojects-p-wakacje").innerHTML = "Brak opisu."
}


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
	if (document.getElementById("indexmain")) {
		mainlangeng();
	}
	if (document.getElementById("gryf")) {
		gryfeng();
	}
	if (document.getElementById("projectsmain")) {
		projectseng();
	}
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
	if (document.getElementById("indexmain")) {
		mainlangpl();
	}
	if (document.getElementById("gryf")) {
		gryfpl();
	}
	if (document.getElementById("projectsmain")) {
		projectspl();
	}
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



 





	



	
	 





let trollMode = localStorage.getItem('trollMode');
const trollModeToggle = document.querySelector('#troll-mode-toggle');
var first_click = true;
const rgb = "trollrgb infinite 0.1s";
const enableTrollMode = () => {
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").setAttribute('id', 'nav-troll');
		document.getElementById("troll").setAttribute('onclick', 'trollactive()');
	}
	document.body.classList.add('trollmode');
	document.getElementById("navbar").style.animation = rgb;
	document.getElementById("nav-container").style.animation = rgb;
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").style.animation = rgb;
	}
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").style.animation = rgb;
	}
	localStorage.setItem('trollMode', 'enabled');
}
const disableTrollMode = () => {
	document.body.classList.remove('trollmode');
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").setAttribute('id', 'nav-content');
		document.getElementById("troll").setAttribute('onclick', 'troll()');
	}
	document.getElementById("firsttask").style.display = "none";
	document.getElementById("secondtask").style.display = "none";
	document.getElementById("thirdtask").style.display = "none";
	document.getElementById("navbar").style.animation = "none";
	document.getElementById("nav-container").style.animation = "none";
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").style.animation = "none";
	}
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").style.animation = "none";
	}
	localStorage.setItem('trollMode', null);
}
const starttroll = () => {
	document.getElementById("troll-mode-toggle").style.display = "inherit";
	document.getElementById("troll-text").style.display = "inherit";
	document.getElementById("dark-mode-toggle").style.display = "none";
	document.getElementById("mode-text").style.display = "none";
	document.getElementById("actual-mode").style.display = "none";
	
	document.getElementById("dark").style.display = "none";
	document.getElementById("light").style.display = "none";
	document.getElementById("troll").style.marginTop = "70px";
	document.getElementById("troll-span").innerHTML = "Nie to miałem na myśli.";
	document.getElementById("debug-mode-toggle").style.display = "none"
	first_click = false;
}
const realendtroll = () => {
	document.getElementById("troll-mode-toggle").style.display = "none";
	document.getElementById("troll-text").style.display = "none";
	document.getElementById("dark-mode-toggle").style.display = "unset";
	document.getElementById("mode-text").style.display = "inherit";
	document.getElementById("actual-mode").style.display = "inherit";
	
	if (document.body.classList == 'normalmode') {
		document.getElementById("light").style.display = "initial";
		document.getElementById("dark").style.display = "none";
	}
	if (document.body.classList == 'darkmode') {
		document.getElementById("light").style.display = "none";
		document.getElementById("dark").style.display = "initial";
	}
	document.getElementById("troll").style.marginTop = "50px";
	document.getElementById("debug-mode-toggle").setAttribute("style", "display: inherit;")
	document.getElementById("troll-span").innerHTML = "Nie możesz się zdecydować?";
	
	first_click = true;
}

function troll() {
	if (document.getElementById("nav-content")) {
		if (first_click) {
			starttroll();
		} else {
			if (document.body.classList == 'darkmode') {
				realendtroll();
			}
			if (document.body.classList == 'normalmode') {
				realendtroll();
			}
		}
	}
}

function trollactive() {
	if (first_click == false) {
		document.getElementById("trollerror").style.opacity = "1";
		document.getElementById("trollerror").style.transition = "ease-in, 0s";
		if (document.getElementById("trollerror").style.opacity == "1") {
			setTimeout(() => {
				document.getElementById("trollerror").style.transition = "ease-out, 0.5s";
				document.getElementById("trollerror").style.opacity = "0";
			}, 3000);
		}
	}
}
const tryagain = () => {
	document.getElementById("tryagain").style.opacity = "1";
	document.getElementById("tryagain").style.transition = "ease-in, 0s";
	if (document.getElementById("tryagain").style.opacity == "1") {
		setTimeout(() => {
			document.getElementById("tryagain").style.transition = "ease-out, 1s";
			document.getElementById("tryagain").style.opacity = "0";
		}, 2000);
	}
}
const commandendtroll = () => {
	document.getElementById("inputnumber").style.display = "none";
	document.getElementById("solvetext").style.display = "none";
	document.getElementById("nav-troll").style.height = "400px";
	document.getElementById("tryagain").style.opacity = "0";
	document.getElementById("trollerror").style.opacity = "0";
	disableTrollMode();
	realendtroll();
}
const clearinput = () => {
	if (input.value !== "") {
		input.value = "";
	}
}
const invalidinput = () => {
	clearinput();
	tryagain();
	document.getElementById("firsttask").style.display = "none";
	document.getElementById("secondtask").style.display = "none";
	document.getElementById("thirdtask").style.display = "none";
	number++
	if (number >= 4) {
		number = 0;
	}
	if (number == 0) {
		number++
	}
	console.log(number);
	if (number == 1) {
		document.getElementById("firsttask").style.display = "inherit";
	}
	if (number == 2) {
		document.getElementById("secondtask").style.display = "inherit";
	}
	if (number == 3) {
		document.getElementById("thirdtask").style.display = "inherit";
	}
}
var numberacces = 1;
var emptyinputfix = 1;

function answer() {
	emptyinputfix = 1;
	numberacces = 1;
	if (numberacces == 1) {
		if (number == 1) {
			if (input.value == 17) {
				numberacces = 0;
				emptyinputfix = 0;
				clearinput();
				commandendtroll();
			}
			if (input.value !== 17) {
				if (emptyinputfix == 1) {
					numberacces = 0;
					invalidinput();
					console.log("failed verification (try number: 1)");
				}
			}
		}
	}
	if (numberacces == 1) {
		if (number == 2) {
			if (input.value == 3) {
				numberacces = 0;
				emptyinputfix = 0;
				clearinput();
				commandendtroll();
			}
			if (input.value !== 3) {
				if (emptyinputfix == 1) {
					numberacces = 0;
					console.log("failed verification (try number: 2)");
					invalidinput();
				}
			}
		}
	}
	if (numberacces == 1) {
		if (number == 3) {
			if (input.value == 4) {
				numberacces = 0;
				emptyinputfix = 0;
				clearinput();
				commandendtroll();
			}
			if (input.value !== 4) {
				if (emptyinputfix == 1) {
					numberacces = 0;
					console.log("failed verification (try number: 3)");
					invalidinput();
				}
			}
		}
	}
}
if (trollMode === 'enabled') {
	enableTrollMode();
}
let number = 0;
let input = document.getElementById("inputnumber");
trollModeToggle.addEventListener('click', () => {
	trollMode = localStorage.getItem('trollMode');
	if (trollMode !== 'enabled') {
		enableTrollMode();
	} else {
		if (document.getElementById("nav-troll")) {
			document.getElementById("firsttask").style.display = "none";
			document.getElementById("secondtask").style.display = "none";
			document.getElementById("thirdtask").style.display = "none";
			document.getElementById("inputnumber").style.display = "initial";
			document.getElementById("solvetext").style.display = "inherit";
			document.getElementById("solvetext").style.marginTop = "20px";
			document.getElementById("nav-troll").style.height = "700px";
			if (number >= 3) {
				number = 0;
			}
			number++;
			console.log(number)
			if (number == 1) {
				document.getElementById("firsttask").style.display = "inherit";
			}
			if (number == 2) {
				document.getElementById("secondtask").style.display = "inherit";
			}
			if (number == 3) {
				document.getElementById("thirdtask").style.display = "inherit";
			}
		}
	}
});
if (document.getElementById("nav-troll")) {
	starttroll();
	document.getElementById("troll").setAttribute('onclick', 'trollactive()');
}


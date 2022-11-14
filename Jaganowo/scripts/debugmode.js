var x = 0
function debugmode() { 
    var elements = document.querySelectorAll( 'body *' );
	console.log("aktywacja buttona")
	if (x==0){
		console.log("włączanie buttona")
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.outline = "initial"
			if (elements[i].style.outline === "initial") {
				elements[i].style.outline = "1px solid limegreen";
			} 
			console.log("pomyślnie włączano akcje")
		}
		x = 1
	}else{
		console.log("wyłączanie buttona")
		for (var i = 0; i < elements.length; i++) {
				elements[i].style.outline = "initial";
				console.log("pomyślnie wyłączono akcje")
		}
		x = 0
	}
}
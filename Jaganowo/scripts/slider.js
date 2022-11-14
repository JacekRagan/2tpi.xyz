var slideIndex = 0;
showSlides();
var slides, dots, timer;

function showSlides() {
	var i;
	slides = document.getElementsByClassName("mySlides");
	dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	timer = setTimeout(showSlides, 4000);
}

function plusSlides(position) {
	clearTimeout(timer);
	slideIndex += position;
	if (slideIndex > slides.length) {
		slideIndex = 1
	} else if (slideIndex < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
	clearTimeout(timer);
	if (index > slides.length) {
		index = 1
	} else if (index < 1) {
		index = slides.length
	}
	slideIndex = index;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";
	timer = setTimeout(showSlides, 4000);
}
'use strict';
$(function() {
	var width = 720;
	var animationSpeed = 600;
	var currentSlide = 1;
	var $slider = $('#slider');
	var $slideContainer = $('.slides', $slider);
	var $slides = $('.slide', $slider);
	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({
				'margin-left': '-=' + width
			}, animationSpeed, function() {
				if (++currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		});
	}

	function pauseSlider() {
		clearInterval(interval);
	}
	startSlider();
});
$(function() {
	var width = 720;
	var animationSpeed = 600;
	var currentSlide = 1;
	var $slider = $('#slider2');
	var $slideContainer = $('.slides2', $slider);
	var $slides = $('.slide2', $slider);
	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({
				'margin-left': '-=' + width
			}, animationSpeed, function() {
				if (++currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		});
	}

	function pauseSlider() {
		clearInterval(interval);
	}
	startSlider();
});
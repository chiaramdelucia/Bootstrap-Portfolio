$(document).ready(function(){
	var audio = new Audio ("../app/public/javascript/Chiara6.wav");

	$('.name').on('click', function(){
		audio.play();
	});

});
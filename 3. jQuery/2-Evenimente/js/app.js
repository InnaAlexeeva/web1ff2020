$(document).ready(function(){
	$('#moveRightBut').on("click", function(){
		$('#car').animate({
			'left': '+=10px'
		}, 100);
	});

	$('#moveLeftBut').on("click", function(){
		$('#car').animate({
			'left': '-=10px'
		}, 100);
	});
});
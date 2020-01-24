$(document).ready(function(){
	$('body').css({
		'background-color': 'red'
	});

	setTimeout(function(){
		$('body').css({
			'background-color': 'blue'
		});		
	}, 2000);


	setTimeout(function(){
		$('.element').animate({
			'width': '+=100',
			'height': '-=50'
		}, 2000);
	}, 3000);

	setInterval(function(){
		$('.element').animate({
			'left': '+=50'
		}, 500);
	}, 1000);
});
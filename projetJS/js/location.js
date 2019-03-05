$(document).ready(function() {
	/* var interval;
		interval = setInterval(function () {
		  moveRight();
		}, 5000);
	  
		$('.slider').mouseover(function(){
		  clearInterval(interval);
		});
		
		$('.slider').mouseleave(function(){
		  interval = setInterval(function () {
			moveRight();
			}, 5000);
		});*/

		$(document).keydown(function(e){
				if (e.keyCode == 37) {
					moveLeft();
				} else if (e.keyCode == 39) {
					moveRight();
				}
		});
		
		var slideCount = $('.slider ul li').length;
		var slideWidth = $('.slider ul li').width();
		var slideHeight = $('.slider ul li').height();
		var sliderUlWidth = slideCount * slideWidth;
		
		function moveLeft() {
			$('.slider ul').animate({
				left: + slideWidth
			}, 200, function () {
				$('.slider ul li:last-child').prependTo('.slider ul');
				$('.slider ul').css('left', '');
			});
		};
	
		function moveRight() {
			$('.slider ul').animate({
				left: - slideWidth
			}, 200, function () {
				$('.slider ul li:first-child').appendTo('.slider ul');
				$('.slider ul').css('left', '');
			});
		};
	
		$('.prev').click(function () {
			moveLeft();
			return false;
		});
	
		$('.next').click(function () {
			moveRight();
			return false;
		});
	
	});    
	
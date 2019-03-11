	// Map Google
	var map;
		function initMap() {
			var myLatLng = {lat: 45.764043, lng: 4.835659};
		  map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 14
		  });
	
		}

		ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c0b053aec47fb9e03232563717a89df9167ab593', function(reponse){
			var stations = JSON.parse(reponse);
			stations.forEach(function(station) {
				var marker = new google.maps.Marker({
					position: station.position,
					map: map,
					title: station.name
				  });
				  
				  marker.addListener('click', function (e) {
					var stationName = marker.title;
					var nbPlaces = station.bike_stands;
					var nbFree = station.available_bike_stands;
					
					document.getElementById('station').value = stationName;
					document.getElementById('bikes').value = 'Places : ' + nbPlaces;
					document.getElementById('available').value = 'Disponibles : ' + nbFree;
				
				});
			});
		});
		

	

	
		
		$(document).ready(function() {

	/* var interval;
		interval = setInterval(function () {
		  moveRight();
		}, 5000);
	  
		$('#slider').mouseover(function(){
		  clearInterval(interval);
		});
		
		$('#slider').mouseleave(function(){
		  interval = setInterval(function () {
			moveRight();
			}, 5000);
		}); */

		$(document).keydown(function(e){
				if (e.keyCode == 37) {
					moveLeft();
				} else if (e.keyCode == 39) {
					moveRight();
				}
		});
		
		var slideCount = $('#slider ul li').length;
		var slideWidth = $('#slider ul li').width();
		
	
		
		// $('._slider ul li:last-child').prependTo('._slider ul');
	
		function moveLeft() {
			$('#slider ul').animate({
				left: + slideWidth
			}, 200, function () {
				$('#slider ul li:last-child').prependTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};
	
		function moveRight() {
			$('#slider ul').animate({
				left: - slideWidth
			}, 200, function () {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
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


	
		

		// Progress bar :
		var progressBar = $('.determinate');
		var barWidth = progressBar.width();
		if (barWidth <= 500){
			progressBar.css('background-color','orange');
		}else {
			progressBar.css('background-color','#62F1BD');
		} ;

		$('#signature').mousedown(function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
             
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw();
        });
 
        $('#signature').mousemove(function(e){
            if(paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw();
            }
        });      
 
        $('#signature').mouseup(function(e){
            paint = false;
             
        });
 
        $('#signature').mouseleave(function(e){
            paint = false;
        });
 
        var clickX = new Array();
        var clickY = new Array();
        var clickDrag = new Array();
        var paint;
 
        function addClick(x, y, dragging)
        {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        }
 
        function redraw(){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
             
            ctx.strokeStyle = "#333";
            ctx.lineJoin = "round";
            ctx.lineWidth = 8;
             
            for(var i=0; i < clickX.length; i++) {       
                ctx.beginPath();
                if(clickDrag[i] && i){
                    ctx.moveTo(clickX[i-1], clickY[i-1]);
                }else{
                    ctx.moveTo(clickX[i]-1, clickY[i]);
                }
                ctx.lineTo(clickX[i], clickY[i]);
                ctx.closePath();
                ctx.stroke();
            }
        }
		
	
	});
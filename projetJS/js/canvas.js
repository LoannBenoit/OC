$(document).ready(function(){
    var Canvas = {
        // Mouse coordinates
        mouseX: event.clientX,
        mouseY: event.clientY,
        mouseDown: false,

        lastX: mouseX,
        lastY: mouseY,
    
        // Set the canvas 
        init: function () {
            
            // Define the canvas in the DOM and add a context
            var canvas = $('#signature')[0];
            ctx = canvas.getContext('2d');
    
            // Draw a dot when mouse button is down
            $('#signature').mousedown('mousedown', function() {
                Canvas.mouseDown = true;
                Canvas.drawLine(Canvas.mouseX, Canvas.mouseY, 4);
            });

            // Get the mouse position and drow a dot if mouse button is held down
            $('#signature').mousemove('mousemove', function(e){
                Canvas.getMousePos(e);
                if (Canvas.mouseDown == true) {
                    Canvas.drawLine(Canvas.mouseX, Canvas.mouseY, 4);
                }
            });

            // Prevent from drawing when mouse button is not down
            $('#signature').mouseup('mouseup', function(){
                Canvas.mouseDown = false;
                lastX = Canvas.mouseX;
                lastY = Canvas.mouseY;
            });
        },
    
        // Draw a dot at "x" and "y" coordinate with a custom size
        drawLine: function (x, y, size) {
            ctx.strokeStyle = "#45505b";
            ctx.lineCap = "round";
            ctx.beginPath();
    
            // First, move to the old (previous) position
            // ctx.moveTo(Canvas.lastX, Canvas.lastY);
    
            // Now draw a line to the current touch/pointer position
           ctx.lineTo(x, y);
    
            // Set the line thickness and draw the line
            ctx.lineWidth = size;
            ctx.stroke();
    
            ctx.closePath();
    
            // Update the last position to reference the current position
            Canvas.lastX = x;
            Canvas.lastY = y;
    
      
        },
    
        // Get the current mouse position relative to the top-left of the canvas
        getMousePos: function (e) {
            if (!e)
                var e = event;
    
            if (e.offsetX) {
                Canvas.mouseX = e.offsetX;
                Canvas.mouseY = e.offsetY;
            } else if (e.layerX) {
                Canvas.mouseX = e.layerX;
                Canvas.mouseY = e.layerY;
            }
        },
    
        
    }
    
    $(document).ready(function () {
        Canvas.init();
    });
});



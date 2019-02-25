$(document).ready(function(){
    $(document).ready(function(){
        $('#demo-carousel-auto').carousel();
         setInterval(function() {
           $('#demo-carousel-auto').carousel('next');
         }, 1500);    
           
       });
});
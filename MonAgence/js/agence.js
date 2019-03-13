// jQuery part for materialize and JS
$(document).ready(function(){
  $('.tabs').tabs();
  $('.drop').on('click', function () {
      if ($('.second-level').css('display') == 'none') {
          $('.second-level').css('display','block');
      } else if ($('.second-level').css('display') == 'block') {
          $('.second-level').css('display','none');
      }
  });

});


// Plotly part for statistics
var data = [
    {
        x: ['S49', 'S50', 'S51'],
        y: [200, 214, 116],
        type: 'bar'
    }
   
];


var layout = {
  title: 'Nombre de tablettes par semaine',
  yaxis: {
      title: 'Tablettes',
  },

  xaxis: {
      title: 'Semaines',
  },
};

var d3 = Plotly.d3;
var img_jpg = d3.select('#jpg-export');
var config = {
    displayModeBar: true,

    modeBarButtonsToAdd: [{
        name: 'my icon',
        icon: Plotly.Icons.camera,
        ascent: 100,
        transform: 'matrix(1 0 0 -1 0 100)',
        click: function(gd) {
            Plotly.toImage(gd, {height:500,width:500})
            .then(
                function(url) {
                    img_jpg.attr('src', url);
                    return Plotly.toImage(gd,{format:'jpeg', height:600, width:600})
                }
            )
         }
    }]
    
  };

Plotly.newPlot('tester', data, layout, config); 
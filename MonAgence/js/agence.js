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
  }
};

Plotly.newPlot('tester', data, layout, {editable: false}); 
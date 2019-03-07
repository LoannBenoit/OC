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

  var button = $('#btn');
  var semaine;
  var tablettes;

  button.on('click', function(e){
    e.preventDefault();
    semaine = $('#semaines').val();
    tablettes = $('#tablettes').val();
    console.log(semaine);
    console.log(tablettes);
    console.log(data);
  });

});



// Plotly part for statistics
var data = [
    {
        x: ['S49', 'S50', 'S51'],
        y: [157, 214, 116],
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

Plotly.newPlot('tester', data, layout, {editable: true});
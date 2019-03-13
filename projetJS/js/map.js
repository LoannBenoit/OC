// Declaration of the map
var map = {
    lat: 45.764043,
    lng: 4.835659,

    // Setting map's conditions
    initMap: function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: this.lat,
                lng: this.lng,
            },
            zoom: 14,
        });
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
        
    },


    // Init the map
    init: function() {
        this.initMap();
    },


  
}


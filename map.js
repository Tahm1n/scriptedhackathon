/*global initMap*/

initMap = function() {
    var sinai = {lat: 40.73262, lng: -73.98248};
    var NYPRES = {lat: 40.84089, lng: -73.9417452};

var Bellevue = {lat: 40.7393, lng: -73.9758};

var Sanai = {lat: 40.7393, lng: -73.9758};

var NYMCQ = {lat: 40.7475031, lng: -73.8255061};

var Lenox = {lat: 40.7732745, lng: -73.9616613};

var StLukes = {lat:40.785311, lng: -73.969376};
// hospitalArry = [Bellevue,Sanai,NYMCQ,Lenox, StLukes]

    var mapOptions = {
      zoom: 12,
      center: sinai
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var sinaiMarker = new google.maps.Marker({
      position: sinai,
      map: map 
    });
    var LenoxMarker = new google.maps.Marker({
      position: Lenox,
      map: map 
    });
    var NYMCQMarker = new google.maps.Marker({
      position: NYMCQ,
      map: map 
    });
    var StLukesMarker = new google.maps.Marker({
      position: StLukes,
      map: map 
    });
    var BellevueMarker = new google.maps.Marker({
      position: Bellevue,
      map: map 
    });
    
    
};    

$( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});

 var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      
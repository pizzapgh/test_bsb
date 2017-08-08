
$(document).ready(function(){

  // Even when the window is resized, run this code.
  $(window).resize(function(){

    // Variables
    var windowHeight = $(window).height();

    // Find the value of 90% of the viewport height
    var ninetypercent = .8 * windowHeight;

    // When the document is scrolled ninety percent, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function(){

      // Store the document scroll function in a variable
      var y = $(this).scrollTop();

      // If the document is scrolled 90%
      if( y > ninetypercent) {

        // Add the "sticky" class
        $('.bottom-bar').addClass('sticky').addClass('grit');
      } else {
        // Else remove it.
        $('.bottom-bar').removeClass('sticky');
      }
    });

  // Call it on resize.
  }).resize();

}); // jQuery

function initMap() {

	var southside = {
		info: '<strong>Big Shot Bobs in South Side</strong><br>\
					1324 E. Carson St <br> Pittsburgh, PA 15203<br>\
					<a href="https://goo.gl/maps/MTcf26y1dJN2">Get Directions</a>',
		lat: 40.428626,
		long: -79.984257
	};

	var coraoplis = {
		info: '<strong>Big Shot Bobs in Coraopolis</strong><br>\
					1534 5th Avenue, <br> Coraopolis, PA 1510<br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
		lat: 40.513421,
		long: -80.154136
	};

	var carnegie = {
		info: '<strong>Big Shot Bobs in Carnegie</strong><br>\r\
					1006 Washington Avenue <br> Carnegie, PA 15106<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 40.398829,
		long: -80.082950
	};

	var beechview = {
		info: '<strong>Big Shot Bobs in Beechview</strong><br>\r\
					2102 Broadway Ave, <br> Pittsburgh, PA 15216<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 40.405401,
		long: -80.030123
	};

	var aliquippa = {
		info: '<strong>Big Shot Bobs in Aliquippa</strong><br>\r\
					1125 Franklin Avenue, <br> Aliquippa, PA 15001<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 40.614007,
		long: -80.258495
	};

	var avalon = {
		info: '<strong>Big Shot Bobs in Avalon</strong><br>\r\
					344 Union Avenue <br> Pittsburgh, PA 15202<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 40.503691,
		long: -80.061847
	};


	var locations = [
      [southside.info, southside.lat, southside.long, 0],
      [coraoplis.info, coraoplis.lat, coraoplis.long, 1],
      [carnegie.info, carnegie.lat, carnegie.long, 2],
			[beechview.info, beechview.lat, beechview.long, 3],
			[aliquippa.info, aliquippa.lat, aliquippa.long, 4],
			[avalon.info, avalon.lat, avalon.long, 5],
    ];

    var options = {
      zoom: 15,
      center: { lat: 40.439275, lng: -80.021310},
      styles: [
        {
       "featureType": "all",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "color": "#ffffff"
           }
       ]
   },
   {
       "featureType": "all",
       "elementType": "labels.text.stroke",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "all",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "color": "#c9323b"
           }
       ]
   },
   {
       "featureType": "administrative",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "color": "#c9323b"
           },
           {
               "weight": 1.2
           }
       ]
   },
   {
       "featureType": "administrative.province",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative.locality",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "lightness": "-1"
           }
       ]
   },
   {
       "featureType": "administrative.locality",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "administrative.neighborhood",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "lightness": "0"
           },
           {
               "saturation": "0"
           }
       ]
   },
   {
       "featureType": "administrative.neighborhood",
       "elementType": "labels.text.stroke",
       "stylers": [
           {
               "weight": "0.01"
           }
       ]
   },
   {
       "featureType": "administrative.land_parcel",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "on"
           }
       ]
   },
   {
       "featureType": "administrative.land_parcel",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative.land_parcel",
       "elementType": "labels.text.stroke",
       "stylers": [
           {
               "weight": "0.01"
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#e53e2e"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "geometry",
       "stylers": [
           {
               "visibility": "off"
           },
           {
               "hue": "#00ff43"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "poi.park",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "poi.park",
       "elementType": "geometry",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "poi.park",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "geometry",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "color": "#ed5b5b"
           },
           {
               "visibility": "on"
           },
           {
               "saturation": "4"
           },
           {
               "lightness": "-9"
           },
           {
               "gamma": "1.25"
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.highway.controlled_access",
       "elementType": "geometry",
       "stylers": [
           {
               "visibility": "on"
           }
       ]
   },
   {
       "featureType": "road.highway.controlled_access",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "color": "#99282f"
           },
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "on"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#ff1e2c"
           },
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "visibility": "on"
           },
           {
               "color": "#ff2c2c"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.local",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#e6232f"
           },
           {
               "visibility": "on"
           },
           {
               "weight": "2.08"
           }
       ]
   },
   {
       "featureType": "road.local",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#9c686b"
           },
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#f68a1e"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   }
      ]
    };

  var map = new google.maps.Map(document.getElementById('map'), options);

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5],),
			map: map,
     icon: 'https://image.ibb.co/e5hmC5/bab_marker.png'
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}



$(document).ready(function() {
    $("#southside-info, #carnegie-info, #aliquippa-info, #beechview-info, #weirton-info, #coraopolis-info, #midland-info").hide();
});


$("#link-avalon").on('click', function() {
    $("#avalon-info").show();
    $("#southside-info, #carnegie-info, #aliquippa-info, #beechview-info, #weirton-info, #coraopolis-info, #midland-info").hide();
});

$("#link-southside").on('click', function() {
    $("#southside-info").show();
    $("#carnegie-info, #aliquippa-info, #beechview-info, #weirton-info, #coraopolis-info, #avalon-info, #midland-info").hide();
});
$("#link-carnegie").on('click', function() {
    $("#carnegie-info").show();
    $("#aliquippa-info, #beechview-info, #weirton-info, #coraopolis-info, #avalon-info, #southside-info, #midland-info").hide();
});
$("#link-coraopolis").on('click', function() {
    $("#coraopolis-info").show();
    $("#aliquippa-info, #beechview-info, #weirton-info, #carnegie-info, #avalon-info, #southside-info, #midland-info").hide();
});
$("#link-aliquippa").on('click', function() {
    $("#aliquippa-info").show();
    $("#coraopolis-info, #beechview-info, #weirton-info, #carnegie-info, #avalon-info, #southside-info, #midland-info").hide();
});
$("#link-beechview").on('click', function() {
    $("#beechview-info").show();
    $("#coraopolis-info, #aliquippa-info, #weirton-info, #carnegie-info, #avalon-info, #southside-info, #midland-info").hide();
});
$("#link-weirton").on('click', function() {
    $("#weirton-info").show();
    $("#coraopolis-info, #aliquippa-info, #beechview-info, #carnegie-info, #avalon-info, #southside-info, #midland-info").hide();
});

$("#link-midland").on('click', function() {
    $("#midland-info").show();
    $("#coraopolis-info, #aliquippa-info, #beechview-info, #carnegie-info, #avalon-info, #southside-info, #weirton-info").hide();
});

$(".button-area li").on('click', function() {
      $('.highlight-me').addClass('currents');
});

// buttons for locations

var animationEvent =
    "webkitAnimationEnd oanimationend msAnimationEnd animationend";
$("#bounce").click(function() {
  $("#logo").addClass("bounce");
  $("#logo").one(animationEvent, function(event) {
    $("#logo").removeClass("bounce");
  });
  // add animation class on every click
});



$(document).ready(function(){
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});

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
        $('.bottom-bar').addClass('sticky');
				$('.highlight-me').addClass('current');
				$('a[href*=specials]').removeClass('current');
				$('a[href*=bellvue]').removeClass('current');
				$('a[href*=index]').removeClass('current');
      } else {
        // Else remove it.
        $('.bottom-bar').removeClass('sticky');
				$('.highlight-me').removeClass('current');
      }
    });

  // Call it on resize.
  }).resize();

}); // jQuery



var marker;
var map;

$("#link1").click(function(){
    changeMarkerPos(40.502209, -80.061847);
});
$("#link2").click(function(){
    changeMarkerPos(40.428626, -79.984257);
});
$("#link3").click(function(){
    changeMarkerPos(40.398829, -80.082950);
});
$("#link4").click(function(){
    changeMarkerPos(40.513421, -80.154136);
});
$("#link5").click(function(){
    changeMarkerPos(40.614007, -80.258495);
});
$("#link6").click(function(){
    changeMarkerPos(40.405401, -80.030123);
});
$("#link7").click(function(){
    changeMarkerPos(40.418957, -80.589517);
});
$("#link8").click(function(){
    changeMarkerPos(40.632565, -80.446455);
});



function initialize() {
    var styles = [
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
                "visibility": "on"
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
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
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
                "color": "#f99aa0"
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
                "visibility": "simplified"
            },
            {
                "lightness": "-28"
            },
            {
                "saturation": "-52"
            },
            {
                "color": "#fe7a7a"
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
                "visibility": "on"
            }
        ]
    }
];
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    var mapProp = {
        center: new google.maps.LatLng(40.441830, -80.000387),
        zoom: 14,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style')

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.441830, -80.000387),
        animation: google.maps.Animation.DROP,
        icon: 'https://image.ibb.co/e5hmC5/bab_marker.png',
    });

    google.maps.event.addListener(marker, 'click', function() {
         window.open('https://goo.gl/maps/w25fGMArhby');
      });


    marker.setMap(map);
    map.panTo(marker.position);
    map.panBy(-430, 0);
}

function changeMarkerPos(lat, lon){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
    map.panBy(-430, 0);
}


google.maps.event.addDomListener(window, 'load', initialize);

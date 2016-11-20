google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(33.945132,-117.520467),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : false,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [ { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "stylers": [ { "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 } ] },{ "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ],
        }
        var mapElement = document.getElementById('nbcc-locations');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['NBCC Norco', '1769 Western Avenue<br><br />Norco, CA 92860', '(951) 734-9574', 'undefined', 'http://nbcc.org', 33.906835,  -117.574498, 'https://mapbuildr.com/assets/img/markers/solid-pin-blue.png'],['NBCC Jurupa Valley', '9010 Limonite Avenue<br><br />Jurupa Valley, CA 92509', 'undefined', 'undefined', 'nbccjv.org', 33.975023,  -117.480111, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png']
        ]; 
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}
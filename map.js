/**
 * Impart Engine
 * Rapid Application Development framework
 * Created by Kweku Kankam on 2/17/15.
 */
$(document).ready(function(){

    function initialize() {
        //get current position
        if (navigator.geolocation) {
            console.log("yes")
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(points){
            var lati = points.coords.latitude;
            var longi = points.coords.longitude;
            showMap(lati,longi);
        }
        function showMap(lati,longi){
            var storeposition = new google.maps.LatLng(5.625425,-0.153851);
            var clientposition;
            var markers = [];
            var line;
            var mapOptions = {

                center: { lat: lati, lng: longi},
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('map-area'),
                mapOptions);

            // Create a marker for each place.
            var myLatlng = new google.maps.LatLng(lati,longi);
            var appmarker = new google.maps.Marker({
                title: "Your Current Location",
                position: myLatlng
            });
            // Create a marker for store location.
            var storeLatlng = new google.maps.LatLng(5.625425,-0.153851);
            var storemarker = new google.maps.Marker({
                title: "Our Store Location ",
                position: storeLatlng
            });

            appmarker.setMap(map);
            storemarker.setMap(map);
            clientposition = appmarker.getPosition()
            // Create the search box and link it to the UI element.
            var input = /** @type {HTMLInputElement} */(
                document.getElementById('pac-input'));
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            var searchBox = new google.maps.places.SearchBox(
                /** @type {HTMLInputElement} */(input));

            // [START region_getplaces]
            // Listen for the event fired when the user selects an item from the
            // pick list. Retrieve the matching places for that item.
            google.maps.event.addListener(searchBox, 'places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }
                for (var i = 0, marker; marker = markers[i]; i++) {
                    marker.setMap(null);
                }

                // For each place, get the icon, place name, and location.
                markers = [];
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    var marker = new google.maps.Marker({
                        // map: map,
                        //icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });

                    markers.push(marker);

                    marker.setMap(map);
                    clientposition = marker.getPosition()

                    bounds.extend(place.geometry.location);
                }
                map.fitBounds(bounds);
            });
            // [END region_getplaces]
            var rad = function(x) {
                return x * Math.PI / 180;
            };

            var getDistance = function(p1, p2) {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(p2.lat() - p1.lat());
                var dLong = rad(p2.lng() - p1.lng());
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d; // returns the distance in meter
            };

            // Bias the SearchBox results towards places that are within the bounds of the
            // current map's viewport.
            google.maps.event.addListener(map, 'bounds_changed', function() {
                var self = this
                var bounds = map.getBounds();
                this.setZoom(14);
                searchBox.setBounds(bounds);
                if(typeof(line) != "undefined"){
                    line.setMap(null);
                }

                line = new google.maps.Polyline({
                    path: [storeposition,clientposition],
                    strokeColor: "#7e2788",
                    strokeOpacity: 0.7,
                    geodesic: true,
                    strokeWeight: 2
                });
                line.setMap(map);
                console.log(getDistance(storeposition,clientposition));
            });

        }
    }


})
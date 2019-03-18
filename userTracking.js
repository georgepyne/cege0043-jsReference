var userLocation;

function trackLocation(){

    if(navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById("showLocation").innerHTML = "Geolocation is not supported by this browser. ";
    }
}

function showPosition(position){
    if (userLocation) {
        mymap.removeLayer(userLocation);
    }
    if (L.Browser.mobile) {
        userLocation = L.marker([position.coords.latitude, position.coords.longitude])
        userLocation.addTo(mymap).bindPopup("<b>Your location</b>")
        mymap.flyTo([position.coords.latitude, position.coords.longitude], 18);
    } else {
        alert("Secure browsing required for browser location services.")
        mymap.flyTo([position.coords.latitude, position.coords.longitude], 18);
        userLocation = L.marker([position.coords.latitude, position.coords.longitude])
        userLocation.addTo(mymap).bindPopup("<b>Your location</b>")
    }
}


function getDistance(){
    navigator.geolocation.getCurrentPosition(getDistanceFromMultiplePoints);
}

function getDistanceFromPoint(position){
    var lat = 51.524616;
    var lng = -0.13818;
    var distance = calculateDistance(position.coords.latitude, position.coords.longitude, lat, lng, 'K'); // get distance in Km
    if (Number(distance) <= 0.100) {
        alert("within 100 meters of Warren Street");
    }
    try {
        alert("You are "+ distance.toFixed(2).toString()+"KM to UCL.")
    }
    catch(err){
        alert("Could not locate you.")
    }
    alert("You are")
}
// distance between two points

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lon1/180;
    var radlon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var subAngle = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    subAngle = Math.acos(subAngle);
    subAngle = subAngle * 180/Math.PI; // convert the degree value returned by acos back to degrees from radians
    dist = (subAngle/360) * 2 * Math.PI * 3956; // ((subtended angle in degrees)/360) * 2 * pi * radius )
    if (unit=="K") { dist = dist * 1.609344 ;} // convert miles to km
    // where radius of the earth is 3956 miles
    if (unit=="N") { dist = dist * 0.8684 ;} // convert miles to nautical miles
    return dist;
};

function getDistanceFromMultiplePoints(position) {
    var minDist = 1000000000;
    var closestQuake = "";
    for (var i = 0; i < earthquakes.features.length; i++) {
        var obj = earthquakes.features[i];
        var distance = calculateDistance(position.coords.latitude, position.coords.longitude, obj.geometry.coordinates[0], obj.geometry.coordinates[1], 'K'); // get distance in Km
        if (distance < minDist) {
            minDist = distance;
            closestQuake = obj.properties.place;
        }

    }
    console.log("Earthquake: " + closestQuake + " is: " + minDist + " kilometers away");
}
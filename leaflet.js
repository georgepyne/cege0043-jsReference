var mymap = L.map('mapid').setView([51.505,-0.09],4);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', { maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets' }).addTo(mymap);


if (L.mobile){
    document.getElementById("mapid").style = "width: 1080px; height: 1920 px;";
} else {
    document.getElementById("mapid").style = "width: 600px; height: 400px;";
}

var myFlat = L.marker([51.483111, -0.112868]).bindPopup("Lockwoody").addTo(mymap);
var myUni = L.marker([51.524487, -0.133877]).bindPopup("UCL").addTo(mymap);

var testMarkerRed = L.AwesomeMarkers.icon({
    icon: 'play',
    markerColor: 'red' });
var testMarkerPink = L.AwesomeMarkers.icon({
    icon: 'play',
    markerColor: 'pink' });
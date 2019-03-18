var client;
var earthquakelayer;
var earthquakes;


function addPointLinePoly() {
    var marker1 = L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup("<b>Hello World!</br><br />I am a popup.").openPopup();

    var pointA = new L.LatLng(51.63432, 0.22496);
    var pointB = new L.LatLng(51.9721, 0.70351);
    var pointArray = [pointA, pointB];

    var firstpolyline = new L.polyline(pointArray, {
        color: 'blue',
        weight: 5,
        opacity: 0.8,
        smoothFactor: 1
    });

    firstpolyline.addTo(mymap);

    var myPolygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ],{
        color:'green',
        fillColor:'#f05',
        fillOpacity:0.5
    }).addTo(mymap).bindPopup("I am a polygon.");
};

function getEarthquakes() {
    client = new XMLHttpRequest();
    client.open('GET', 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    client.onreadystatechange = earthquakeResponse; // earthquakeRepsonse is a method
    client.send()
};

function earthquakeResponse() {
    if (client.readyState == 4) {
        var earthquakedata = client.responseText;
        loadEarthquakelayer(earthquakedata);
    }
};

function loadEarthquakelayer(earthquakedata) {
    var earthquakejson = JSON.parse(earthquakedata);
    earthquakes = earthquakejson;

    earthquakelayer = L.geoJson(earthquakejson,
        {
            pointToLayer: function(feature, latlng)
            {
                if (feature.properties.mag > 1.75) {
                    return L.marker(latlng).bindPopup("<b>"+feature.properties.place+"</b>");
                } else {
                    return L.marker(latlng).bindPopup("<b>"+feature.properties.place+"</b>");
                }
            },
        }).addTo(mymap);
    // Use flyToBounds for smoother pan to earthquake points
    mymap.flyToBounds(earthquakelayer.getBounds()); // Use layer getbounds method for bounds arg
}
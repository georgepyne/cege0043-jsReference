
/** This is a description of the foo function. */
function trackAndCircle() {
    // trackLocation();
    addPointLinePoly();
    getEarthquakes();
    loadW3HTML();

}


function startup() {
    document.addEventListener('DOMContentLoaded', function() {
        trackAndCircle();
    }, false);
    getPort();
}

function loadW3HTML(){
    w3.includeHTML();
}







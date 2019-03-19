
/** This is a description of the foo function. */
function trackAndCircle() {
    // trackLocation();
    addPointLinePoly();
    getEarthquakes();

}


function startup() {
    document.addEventListener('DOMContentLoaded', function() {
        trackAndCircle();
    }, false);
    getPort();
}







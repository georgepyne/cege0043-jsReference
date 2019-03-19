// def global vars for http/https port numbers
var httpPortNumber;
var httpsPortNumber;

function getPort(){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(xhr.responseText, "application/xml");
        // qualified name "node-port-http(s)" is defined recursively and qualifies it
        httpPortNumber = doc.getElementsByTagName("node-port-http").item(0).textContent;
        // access first item by index 0
        httpsPortNumber = doc.getElementsByTagName("node-port-https").item(0).textContent;
        });

    // Config location is dependent whether user is on browser or mobile
    // http and https not present on mobile
    var configLocation = "res/port.xml";
    xhr.open("get", configLocation, true); // method, location and async bool
    xhr.send();
}


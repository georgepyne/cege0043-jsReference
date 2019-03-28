// var xhr;

// function callDivChange(){
//     xhr = new XMLHttpRequest();
//     var filename = document.getElementById("filename").value;
//     xhr.open("GET", filename, true);
//     xhr.onreadystatechange =  processDivChange;
//     xhr.send();
// }
//
// function processDivChange(){
//     if (xhr.readyState < 4){
//         document.getElementById('ajaxtest').innerHTML = "Loading...";
//         // alert(xhr.status) // Use
//     } else if (xhr.status === 200 && xhr.status < 300){
//         // http status between 200-299 are all successful
//         document.getElementById('div1').innerHTML = xhr.responseText;
//     }
// }

// var xhrNode;

// function callDivNodeJSChange() {
//     xhrNode = new XMLHttpRequest();
//     var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber;
//     xhrNode.open("GET", url, true);
//     xhrNode.onreadystatechange = processDivNodeJSChange;
//     try {
//         xhrNode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     } catch (err) {
//         //this only works on IE browser
//     }
//     xhrNode.send();
// }
//
// function processDivNodeJSChange() {
//     if (xhrNode.readyState < 4){
//         document.getElementById('ajaxtest').innerHTML = "Loading..."
//     } else if (xhrNode.readyState === 4){
//         if (xhrNode.status == 200 && xhr.status < 300){
//             document.getElementById('ajaxtest').innerHTML = xhrNode.responseText;
//         }
//     }
// }
//
// function callDivNodeJSChange() {
//     xhrNode = new XMLHttpRequest();
//     // var filename = document.getElementById("filename").value;
//     try{
//         var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber;
//         xhrNode.open("GET", url, true);
//         xhrNode.onreadystatechange = processDivNodeJSChange;
//     } catch(err) {
//         var url = "https://developer.cege.ucl.ac.uk:" + httpsPortNumber;
//         xhrNode.open("GET", url, true);
//         xhrNode.onreadystatechange = processDivNodeJSChange;
//     } finally {
//         xhrNode.onerror = function(){
//             alert("XHR ERROR")
//         }
//
//     }
//
//     xhrNode.send();
// }
//
// function processDivNodeJSChange() {
//     if (xhrNode.readyState < 4) {
//         document.getElementById('ajaxtest').innerHTML = "Loading...";
//     } else if (xhrNode.readyState === 4) {
//         if (xhrNode.status == 200 && xhrNode.status < 300) {
//             document.getElementById('ajaxtest').innerHTML = xhrNode.responseText;
//         }
//     }
// }
//
//
//
//

var xhrNode;

function callDivNodeJSChange() {
    xhrNode = new XMLHttpRequest();
    // var filename = document.getElementById("filename").value;
    var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber;
    xhrNode.open("GET", url, true);
    xhrNode.onreadystatechange = processDivNodeJSChange;
    xhrNode.send();
}

function processDivNodeJSChange() {
    if (xhrNode.readyState < 4) {
        document.getElementById('ajaxtest').innerHTML = "Loading...";
    } else if (xhrNode.readyState === 4) {
        if (xhrNode.status == 200 && xhrNode.status < 300) {
            document.getElementById('ajaxtest').innerHTML = xhrNode.responseText;
        }
    }
}
var client;

function startDataUpload() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var module = document.getElementById("module").value;
    var postString = "name="+name+"&surname="+surname+"&module="+module;

    var checkString = "";
    for (var i = 1;i< 5;i++){
        if (document.getElementById("check"+i).checked === true) {
            checkString = checkString + document.getElementById("check"+i).value + "||"
        }
    }
    postString = postString+"&modulelist="+checkString;

    // now get values from radio button
    if (document.getElementById("morning").checked){
        postString=postString+"&lecturetime=morning";
    }
    if (document.getElementById("afternoon").checked){
        postString=postString+"&lecturetime=afternoon";
    }

    var language = document.getElementById("laguageselectbox").value;
    postString=postString+"&language="+language;
    // alert(postString);
    uploadData(postString);

}


/*
 */
function uploadData(postString) {
    client = new XMLHttpRequest();
    postString = postString + "&port_id=" + httpPortNumber;
    var url = 'http://developer.cege.ac.uk:' + httpPortNumber + "/uploadData";
    client.open("POST", url, true);
    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    client.onreadystatechange = dataUploaded;
    // alert(client.responseText);
    client.send(postString);

}


/* Function to check whether the data is ready from the server
 */
function dataUploaded() {
    if (client.readyState == 4){
        document.getElementById("dataUploadResults").innerHTML = client.responseText;
    }
}


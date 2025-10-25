function sendData(address){

    fetch("http://192.168.4.1/lights", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: address
    })
        .then(response => response.text())
        .then(data => {console.log(data);})
        .catch(err => console.log(err));

}
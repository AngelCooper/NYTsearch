$(document).ready(function () {
    var APIkey = "rqZFSP5bhXeXZG47FKvIzx7cpq5RG1Tp"

    var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=" + APIkey

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    }
})
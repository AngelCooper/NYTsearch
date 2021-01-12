
$(document).ready(function () {

    var yearStart = ""
    var yearEnd = ""

    var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=rqZFSP5bhXeXZG47FKvIzx7cpq5RG1Tp"

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
});




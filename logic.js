$(document).ready(function () {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=pNI9zJwwGgvD913UF1vxDKz8J3FC6yde"

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
});




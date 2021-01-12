
$(document).ready(function () {


    //empty variable to hold search term
    var searchQuery = ""
    //empty variable to hold the number of records to show
    var recordNumbers = ""
    //empty variable to hold the number of records to the Start Year
    var yearStart = ""
    //empty variable to hold the number of records to the End Year
    var yearEnd = ""
    // We might need to append 0101 to the year







    //search input
    $(".search").on("click", function () {
        searchQuery = $("#search-input").val();
        console.log(searchQuery);
        recordNumbers = $("#num-to-get").val();
        console.log(recordNumbers);
        yearStart = $("#start-year").val();
        console.log(yearStart);
        yearEnd = $("#end-year").val();
        console.log(yearEnd);

        var queryURL = " https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + yearStart + "0101&end_date=" + yearEnd + "0101&q=" + searchQuery + "&api-key=pNI9zJwwGgvD913UF1vxDKz8J3FC6yde"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        })

    });




    $(".clear btn").on(function () {
        localStorage.clear();
        initPage()
    })
});


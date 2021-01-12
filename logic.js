$(document).ready(function() {

    //empty variable to hold search term
    var searchQuery = ""
    //empty variable to hold the number of records to show
    var recordNumbers = ""
    //empty variable to hold the number of records to the Start Year
    var yearStart = ""
    //empty variable to hold the number of records to the End Year
    var yearEnd = ""
    // We might need to append 0101 to the year


    var queryURL = " https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + yearStart + "0101&end_date=" + yearEnd + "0101&q=" + searchQuery + "&api-key=pNI9zJwwGgvD913UF1vxDKz8J3FC6yde"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
    })
    
    //search input
    $(".search").on("click", function() {
        searchQuery = $("#search-input").val();
        console.log(searchQuery)
    })

    //number of records input
    $(".search").on("click", function() {
        recordNumbers = $("#num-to-get").val();
        console.log(recordNumbers)
    })

    //start year input
    $(".search").on("click", function() {
        yearStart = $("#start-year").val();
        console.log(yearStart)
    })

    //end year input
    $(".search").on("click", function() {
        yearEnd = $("#end-year").val();
        console.log(yearEnd)
    })

    


    $(".clear btn").on(function() {
        localStorage.clear();
        initPage()
    })

    
});
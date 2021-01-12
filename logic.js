
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

        recordNumbers = $("#num-to-get").val();

        yearStart = $("#start-year").val();

        yearEnd = $("#end-year").val();


        var queryURL = " https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + yearStart + "0101&end_date=" + yearEnd + "0101&q=" + searchQuery + "&api-key=pNI9zJwwGgvD913UF1vxDKz8J3FC6yde"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var articles = response.response.docs;
            $(articles).each(function (i, article) {
                if(i >= +recordNumbers){ return; }
                $(".articles-container").append(/*html*/`
                <div class="article">
                    <div class="index">${i + 1}</div>
                    <h2 class="title">${article.headline.main}</h2>
                    <br>
                    <br>
                    <br>
                    <div class="author" >${article.byline.original}</div>
                </div>
                `)

                
            })
        })
        //     $(".articles-container").append(/*html*/`
        //     <div class="article">
        //     <div class="index">1</div>
        //     <h2 class="title">Mark Twain Did Something</h2>
        //     <br>
        //     <br>
        //     <br>
        //     <div class="author" >By: Reagan Grunwald</div>
        // </div>
        //     `)
    })

});




// $(".clear btn").on(function () {
//     localStorage.clear();
//     initPage()
// })
// });


$(document).ready(function() {


    var generalSearch;  
    
    $("").on("click", function(event) {
       //add element in the quotes above and below
        var search = $("").val();
        generalSearch = //;

        var queryUrl = //api url

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response)
        });

    });  

    
})
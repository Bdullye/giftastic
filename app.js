$(document).ready(function(){
    
    // create array.
    // var actors = ['Chris Rock', 'Chris Farley', 'Will Ferrell', 'Trey Parker', 'Matt Stone', 'Ryan Reynolds', 'Will Smith', 'Olivia Wilde', 'Joe Rogan', 'Kate McKinnon'];

    // access api key and query giphy api. Change http to https.

    $(".gif-img").on("click", function() {
        console.log('111 ' + $(this).attr('data-animate'));
        if($(this).attr('data-animate') == 'true'){
            $(this).attr('data-animate', false);
            $(this).attr('src', $(this).attr('data-still'));
        } else if ($(this).attr('data-animate') == 'false'){
            $(this).attr('data-animate', true);
            $(this).attr('src', $(this).attr('data-gif'));
        }
    });

    $("button").on("click", function() {
        // create button click to link up to html buttons.
        var actors = $(this).attr("actors");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actors + "&api_key=QCeG9vUm7GU0NO1SSCfjLOtFg91HHjvt";
        console.log(actors);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response) {
            console.log(response);
            var data = response.data;

            for (var i = 0; i < 10; i++){
                var gifImage = $("<img>");
                gifImage.addClass('gif-img');
                gifImage.attr("data-still", data[i].images.fixed_width_still.url);
                gifImage.attr("data-gif", data[i].images.fixed_width.url);
                gifImage.attr("data-animate",'false');
                gifImage.attr("src", data[i].images.fixed_width_still.url);
                gifImage.on("click", function() {
                    console.log('111 ' + $(this).attr('data-animate'));
                    if($(this).attr('data-animate') == 'true'){
                        $(this).attr('data-animate', false);
                        $(this).attr('src', $(this).attr('data-still'));
                    } else if ($(this).attr('data-animate') == 'false'){
                        $(this).attr('data-animate', true);
                        $(this).attr('src', $(this).attr('data-gif'));
                    }
                });
                $("#gifs-appear-here").append(gifImage);
            }
        });
    });

});
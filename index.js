$(document).ready(function() {
    console.log("index.js works!");

    $( ".scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-51 }, 500);
    });
});
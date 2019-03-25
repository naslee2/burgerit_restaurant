import classes from './index.css';

$(document).ready(function() {
console.log("index.js works!");
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    // $('a[href^="#"]').on('click', function(event) {
    //     var target = $(this.getAttribute('href'));
    //     if( target.length ) {
    //         event.preventDefault();
    //         $('html, body').stop().animate({
    //             scrollTop: target.offset().top-59
    //         }, 300);
    //     }
    //   });

});
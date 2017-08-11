$(function() {
    $("body").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });

    $("#back-to-start").click(function(event) {
       $('body').animate({
            scrollLeft: 0
        }, 800);
       event.preventDefault();
    });
});

$('#scrollButton').click(function () {
    $('body').delay(50).animate({
        scrollTop: $('#fy').offset().top,
    }, 1200,'easeInOutExpo');
});
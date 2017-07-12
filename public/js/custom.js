// Category drop down
$(document).ready(function() {
    $('.category-main').click(function() {
        $('.vert-category').slideToggle(300);
    });

    // Body scroll 0

});

$(window).scroll(function() {

    if ($(this).scrollTop() > 300) {
        $('.header-bottom-content').addClass('sticky-header');
        $('.vert-category').hide('fast');
    } else {
        $('.header-bottom-content').removeClass('sticky-header');
        $('.vert-category').show('fast');
    }
});

//# sourceMappingURL=custom.js.map

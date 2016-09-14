var main = function() {
    $('.article').click(function() {
        $('.description').hide();
        $(this).children('.description').show();
        $('.article').removeClass('current');
        $(this).addClass('current');
    });
    $(document).keypress(function(event) {
        if (event.which === 111) {
            $('.current').children('.description').toggle();
        } else if (event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
}; 
$(document).ready(main);
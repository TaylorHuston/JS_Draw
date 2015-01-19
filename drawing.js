$(document).ready(function () {
    $('body').append('<div class="container"> </div>');
    var container = $('.container');
    for (i = 0; i < 30; i++) {
        container.append('<div class="row" </div>');
    }
    var row = $('.row');
    for (k = 0; k < 30; k++) {
        row.append('<div class="block"> </div>');
    }
    
    $('.block').on('mouseenter', function () {
        $(this).addClass('touched'); 
    });
});
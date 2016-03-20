$('#nav').affix({
    offset: { top: $('#nav').offset().top }
});

$('#nav-wrapper').height($("#nav").height());

$(window).scroll(function () {
        if ($(window).scrollTop() > 500) { 
            $('site-wrapper').addClass('shrink');
        }
        else{
            $('site-wrapper').removeClass('shrink');
        }
    });

var bar = $('.value-bar');
$(function(){
  $(bar).each(function(){
    bar_width = $(this).attr('aria-valuenow');
    $(this).width(bar_width + '%');
  });
});


$(document).ready(function () {
    
    $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function () {
        $('.overlay').animate({
            opacity: "toggle"
        }, 1000);
       $('.modal').slideDown(1000);
    });

    $('.close').click(function (e) { 
        e.preventDefault();
        $('.overlay').fadeOut(1000);
        $('.modal').slideUp(1000);
    });
});
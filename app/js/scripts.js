$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var popup = new Popup({
        'popup': '.modal__popup',
        'closeModal': '.modal__popup-close',
        'overlay': '.modal__overlay'
    });

    $('.address__button').on('click', function () {
        popup.open($('.modal__write'));
    });

    $('.option').removeClass('product__option--nojs');
    $('.product').hover(
        function(){
            $(this).children('.option').slideDown();
        },
        function(){
            $(this).children('.option').slideUp();
        }
    );

    //var leftBullit = $('.range__indicator--left');
    //var rightBullit = $('.range__indicator--right');
    //var rangeBox = $('.range__box');
    //var paddingLeft = parseFloat(rangeBox.css('padding-left'));
    //var paddingRight = parseFloat(rangeBox.css('padding-right'));
    //var leftDown = false;
    //var rightDown = false;
    //
    //var lineWidth = $('.range__line').width();
    //
    //leftBullit.on('mousedown', function () {
    //    leftDown = true;
    //    var rightX = lineWidth - parseFloat(rightBullit.css('right')) - 20;
    //    rangeBox.on('mousemove', function (e) {
    //        if (leftDown) {
    //            var relativeLeftX = (e.pageX - $(this).offset().left - paddingLeft - 10);
    //            if ((relativeLeftX >= 0) && (relativeLeftX <= rightX )) {
    //                console.log(relativeLeftX);
    //                leftBullit.css('left', (relativeLeftX) + 'px');
    //            }
    //        }
    //    });
    //});
    //
    //$('html').on('mouseup', function () {
    //    leftDown = false;
    //    rightDown = false;
    //});
});
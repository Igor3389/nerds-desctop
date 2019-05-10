$(document).ready(function(){
    document.createElement( "picture" );

    var ua = window.navigator.userAgent.toLowerCase(),
        is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if (is_ie) {
        var svgSprite = $('symbol').parent();
        svgSprite.attr('style', 'display: none;');

        var IsIcnosDown = false;
        var sociaLinks = $('.social__link');
        sociaLinks.on('mousedown', function () {
            $(this).css({'background-color': '#D7373B',
                'box-shadow': 'inset 0 3px 0 0 #c13135'});
            $(this).children().css('opacity', 0.3);
            IsIcnosDown = true;
        });
        sociaLinks.on('mouseout', function () {
            $(this).css({'background-color': '#e1e1e1',
                'box-shadow': 'none'});
            if (IsIcnosDown) {
                $(this).children().css('opacity', 1);
                IsIcnosDown = false;
            }

        });
        sociaLinks.on('mousemove', function () {
            if (!IsIcnosDown) {
                $(this).css({'background-color': '#E74246',
                    'box-shadow': 'none'});
            }
        });

        var worksLink = $('.works__link');
        var isLinkDown = false;
        worksLink.on('mousemove', function () {
            if (!isLinkDown) {
                $(this).css('opacity', 1);
            }
        });
        worksLink.on('mousedown', function () {
            isLinkDown = true;
            $(this).css('opacity', 0.1);
        });
        worksLink.on('mouseout', function () {
            isLinkDown = false;
            $(this).css('opacity', 0.3);
        });

        var logo = $('.logo[href]');
        var isLogoDown = false;
        logo.on('mousedown', function () {
            isLogoDown = true;
            $(this).css('opacity', 0.3);
        });
        logo.on('mouseout', function () {
            isLogoDown = false;
            $(this).css('opacity', 1);
        });
    }
});

/**
 * Created by Vietworm on 9/14/2015.
 */

$(document).ready(function () {
    $('.tooltip').mouseover(function (e) {
        if ($(this).attr('data-tip-type') == 'text') {
            $('.tooltip').html($(this).attr('data-tip-source'));
        }
        if ($(this).attr('data-tip-type') == 'html') {

        }
    }).mousemove(function (e) {
        var tooltipWidth =  $('.tooltip').outerWidth();
        var tooltipHeight = $('tooltip').outerHeight();

        $('.tooltip').css('left', (e.pageX - 20) + 'px');
        $('.tooltip').css('right', (e.pageY + 20) + 'px');

    }).mouseout(function (e) {
        $('.tooltip').css('display','none').html('');
    })
});
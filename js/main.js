$(document).ready(function(){
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        dots:true,
        adaptiveHeight:true,
        variableWidth: true,
        slidesToScroll:2,
        speed:1000,
    });
    $('.faq__acc-link').on('click', function (e){
        e.preventDefault()
        $(this).toggleClass('faq__acc-link--active')
        $(this).children('.faq__acc-text').slideToggle()
    })
})
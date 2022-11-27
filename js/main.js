$(document).ready(function() {

    function close_accordion_section() {
        $('.accordion .title').removeClass('active');
        $('.accordion .section-content').slideUp(300).removeClass('open');
    }

    $('.title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }

        e.preventDefault();
    });

});//ready 
new Swiper('.reviews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 260,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 5000,
        speed: 100,
    },
});

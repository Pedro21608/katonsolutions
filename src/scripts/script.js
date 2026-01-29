$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-xmark fa-bars');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    navItems.find('a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).attr('href');
        const header = $('header');

        $('html, body').animate({
            scrollTop: $(sectionId).offset().top - header.outerHeight()
        }, 100);
    });

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight() - 5;

            if(scrollPosition >= sectionTop) {
                activeSectionIndex = i;
            }
        });

        navItems.removeClass('active');
        navItems.find(`a[href="#${sections[activeSectionIndex].id}"]`).parent().addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })

    ScrollReveal().reveal('.solution', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })

    ScrollReveal().reveal('#cases_trophy', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('.case', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('#footer_items', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    })
});
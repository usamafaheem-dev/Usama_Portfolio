
// Add hover effect to skill cards
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.infinite-carousel-track');
    
    // Reset animation at the right moment for perfect loop
    carouselTrack.addEventListener('animationiteration', function() {
        if (this.style.animationPlayState !== 'paused') {
            // Reset the animation
            this.style.animation = 'none';
            void this.offsetWidth; // Trigger reflow
            this.style.animation = 'scroll 30s linear infinite';
        }
    });
    
    // Adjust speed based on screen size
    function adjustCarouselSpeed() {
        if (window.innerWidth < 768) {
            carouselTrack.style.animationDuration = '40s';
        } else if (window.innerWidth < 576) {
            carouselTrack.style.animationDuration = '50s';
        } else {
            carouselTrack.style.animationDuration = '30s';
        }
    }
    
    window.addEventListener('resize', adjustCarouselSpeed);
    adjustCarouselSpeed();
    
    // Smooth scroll for buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// contact start



// contact end 
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#portfolio-filter li');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('filter-active'));
            this.classList.add('filter-active');
            
            const filterValue = this.getAttribute('data-filter'); // e.g. '.react'

            portfolioItems.forEach(item => {
                if (filterValue === '*') {
                    item.style.display = 'block';
                } else {
                    // Remove the dot before checking
                    const classToCheck = filterValue.replace('.', '');
                    if (item.classList.contains(classToCheck)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }

                // Re-trigger animations
                item.classList.remove('wow', 'fadeInUp');
                void item.offsetWidth;
                item.classList.add('wow', 'fadeInUp');
            });

            if (typeof WOW !== 'undefined') {
                new WOW().init();
            }
        });
    });
});












(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);



// portflio


  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#portfolio-filter li");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all
        filterButtons.forEach((b) => b.classList.remove("filter-active"));
        // Add active to current
        btn.classList.add("filter-active");

        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          if (filterValue === "*" || item.classList.contains(filterValue.slice(1))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });



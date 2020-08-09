$(document).ready(function() {

            $("#footer").load("footer.html");

            //Venobox
            $('.venobox').venobox();
            $('.venobox_custom').venobox({
                bgcolor    : '#1c1c1c',
                spinner    : 'cube-grid'
            });


            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //Hamburger Menu
            $('.third-button').on('click', function () {

              $('.animated-icon').toggleClass('open');
            });

            // Add smooth scrolling to all links
            $("#projects").click(function() {
                $('html,body').animate({
                    scrollTop: $("#Projects-Carousel").offset().top},
                    'slow');
            });


            $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

            // detect scroll top or down
            if ($('.smart-scroll').length > 0) { // check if element exists
                var last_scroll_top = 0;
                $(window).on('scroll', function() {
                    scroll_top = $(this).scrollTop();
                    if(scroll_top < last_scroll_top) {
                        $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                    }
                    else {
                        $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                    }
                    last_scroll_top = scroll_top;
                });
            }


            //lax.js
            window.onload = function() {
            	lax.setup() // init

            	const updateLax = () => {
            		lax.update(window.scrollY)
            		window.requestAnimationFrame(updateLax)
            	}

            	window.requestAnimationFrame(updateLax)
            }

            //ScrollOut
            ScrollOut();

            //AOS
            AOS.init();
          });

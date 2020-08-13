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

            //Scroll Progress Bar

            $(document).on("scroll", function() {
              var pixels = $(document).scrollTop()

              var dh = $(document).height()
              var wh = $(window).height()
              var diff = dh - wh
              var percentage = 100 * pixels / diff

            $("div.progress").css("width", percentage + "%")
            })


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

$(document).ready(function() {

            $("#footer").load("footer.html");

            //venobox
            $(document).ready(function(){
                $('.venobox').venobox();
            });

            //ScrollOut
            ScrollOut();

            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //Hamburger Menu
            $('.third-button').on('click', function () {

              $('.animated-icon').toggleClass('open');
            });

            // Add smooth scrolling to all links
            $("a").on('click', function(event) {

              // Make sure this.hash has a value before overriding default behavior
              if (this.hash !== "" && this.hash !== ".carousel") {
                console.log(this.hash);
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 800, function(){

                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              } // End if
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

            //Modal
            $(document).ready(function () {
                    $('#myModal').on('show.bs.modal', function (e) {
                        var image = $(e.relatedTarget).attr('src');
                        $(".img-responsive").attr("src", image);
                    });
            });
          });

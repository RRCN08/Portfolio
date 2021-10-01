$(document).ready(function() {

            $(function () {
            $(document).scroll(function () {
              var $nav = $(".navbar-fixed-top");
              var offsetHeight = document.getElementById('NavStart').offsetHeight+$nav.height();
              console.log(offsetHeight);
              $nav.toggleClass('scrolled', $(this).scrollTop() > offsetHeight);
            });
            });

            $("#footer").load("footer.html");

            //Venobox
            $('.venobox').venobox();
            $('.venobox_custom').venobox({
                bgcolor    : '#111115',
                spinner    : 'cube-grid'
            });


            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //View More
            $("#viewmore").click(function() {
                // assumes element with id='button'
                $(".hiddenproject").fadeToggle();
            });

            // Add smooth scrolling to all links
            $("#projects").click(function() {
                $('html,body').animate({
                    scrollTop: $("#Projects").offset().top},
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

            //Modernizr

              Modernizr.on('webp', function (result) {
                if (result) {
                  // supported
                } else {
                  // not-supported
                }
              });

          });

$(document).ready(function() {

            $(function () {
            $(document).scroll(function () {
              var $nav = $(".navbar-fixed-top");
              var offsetHeight = document.getElementById('NavStart').offsetHeight+$nav.height();
              $nav.toggleClass('scrolled', $(this).scrollTop() > offsetHeight);
            });
            });

            $("#footer").load("footer.html");

            //Color Mode
            const themeSwitch = document.querySelector('input');
            $('#body').toggleClass(window.localStorage.toggled);

            themeSwitch.addEventListener('change', () => {

              if (window.localStorage.toggled != "dark-theme" ) {
                    $('#body').toggleClass("dark-theme", true )
                    window.localStorage.toggled = "dark-theme";
                 } else {
                    $('#body').toggleClass("dark-theme", false );
                    window.localStorage.toggled = "";
                 }
            });

            if ($('body').hasClass('dark-theme')) {
                  $( '#checkBox' ).prop( "checked", true )
                  $('#fas-id').toggleClass("rotate", false )
            } else {
                  $( '#checkBox' ).prop( "checked", false )
                  $('#fas-id').toggleClass("rotate", true )
            }

            //Venobox
            $('.venobox').venobox();
            $('.venobox_custom').venobox({
                bgcolor    : '#efefef',
                spinner    : 'cube-grid'
            });


            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //View More
            $("#viewmore").click(function() {
                // assumes element with id='button'
                $(".hiddenproject").fadeToggle();
            });

            var pro = 0;

            //Easter Egg
            $('#prohit').click(function() {
              if (pro == 0) {
                  $('#Hero > h1 > #prohit').text("PROHIT RAMACHANDRAN");
                  pro = 1;
              } else {
                  $('#Hero > h1 > #prohit').text("ROHIT RAMACHANDRAN");
                  pro = 0;
              }
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

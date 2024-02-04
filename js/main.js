$(document).ready(function() {

            $(function () {
              $(document).scroll(function () {
                  var $nav = $(".navbar-fixed-top");
                  var $navStart = $(".NavStart");
                  var offsetHeight = $navStart[0].offsetHeight + $nav.height();
                  
                  var isScrolled = $(this).scrollTop() > offsetHeight;
                  
                  $nav.toggleClass('scrolled', isScrolled);
                  
                  // Check if the #NavStart element has the class 'scrolled'
                  if (isScrolled) {
                      // Change the src attribute of the image
                      $('#Signature').attr('src', 'css/elements/signature_dark.svg');
                  } else {
                      // Revert the src attribute of the image
                      $('#Signature').attr('src', 'css/elements/signature.svg');
                  }
              });
          });
            

            //Venobox
            new VenoBox({
              numeration: true,
              infinigall: true,
              bgcolor: '#EFEFEF',
              spinner: 'swing'
          });

            //Tooltop
            $(function () {
              $('[data-toggle="tooltip-resume"]').tooltip({
                placement: 'bottom'
              })
            })


            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //View More
            $("#viewmore").click(function() {
                // assumes element with id='button'
                $(".hiddenproject").fadeToggle();
            });

            var pro = 0;


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

$(document).ready(function() {

              $(function () {
                $(document).scroll(function () {
                    var $nav = $(".navbar-fixed-top");
                    var $navStart = $(".NavStart");
                    var offsetHeight = $navStart[0].offsetHeight + $nav.height();
                    
                    var isScrolled = $(this).scrollTop() > offsetHeight;
                    
                    // Check if the current page is the index page and not scrolled
                    var isIndexPage = window.location.pathname === '/';
                    var isNotScrolled = !isScrolled;
                    
                    // Toggle class based on scroll and not being on index page
                    $nav.toggleClass('scrolled', isScrolled);
                    
                    // Toggle navbar visibility with fade effect based on scroll and index page
                    if (isScrolled || !isIndexPage) {
                        $nav.fadeIn(200); // Fade in if scrolled or not on index page
                    } else {
                        $nav.fadeOut(200); // Fade out if on index page and not scrolled
                    }
                });
            });


           /* $(function () {
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
                      $('#Signature').attr('src', 'css/elements/signature_dark.svg');
                  }
              });
          }); */
            

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

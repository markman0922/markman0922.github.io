$(document).ready(function(){
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Highlight sidebar items on scroll
  $(window).on('scroll', function() {
    $('.section').each(function(i) {
      if($(window).scrollTop() >= $(this).position().top) {
        $('.sidebar li').removeClass('active');
        $('.sidebar li').eq(i).addClass('active');
      }
    });
  });
  
  // Toggle sidebar
  const toggleBtn = document.getElementById("toggle-btn");
  const closeBtn = document.querySelector(".close-btn");
  const toggleNav = document.querySelector(".sidebar");
  const navItems = document.querySelector(".sidebar-items");
  
  toggleBtn.addEventListener("click", sideMenu);
  closeBtn.addEventListener("click", sideMenu);
  navItems.addEventListener("click", sideMenu);
  
  function sideMenu() {
    toggleNav.classList.toggle('open');
  }

});


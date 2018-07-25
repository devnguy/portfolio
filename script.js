window.sr = ScrollReveal();
sr.reveal('.fade-in-animation');

$(document).ready(function() {
  $('.nav-menu-icon').on('click', function() {
    $('nav ul').toggleClass('showing');
  })
  $('.nav-menu-item').on('click', function() {
    if($('.nav-menu-list').hasClass('showing')) {
      $('.nav-menu-list').removeClass('showing');
    }
  })
})


$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
})

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('nav-transition-black');
  }
  else {
    $('nav').removeClass('nav-transition-black');
  }
})


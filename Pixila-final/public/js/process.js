//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
const PROJECT_EXECUTED = 1165;
const GLOBAL_PRESENCE = 29;
const ACTIVE_CLIENTS = 5;
const RECOGNITION = 426;
const PROGRESSING = 72;



function autoPlayYouTubeModal() {
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-theVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
}

function autoIncrese(obj, des) {
  var autoNumber = setInterval(function () {
    let number = parseInt(obj.text())
    number += 1;

    if (number == des + 1) {
      return;
    }
    obj.text(number);

  }, 1000 / (des / 5));
}







function runAutomatic() {

  $("#counter-user").waypoint(function (direction) {
    $(".counter").text(0);
    autoIncrese($("#counter-user"), PROJECT_EXECUTED);
    autoIncrese($("#counter-global"), GLOBAL_PRESENCE);
    autoIncrese($("#counter-users"), ACTIVE_CLIENTS);
    autoIncrese($("#counter-reg"), RECOGNITION);

  }, { offset: 'bottom-in-view' });

  $("#counter-progressbar").waypoint(function (direction) {
    $("#counter-progressbar").text(0);
    autoIncrese($("#counter-progressbar"), PROGRESSING);
    $("#progressbar-status").animate({
      width: `${PROGRESSING}%`
    }, 4000, 'linear');

  }, { offset: 'bottom-in-view' });
}

function autoProgressBar() {
  $("#progressbar-status").waypoint(function (direction) {

  }, { offset: 'bottom-in-view' });
}

function draggableSlider() {
  $('.owl-carousel.our-team').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })



}

function draggableFeedback() {
  $('.owl-carousel.feedback').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 1
      },
      800: {
        items: 2
      }
    }
  });
}

function draggableLogoPartner() {
  $('.owl-carousel.logo-partner').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });
}

function navbarFixed() {

  if (window.scrollY > 110) {
    $('#navbar_top').addClass('sticky-on');
    navbar_height = $('.navbar').offsetHeight;
  } else {
    $('#navbar_top').removeClass('sticky-on');
    // remove padding top from body
  }
}

function toggleSearchBar() {
  $("#searchIcon").click(function () {
    $("#searchForm").toggle();
  });
}

function toggleMenu() {
  $("#toggleMenu").click(function () {
    $(".site-nav-menu").toggleClass("menu-on");
  });

  $("#exitMenu").click(function () {
    $(".site-nav-menu").removeClass("menu-on");
  });
}

function openSubmenu() {
  $(".dd-trigger").each(function () {
    $(this).click(function () {
      $(this).prev().attr('style', function (index, attr) {
        return attr === 'display: block' ? null : 'display: block'
      });

      $(this).find("i").attr('class', function (index, attr) {
        return attr === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus'
      });
    })
  });
}


$(document).ready(function () {
  autoPlayYouTubeModal();
  runAutomatic();
  autoProgressBar();
  draggableSlider();
  draggableFeedback();
  draggableLogoPartner();
  $(window).scroll(function () {
    navbarFixed();
  });
  toggleSearchBar();
  toggleMenu();
  openSubmenu();
});
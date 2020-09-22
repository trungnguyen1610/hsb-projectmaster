$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".nav__pc").addClass("fixed");

    } else {
        $(".nav__pc").removeClass("fixed");
    }
}); //missing );

// when checked
function toggleOverlay() {
    var toggle = document.getElementById('nav-mobile-input');
    var overlaytoggle = document.getElementById('nav__mobile-overlay');
    var navmobile = document.getElementById('nav__mobile');
    if (toggle.checked) {
        overlaytoggle.style.display = 'block';
        navmobile.style.transform = 'translateX(0)';
        navmobile.style.opacity = '1';
    }
    else {
        overlaytoggle.style.display = 'none';
        navmobile.style.transform = 'translateX(-100%)';
        navmobile.style.opacity = '0';
    }

}

// slick
$('.slick-sliderqoute').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
    arrows:false
  });
//sub menu

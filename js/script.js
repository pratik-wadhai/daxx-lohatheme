$(document).ready(function () {
  // *****************************
  // ******** HEADER  ************
  // ***************************************

  // ## AOS
  AOS.init();

  setTimeout(function () {
    AOS.refresh();
  }, 100);

  // ## Nice Select
  $("select").niceSelect();

  // ## Header Style and Scroll to Top

  // ## Dropdown menu
  var mobileWidth = 992;
  var navcollapse = $(".navigation li.dropdown");

  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children("ul").stop(true, false, true).slideToggle(300);
      $(this).children(".megamenu").stop(true, false, true).slideToggle(300);
    }
  });

  // ## Submenu Dropdown Toggle
  if ($(".main-header .navigation li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header .navigation li.dropdown .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
        $(this).prev(".megamenu").slideToggle(800);
      }
    );

    //Disable dropdown parent link
    $(".navigation li.dropdown > a").on("click", function (e) {
      e.preventDefault();
    });
  }

  //Submenu Dropdown Toggle
  if ($(".main-header .main-menu").length) {
    $(".main-header .main-menu .navbar-toggle").click(function () {
      $(this).prev().prev().next().next().children("li.dropdown").hide();
    });
  }

  // OnePage Nav
  $(".onepage a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // *****************************
  // ******** FEATURE SECTION ************
  // ***************************************

  if ($(".feature-content").length) {
    var $status = $(".featurepagi .paginginfo");
    var $slickElement = $(".feature-content");

    $slickElement.on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + " / " + slick.slideCount);
      }
    );

    $(".feature-content").slick({
      autoplay: true,
      dots: false,
      prevArrow: ".feature-prev",
      nextArrow: ".feature-next",
    });
  }

  // *****************************
  // ******** IMAGE SLIDER ************
  // ***************************************

  var $status = $(".slideshowpagi.paginginfo");
  $(".slideshow-images").on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + " / " + slick.slideCount);
    }
  );
  $(".slideshow-images").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: ".image-prev",
    nextArrow: ".image-next",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // *****************************
  // ******** TESTIMONIAL ************
  // ***************************************

  $(".testimonial-slider").slick({
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow:
      '<button class="testimonials-prev btn btn-outline-primary rounded-pill px-3 me-2"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="testimonials-next btn btn-outline-primary rounded-pill px-3 me-2"><i class="fa-solid fa-arrow-right"></i></button>',
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  });

  // *****************************
  // ******** TIMELINE  ************
  // ***************************************

  $(".timeline-images").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: false,
    speed: 1000,
    fade: true,
    asNavFor: ".timeline-content",
    variableWidth: false,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // ## Timeline Content Slider

  $(".timeline-content").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    speed: 1000,
    asNavFor: ".timeline-images",
    variableWidth: false,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  // *****************************
  // ******** ABOUT PAGE TESTIMONIALS SECTION ************
  // ***************************************

  $(".testimonial-slider-two").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow:
      '<button class="testimonials-prev btn btn-outline-primary rounded-pill px-3 me-2"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="testimonials-next btn btn-outline-primary rounded-pill px-3 me-2"><i class="fa-solid fa-arrow-right"></i></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // *******************************
  // ******* adding blog-active ************
  // **********************************

  // Add custom HTML to the generated Nice Select dropdown
  $("div.nice-select").each(function () {
    var selectedText = $(this).find("span.current").text(); // Get the selected text
    var blogActiveHTML = `<div class="blog-active" style="position: relative; height: 31.1979px;">
                          <span class="item current" style="position: absolute; left: 0px; top: 0px; ">${selectedText}</span>
                        </div>`;

    // Replace the <span class="current"> with the custom structure
    $(this).find("span.current").replaceWith(blogActiveHTML);
  });

  // *******************************
  // ******* adding data-filter ************
  // **********************************
  // Define your custom data-filter values
  var filterValues = {
    0: "*", // For the first <li>
    1: ".chicago", // For the second <li>
    2: ".detroit", // For the third <li>
    3: ".houston", // For the third <li>
    4: ".memphis", // For the third <li>
    5: ".nashville", // For the third <li>
    6: ".new-york", // For the third <li>
    7: ".philadelphia", // For the third <li>
    8: ".seattle", // For the third <li>
  };

  // Assign custom data-filter values to each <li>
  $("#my-select")
    .next("div.nice-select")
    .find("ul.list li")
    .each(function (index) {
      // Map the custom filter value to the corresponding <li>
      $(this).attr("data-filter", filterValues[index]);
    });

  $("div.nice-select ul").addClass("blog-filter");

  // ## Blog Filtering
  $(".blog-filter li").on("click", function () {
    $(".blog-filter li").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".blog-active").imagesLoaded(function () {
      $(".blog-active").isotope({
        itemSelector: ".item",
        filter: selector,
      });

      $(".blog-active h2").hide();
      if (selector === "*") {
        // For "All Projects", show only the first h2
        $(".blog-active h2:first").show();
      } else {
        // For other selections, show the corresponding h2
        $(".blog-active h2" + selector).show();
      }
    });
  });
});
/* ==========================================================================
             When document is loaded, do
             ========================================================================== */

$(window).on("load", function () {
  // ## Blog Filtering
  if ($(".blog-active").length) {
    $(this).imagesLoaded(function () {
      $(".blog-active").isotope({
        // options
        itemSelector: ".item",
      });
      $(".blog-active h2:not(:first)").hide();
    });
  }
});

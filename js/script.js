"use strict";

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var date = new Date();

// Preload background image
$(window).on('load', function () {
  $('.page-header .header-background').css('opacity', '1')
});

$(document).ready(function () {
  var $header = $('.page-header');
  var $services = $('.services');
  var $today = $('.today-post .date');

  // Initialize carousel in the header
  $('.header-background').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  // Set date for "Today Post" section
  $today.find('.month').text(months[date.getMonth()]);
  $today.find('.day').text(date.getDate());

  // Scroll to top
  $('.page-footer .go-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  });

  // Switch the articles (section "Our Services")
  $services.find('.services-list li').on('click', function (e) {
    var article = $(e.target).data('article');
    var $visible = $services.find('.articles-list .article-wrapper:visible');

    $services.find('.services-list li.active').removeClass('active');
    $(e.target).addClass('active');
    $visible.fadeOut(300, function () {
      $services.find('.articles-list [data-title="' + article + '"]').fadeIn(300);
    });
  });

  // Open header nav
  $header.find('.open-menu').on('click', function (e) {
    $header.addClass('nav-opened');
    e.stopPropagation();
    $(document).on('click touchmove', closeHeaderNav);
  });

  // Close header nav
  $header.find('.main-nav-mobile .close-menu').on('click', closeHeaderNav);

  // Toggle footer nav
  $('.page-footer .menu').on('click', function (e) {
    $(e.currentTarget).next().toggleClass('shown')
  });

  function closeHeaderNav() {
    $header.removeClass('nav-opened');
    $(document).off('click touchmove', closeHeaderNav);
  }
});
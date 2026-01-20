const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// JavaScript to detect scroll and apply the navbar-scrolled class
window.addEventListener('scroll', function () {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 25) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

$(document).ready(function () {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode && $('table.table.table-bordered').length) {
    $('table.table.table-bordered').addClass('table-dark');
  }
});

$(document).ready(function() {

  $(".img-thumbnail.image").on("click", function() {
    let img = $(this).find("img"); // get the inner image
    let src = img.attr("src");
    let alt = img.attr("alt");
    $("#zoomed-image").attr("src", src).attr("alt", alt);
    $("#zoom-container").addClass("display");
    $("body").addClass("no-scroll");
  });

  $("#zoom-close").on("click", function() {
    $("#zoom-container").removeClass("display");
    $("body").removeClass("no-scroll");
  });

  $("#zoom-container").on("click", function(e) {
    if (e.target.id === "zoom-container") {
      $(this).removeClass("display");
      $("body").removeClass("no-scroll");
    }
  });

  $(document).on("keydown", function(e) {
    if (e.key === "Escape") {
      $("#zoom-container").removeClass("display");
      $("body").removeClass("no-scroll");
    }
  });
});
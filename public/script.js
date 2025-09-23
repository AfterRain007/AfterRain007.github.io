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
  // Check for dark mode
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // If dark mode and the table exists, add class
  if (isDarkMode && $('table.table.table-bordered').length) {
    $('table.table.table-bordered').addClass('table-dark');
  }
});

$(document).ready(function() {
  // When clicking the whole thumbnail block
  $(".img-thumbnail").on("click", function() {
    let img = $(this).find("img"); // get the inner image
    let src = img.attr("src");
    let alt = img.attr("alt");
    $("#zoomed-image").attr("src", src).attr("alt", alt);
    $("#zoom-container").addClass("display");
    $("body").addClass("no-scroll");
  });

  // Close when clicking the close button
  $("#zoom-close").on("click", function() {
    $("#zoom-container").removeClass("display");
    $("body").removeClass("no-scroll");
  });

  // Close when clicking overlay (but not image)
  $("#zoom-container").on("click", function(e) {
    if (e.target.id === "zoom-container") {
      $(this).removeClass("display");
      $("body").removeClass("no-scroll");
    }
  });

  // Close on ESC
  $(document).on("keydown", function(e) {
    if (e.key === "Escape") {
      $("#zoom-container").removeClass("display");
      $("body").removeClass("no-scroll");
    }
  });
});
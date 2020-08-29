document.addEventListener("DOMContentLoaded", function () {
  // active menu
  var menu = document.querySelector(".nav-box-menu");
  menu.addEventListener("click", (event) => {
    menu.classList.toggle("nav-box-menu-active");
    var links = document.querySelector(".nav-list");
    links.classList.toggle("nav-list-active");
  });
  // navbar fija (fixed)
  var navlist = document.querySelector(".nav-list");
  var navlogo = document.querySelector(".nav-logo");
  var navboxmenu = document.querySelector(".nav-box-menu");
  var navdiv = document.querySelector(".nav-div");

  window.addEventListener("scroll", function () {
    navlist.classList.toggle("nav-list-scroll", window.scrollY > 0);
    navlogo.classList.toggle("nav-logo-scroll", window.scrollY > 0);
    navboxmenu.classList.toggle("nav-box-menu-scroll", window.scrollY > 0);
    navdiv.classList.toggle("nav-div-scroll", window.scrollY > 0);
  });
});

setTimeout(() => {
  var navboxmenu = document.querySelector(".nav-box-menu");
  navboxmenu.style.opacity = "1";
  var navlogo = document.querySelector(".nav-logo");
  navlogo.style.opacity = "1";
  var preloader = document.querySelector(".pre-loader");
  preloader.style.visibility = "hidden";
  preloader.style.opacity = "0";
  preloader.style.display = "none";
  var body = document.querySelector("body");
  body.style.overflowY = "auto";
}, 1500);

// window.onload = function () {
//   var navboxmenu = document.querySelector(".nav-box-menu");
//   navboxmenu.style.opacity = "1";
//   var navlogo = document.querySelector(".nav-logo");
//   navlogo.style.opacity = "1";
//   var preloader = document.querySelector(".pre-loader");
//   preloader.style.visibility = "hidden";
//   preloader.style.opacity = "0";
//   preloader.style.display = "none";
// };

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

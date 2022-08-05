function init() {
  const mainImg = document.getElementById("main-img");
  const width = window.innerWidth ?? window.document.documentElement.clientWidth;
  if (width > 480) {
    mainImg.className += " desktop";
    mainImg.src = "images/main-desktop.svg";
  } else {
    mainImg.className += " mobile";
    mainImg.src = "images/main-mobile.svg";
  }
}

window.addEventListener("DOMContentLoaded", init);

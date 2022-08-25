function init() {
  setImage();
  setInterval(setImage, 1000);
}

function setImage() {
  var mainImg = document.getElementById("main-img");
  var width = window.innerWidth ?? window.document.documentElement.clientWidth;
  if (width > 720) {
    mainImg.className += " desktop";
    mainImg.src = "images/main-desktop.png";
  } else {
    mainImg.className += " mobile";
    mainImg.src = "images/main-mobile.png";
  }
}

window.addEventListener("DOMContentLoaded", init);

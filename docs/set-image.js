function init() {
  const mainImg = document.getElementById("main-img");
  setInterval(() => {
    const width = window.innerWidth ?? window.document.documentElement.clientWidth;
    if (width > 720) {
      mainImg.className += " desktop";
      mainImg.src = "images/main-desktop.png";
    } else {
      mainImg.className += " mobile";
      mainImg.src = "images/main-mobile.png";
    }
  }, 1000);
}

window.addEventListener("DOMContentLoaded", init);

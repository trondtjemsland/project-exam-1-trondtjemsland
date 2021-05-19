const mainMenu = document.querySelector(".headerList");
const closeMenu = document.querySelector(".exitHamburger");
const openMenu = document.querySelector(".hamburgerMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

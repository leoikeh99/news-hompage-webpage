function openMenu() {
  document.querySelector("nav").classList.add("open");
  document.querySelector(".overlay").classList.add("show");
}

function closeMenu() {
  document.querySelector("nav").classList.remove("open");
  document.querySelector(".overlay").classList.remove("show");
}

document.getElementById("open-menu").addEventListener("click", openMenu);
document.getElementById("close-menu").addEventListener("click", closeMenu);

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

alert("Merhaba, siteye yeni Header eklendi ve yeni bir proje eklendi..");

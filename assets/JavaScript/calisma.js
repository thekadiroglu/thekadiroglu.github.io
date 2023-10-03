let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});
// Modalı göster
function modalGoster() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

// Modalı kapat
function kapatModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Sayfa yüklendiğinde modalı göster
window.onload = function() {
  modalGoster();
};

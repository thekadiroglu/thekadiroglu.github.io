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
window.addEventListener('load', function() {
  // Sayfa tamamen yüklendiğinde yükleme simgesini gizle
  var loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'none';
});

//Dark Mode
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkMode');
  const body = document.body;
  const navbarLinks = document.querySelectorAll('.navbar a');
  const baslik = document.querySelector(".baslik");
  const cardTitles = document.querySelectorAll('.cards .card h1');
  const menuIcon = document.querySelector('.menu-icon');  
  const darkMode = document.querySelector('.darkMode i');

  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    baslik.classList.toggle('dark-text');
    menuIcon.classList.toggle('dark-text');
    darkMode.classList.toggle('dark-text'); 
    navbarLinks.forEach(function (link) {
      link.classList.toggle('dark-text');
    });

    cardTitles.forEach(function (title) {
      title.classList.toggle('dark-text');
    });
  });
});

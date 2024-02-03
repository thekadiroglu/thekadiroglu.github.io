let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
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
  const header = document.querySelector('header'); // Yeni eklenen satır

  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    baslik.classList.toggle('dark-text'); 
    header.style.background = body.classList.contains('dark-mode') ? '#222222' : '';
    navbarLinks.forEach(function (link) {
      link.classList.toggle('dark-text');
    });

    cardTitles.forEach(function (title) {
      title.classList.toggle('dark-text');
    });
  });
});


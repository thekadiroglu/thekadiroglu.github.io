let addToDoButton = document.querySelector("#addTodoBtn");
let todo = document.querySelector("#todo");
let inputField = document.querySelector("#inputField");
let date = document.querySelector("#date");
let user = document.querySelector("#user");
//kullancıdan kullanıcı adı alıyoruz..
let username = prompt("İsminiz/Kullanıcı Adınız?");
console.log(user);
user.innerHTML += username;
console.log(username);
//enter tuşu ile todo ekleme fonksiyonu..
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    let inputField = document.querySelector("#inputField");
    let todo = document.querySelector("#todo");
    let paragraph = document.createElement("p");
    if (inputField.value == " ") {
      return;
    } else {
      todo.appendChild(paragraph);
      paragraph.innerHTML = inputField.value;
      console.log(inputField.value.trim());
      inputField.value = " ";
      paragraph.addEventListener("click", function () {
        paragraph.classList.toggle("myLineThrough");
      });
    }
  }
});
//cilck etkileşimi ile todo ekleme fonksiyonu..
addToDoButton.addEventListener("click", function (event) {
  let inputField = document.querySelector("#inputField");
  let todo = document.querySelector("#todo");
  let paragraph = document.createElement("p");
  if (inputField.value == " ") {
    return;
  } else {
    todo.appendChild(paragraph);
    paragraph.innerHTML = inputField.value;

    console.log(inputField.value.trim());
    inputField.value = " ";
    paragraph.addEventListener("click", function () {
      paragraph.classList.toggle("myLineThrough");
    });
  }
});
//full date'i alıyoruz..
let d = new Date();
console.log(d);
//saat kısmını alıp konsola yazıdırıyorum..
let hour = d.getHours();
console.log(hour);
//dakika kısmını alıp konsola yazıdırıyorum..
let minutes = d.getMinutes();
console.log(minutes);
if (minutes < 10) {
  minutes = `0${minutes}`;
}
//gün kısmını alıp konsola yazıdırıyorum..
let day = d.getDate();
console.log(day);
//ay kısmını alıp konsola yazıdırıyorum..
let month = d.getMonth();
console.log(month);
// yıl kısmını alıp konsola yazıdırıyorum..
let year = d.getFullYear();
console.log(year);
// aldığımız günleri teker teker yazıp ekrana çıktısını alıyorum..
let fulldate = `${day}/${month}/${year} - ${hour}.${minutes}`;
document.querySelector("#date").innerHTML = fulldate;

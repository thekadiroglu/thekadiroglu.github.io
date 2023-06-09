let addToDoButton = document.querySelector("#addTodoBtn");
let todo = document.querySelector("#todo");
let inputField = document.querySelector("#inputField");
let date = document.querySelector("#date");
let user = document.querySelector("#user");
let todos = [
  {
    title: "Yapılacak İşler",
    isCompleted: false,
    description: "",
    createdDate: "18-05-2023 18.44",
    dueDate: "19-05-2023 18.44",
    subtasks: [
      {
        title: "Alt Görev",
        isCompleted: false,
      },
    ],
  },
];
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
    paragraph = document.createElement("p");
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
//click etkileşimi ile todo ekleme fonksiyonu..
addToDoButton.addEventListener("click", function (event) {
  let inputField = document.querySelector("#inputField");
  let todo = document.querySelector("#todo");
  let paragraph = document.createElement("p");
  paragraph.setAttribute("class", "todoparagraph");
  if (inputField.value == " ") {
    return;
  } else {
    todo.appendChild(paragraph);
    paragraph.innerHTML = inputField.value;

    console.log(inputField.value.trim());
    inputField.value = " ";

    // paragraph.addEventListener("dblclick", function () {
    //   paragraph.classList.toggle("myLineThrough");
    // });
  }
  kelime();
});

function kelime() {
  console.log("kelime");
  let paragraphs = document.querySelectorAll(".todoparagraph");
  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener("dblclick", function (e) {
      let detailtodo = document.querySelector("#detailTodo");

      console.log(detailtodo);
      detailtodo.classList.toggle("todoblock");
    });
  });
}

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
//filter kullanımı !!!!aktif değil!!!!
var kisiler = [
  {
    ad: "Ali",  
    soyad: "Yılmaz",
    yas: 25,
  },
  {
    ad: "Ayşe",
    soyad: "Kara",
    yas: 30,
  },
  {
    ad: "Mehmet",
    soyad: "Demir",
    yas: 35,
  },
  {
    ad: "Zeynep",
    soyad: "Yıldız",
    yas: 28,
  },
];

inputField.addEventListener("keyup", () => {
  let kisi = kisiler.filter((eleman) =>
    eleman.toLower().includes(inputField.value)
  );
});

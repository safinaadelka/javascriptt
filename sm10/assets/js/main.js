let inputName = document.getElementById("inputName");
let inputAge = document.getElementById("inputAge");
let submit = document.getElementById("submit");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let link = document.querySelector(".link_site");

let form = document.querySelector(".form");
reg = /[A-Za-zA-яА-яЁё]/g;

let isError1 = true;
let isError2 = true;

form.addEventListener('input', (e) => {
  if (e.target.name === "inputName") {
    if (inputName.value.length < 2) {
      inputName.style.border = "3px solid red";
      error1.innerHTML = "Не менее 2-x символов";
      isError1 = false;
    } else {
      inputName.style.border = "3px solid green";
      error1.innerHTML = "";
      isError1 = true;
    }
  } else {
    if (inputAge.value.length < 4 || inputAge.value.length > 4) {
      inputAge.style.border = "3px solid red";
      error2.innerHTML = "Введите год рождения";
      isError2 = false;
    } else if (2023 - inputAge.value < 18) {
      inputAge.style.border = "3px solid red";
      error2.innerHTML = "Вам нет 18";
      isError2 = false;
    } else {
      inputAge.style.border = "3px solid green";
      error2.innerHTML = "";
      isError2 = true;
    }
  }
});

submit.onclick = function (event) {
  if (inputName.value.length === 0) {
    isError1 = false;
    error1.innerHTML = "Введите имя";
  }
  if (inputAge.value.length === 0) {
    isError2 = false;
    error2.innerHTML = "Введите год рождения";
  }

  event.preventDefault();
  if (isError1 == true && isError2 == true) {
    link.innerHTML = "https://club.z-go.ru/";
    inputName.value = '';
    inputAge.value = '';
    console.log("dskhdshdj");
  }
};

const button1 = document.querySelector(".button1");
const foto = document.querySelector(".foto");

button1.addEventListener("dblclick", () => {
  foto.classList.toggle("foto_active");
});

// button1.addEventListener('mouseup', ()=>{
//     foto.classList.remove('foto_active')
// })

const button2 = document.querySelector(".button2");



button2.addEventListener("mouseup", () => {
  button2.classList.toggle("button_green");
});

button2.addEventListener("mousedown", () => {
    button2.classList.toggle("button_green");
});




const button3 = document.querySelector(".button3");
button3.addEventListener("mouseover", () => {
  button3.classList.toggle("button_border");

  // button3.classList.add('button_style');
});

button3.addEventListener("mouseout", () => {
    button3.classList.toggle("button_border");
  
    // button3.classList.add('button_style');
  });

const button4 = document.querySelector(".button4");
button4.addEventListener("mouseout", () => {
  const body = document.querySelector("body");
  body.classList.add("body");

  // button3.classList.add('button_style');
});

button4.addEventListener("mouseover", () => {
    const body = document.querySelector("body");
    body.classList.remove("body");
  
    // button3.classList.add('button_style');
  });


let padding = 0;
  
const button5 = document.querySelector(".button5");
button5.addEventListener("mousemove", () => {

  const square = document.querySelector('.square');
  padding+=5;

  if (padding === 600) padding = 0;
  square.style.marginLeft = padding + 'px';
  // button3.classList.add('button_style');
});


const button6 = document.querySelector(".button6");
button6.addEventListener("contextmenu", () => {
    button6.textContent = 'Вы нажали на контекст'
});





let = money = Number(prompt("сколько у вас денег?"))
let = cost = Number(prompt("стоимость товара?"))
let message
let color


if (money == cost){
    message = "поздравляю! вы купили товар!"; 
    console.log(message)
    color = "purple"; 
}
else if(money < cost){
    let change = cost - money;
    message = "Для покупки не хватает: " + change + " руб.";
    console.log(message)
    color = "red"
}
else if(money > cost){
    change = money - cost
    message = "Покупка совершена: <br> Ваша сдача " + change + " руб";
    console.log(message)
    color = "green"
}

let box = '<h3 class="box">'+ message +'</h3>'
let for_box = document.querySelector('.for_box')
for_box.innerHTML = box 


let text = document.querySelector('.box')
for_box.style.padding = "15px 30px"
for_box.style.backgroundColor = "#e5e5e5"
for_box.style.borderRadius = "10px"


text.style.fontSize = "40px"
text.style.fontFamily = "Arial, sans-serif"
text.style.color = color 
text.style.textAlign = "center"
let input = Number(prompt('Введите значение'))

console.log(input)

const blocks = document.querySelector('.blocks')
let box = '<div class="box">блок</div>'

for (let number = 0; number < input; number++){
    blocks.insertAdjacentHTML('beforeend', box)
}

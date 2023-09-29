let AddButton = document.querySelector('.add-button')
let CloseButton = document.querySelector('.close-button')
let modal = document.querySelector('.modal')

let array = [
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
];

AddButton.addEventListener('click', () => {
    modal.classList.add('modal_active')
})

CloseButton.addEventListener('click', () => {
    modal.classList.remove('modal_active')
})


let inputName = document.getElementById('name')
let inputText = document.getElementById('text')
let error = document.querySelector('.error')
let error2 = document.querySelector('.error2')
let submit = document.querySelector('.send')

let isError = false
let isError2 = false

inputName.addEventListener('change', function () {
    if (inputName.value.length < 8) {
        inputName.style.border = '1px solid red'
        error.innerHTML = 'введите не менее 8 символов<br><br>'
        isError = true;
    } else {
        inputName.style.border = '1px solid green'
        error.innerHTML = ''
        isError = false;

    }
})

inputText.addEventListener('change', function () {
    if (inputText.value.length > 300) {
        inputText.style.border = '1px solid red'
        error2.innerHTML = 'Введите не более 300 символов<br><br>'
        isError2 = true;
    } else {
        inputText.style.border = '1px solid green'
        error2.innerHTML = ''
        isError2 = false;

    }
})

submit.addEventListener('click', function (event) {
    if (inputName.value == '' && inputText.value == '') {
        error.innerHTML = 'Введите название'
        inputName.style.border = '1px solid red'
        error2.innerHTML = 'Введите текст новости'
        inputText.style.border = '1px solid red'

    }
    else if (inputName.value == '') {
        error.innerHTML = 'Введите название'
        inputName.style.border = '1px solid red'

    } else if (inputText.value == '') {
        error2.innerHTML = 'Введите текст новости<br><br>'
        inputText.style.border = '1px solid red'
    } else if (isError == false && isError2 == false) {
        let newsArray = {
            name: inputName.value,
            text: inputText.value
        }
        array.push(newsArray)
        arrayFunc()
        event.preventDefault()
        modal.classList.remove('modal_active')
        inputName.value = ''
        inputText.value = ''
    }
}
)

let news = document.getElementById('news')

function arrayFunc() {
    news.innerHTML = ''
    for (let x = 0; x < array.length; x++) {
        news.insertAdjacentHTML('beforeend', Output(array[x]))
    }

}
arrayFunc()

function Output(value) {
    return `
    <div class="news-item">
        <h3 class="h3">${value.name}</h3>
        <p class="news-item__p">
        ${value.text}
        </p>
    </div>
    `
}

let h2 = document.querySelector(".h2")
document.addEventListener('keyup', function (event) {
    if (event.key.toLowerCase() == 'b') {
        document.body.style.background = '#232323'
    }

    if (event.key.toLowerCase() == 'w') {
        document.body.style.background = 'white'
    }
})
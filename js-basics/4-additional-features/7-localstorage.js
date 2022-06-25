//в js есть куки document.cookie() - но у куки есть определенные проблемы и обычно с куки работают через стороние библиотеки
//Есть более современноe средство для хранения данных в JS - localStorage

document.querySelector('button').addEventListener('click', function(event) {
    var value = document.querySelector('input').value

    //localStorage.setItem('headerText', value) //setItem - сохраним значение в localStorage, 1пар - название параметра, 2пар - значение параметра
    
    var obj = {
        text: value
    }
    //в localStorage в значении может быть только текст, поэтому объект преобразуем в текст
    localStorage.setItem('headerText', JSON.stringify(obj))

})

document.addEventListener('DOMContentLoaded', function() { // тут все будет грузиться после загрузки DOM дерева

    var obj // в данный момент он undefined

    try {
        obj = JSON.parse(localStorage.getItem('headerText'))
    } catch (e) {}

    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }

})
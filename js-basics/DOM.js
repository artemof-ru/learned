// Стили и классы

// Управление классами
// Свойства className и classList

/* 
Изменение класса является одним
из наиболее часто используемых действий в JavaScript.
*/

// Свойство className

const element = document.querySelector('.lesson__item-list_red')

// Получаем имена классов
const elementClassNames = element.className
console.log(elementClassNames) // lesson__item-list lesson__item-list_red

// Перезаписываем имя класса
element.className = 'red' // перезаписали все классы?


// Свойство classList

/* 
Специальный объект с методами для добавления/удаления
одного класса.
*/

// Добавить класс
element.classList.add('active')
// Удалить класс
element.classList.remove('active')
// Добавить класс, если его нет, а если есть удалить
element.classList.toggle('active')
// Проверка наличия класса, возвращает true/false
element.classList.contains('active') 

/* Пример */
element.classList.add('active')
// Проверяем наличие класса
if (element.classList.contains('active')) {
  console.log('У element есть класс active!')
}

// classList является перебираемым, поэтому можно
// перечислить все его классы при помощи for..of
for (let className of element.classList) {
  console.log(className)
}



// Управление стилями

// element.style

const element = document.querySelector('.lesson__item-list_red')

// задаем стиль с помощью CSS свойства
element.style.color = 'red'

// Для свойства из нескольких свойств используется camelCase
element.style.marginBottom = '30px'
element.style.zIndex = '10'
// и т.д.

// каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom)

// Сброс стиля
element.style.marginBottom = ''


// Полная перезапись стилей
// style.cssText

element.style.cssText = `
  margin-bottom: 30px;
  color: red;
`

// Вычисленные стили. getComputedStyle(element, [pseudo])

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize)

// Стиль элемента
const elementStyle = getComputedStyle(element)
console.log(elementStyle.fontSize) // 18px

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, '::before')
console.log(elementBeforeStyle.backgroundColor) // rgb(231,231,0)

// Чтобы получить конкретное значение
// Следует писать точное (полное) значение
const elementStyle = getComputedStyle(element)

// Получаем точное значение
console.log(elementStyle.paddingLeft)
// Получаем не предсказуемую запись
console.log(elementStyle.padding) // В firefox ничего не покажет - <empty string>
// chrome - 0px 0px 0px 20px

// Только для чтения
elementStyle.paddingLeft = '50px' // Ошибка
// getComputedStyle - только для чтения


// ЛайвХаки

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red')

// Стиль элемента
const elementStyle = getComputedStyle(element)
console.log(elementStyle.paddingLeft) // 20px

// Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft)
console.log(paddingLeft) // 20

// Помним про единицы измерения
element.style.marginLeft = 20 // Ошибка, стили не добавятся
element.style.marginLeft = '20px' // Так правильно


/* 
Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами - более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/


// Атрибуты и свойства

/* 
У разных DOM-элементов могут быть разные свойсва.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> - свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTMl, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/

const link = document.querySelector('.lesson__link')
const input = document.querySelector('.lesson__input')

console.log(link.href) // http://fls.guru
console.log(input.href) // undefined

console.log(link.value) // undefined
console.log(input.value) // Я инпут

// Получить список доступных свойств
console.dir(link)


// Произвольные атрибуты

lessonText = document.querySelector('.lesson__text')
// Проверяем наличие атрибута
lessonText.hasAttribute('name')
// Получаем значение атрибута
lessonText.getAttribute('name')
// Устанавливаем значение атрибута
lessonText.setAttribute('name', 'value')
// Удаляем атрибут
lessonText.removeAttribute('name')

// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value')
// Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
  console.log('some-attribute существует!')
}


// Синхронизация между атрибутами и свойствами

/* 
Мы можем обратиться к тому или иному свойству через 
методы доступа к атрибутам.
Когда стандартный атрибут изменяется, соответствующее 
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями).
*/

const input = document.querySelector('.lesson__input')

input.setAttribute('id', '123')
console.log(input.id) // 123

input.id = '321'
console.log(input.getAttribute('id')) // 321

// НО

input.setAttribute('value', 'Привет!')
console.log(input.value) // Привет!

input.value = 'Как дела?'
console.log(input.getAttribute('value')) // Привет!


// Нестандартные атрибуты, dataset

/* 
Мы уже использовали произвольные атрибуты,
но это рискованно.

Все атрибуты, начинающиеся с префикса "data-",
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/

// Получаем data-атрибут
console.log(lessonText.dataset.seze) // 1058

// Переписываем data-атрибут
lessonText.dataset.size = '5810'
console.log(lessonText.dataset.size) // 5810

// в html - data-size-value, в JS используем camelCase  
console.log(lessonText.dataset.sizeValue)


// Полезные свойства
const link = document.querySelector('.lesson__link')

// получаем тег элемента
console.log(link.tagName) // A

// Скрыть/показать элемент
link.hidden = true // объект исчезнет
console.log(link.hidden) // true
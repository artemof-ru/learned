var str = '1,2,3,4,5,6,7,8'

var array = str.split(',') //split - преобразуем строку в массив со значениями, который разделены - ','

//console.log(array.join(';')) //join - соединит элементы массива в строчку, разделив их - ';'
//console.log(array.reverse()) //реверс массива

array.splice(1, 4, '11') //splice - удалит элементы из массива. 1пар - индекс начала, 2пар - кол-во элементов, 3пар и ,..,..- вставит вместо удаленного

array.splice(1, 0, '12', '13') //если 0 вторым параметром - то ничего не удалим, просто вставим что-то в это место 

var newArray = array.concat([1, 2]) //concat - возвращает копию массива array, плюс присоединим то что в параметрах

//console.log(newArray)

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

var foundPerson = objArr.find(function(person) {
    return person.age === 20
}) //find - найти элемент в массиве
//find работает как цикл, итерирует каждый элемент массива

var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !== 0 //получим нечетные числа
}) //filter - вернет отфильтрованный массив

var numArray = array.map(function(i) {
    return i * 2
})

var numArray2 = array.map(function(i) {
    return parseInt(i)
}) //map - вернет новый обработанный массив 

console.log(numArray)
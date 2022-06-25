var cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

//Добавит в конец
cars.push('Audi')
console.log(cars)

//Удаляет и возвращает последний
var audi = cars.pop()
console.log(cars, audi)

//Удалять и возвращать первый элемент
var ford = cars.shift()
console.log(cars, ford)

//Добавляет в начало
cars.unshift(audi)
console.log(cars)

console.log(cars.indexOf('Kia'))

var index = cars.indexOf('Kia')
var kia = cars[index]

console.log(kia)
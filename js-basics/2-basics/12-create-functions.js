// ## ОБЪЯВЛЕНИЕ ФУНКЦИИ (FUNCTION DECLARATION) ##
function sayHelloTo(name) {
   console.log('Привет, ' + name)
}
sayHelloTo('Елена')


// ## ОПРЕДЕЛЕНИЕ ФУНКЦИИ (FUNCTION EXPRESSION) ##
// Определение функции – обычное определение переменной, где значение, 
// которое получает переменная, является функцией.
//анонимная фукция 
var sayHelloToTwo = function (name) {
   console.log('Привет, ' + name)
}
sayHelloToTwo('Елена')



sayHelloToTwo('Елена') // Ошибка, т.к. переменная var на текущий момент не доступна 
var sayHelloToTwo = function (name) {
   console.log('Привет, ' + name)
}
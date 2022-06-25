document.querySelector('#alert').addEventListener('click', function() {
    alert('Вы успешно кликнули по кнопке')
})

document.querySelector('#confirm').addEventListener('click', function() {
    var decision = confirm('Вы уверенны что хотите нажать на кнопку?')

    if (decision) {
        alert('Вы успешно кликнули по кнопке')
    }
    console.log(decision)
    
})

document.querySelector('#prompt').addEventListener('click', function() {
    var age = prompt('Введите свой возраст', '18') //второй параметр - значение по умолчанию

    if (age >= 18) {
        alert('Вы можете пройти')
    } else {
        alert('Вы еще слишком молоды')
    }
})

console.log('Console.log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console.error')

throw new Error('Error') //выкидывает ошибку в консоль и останавливает выполнение кода

//ниже код не будет выполняться из-за throw new Error
console.log('Console.log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console.error')
var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler() {
   console.log('clicked!')
   h1.textContent = input.value
}

h1.addEventListener('mouseenter', function(){ //передали анонимную функцию
   this.style.color = 'red'
   this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function(){ //передали анонимную функцию
   this.style.color = 'black'
   this.style.backgroundColor = 'transparent'
})


button.addEventListener('click', buttonHandler)//тут передаем ссылку на функцию buttonHandler
//если будет buttonHandler() - то функция сразу же вызовется
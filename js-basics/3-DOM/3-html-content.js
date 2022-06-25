var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var ul = document.querySelector('div#playground > div > ul')
var input = document.querySelector('input')

div.innerHTML = '<h2 style="color: red;">From JavaScript</h2>'
h1.textContent = 'Changed from JS'

console.log(div)
console.log(ul)
console.log(h1.textContent)
console.log(input.value)
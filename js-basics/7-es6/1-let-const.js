let color = 'red'
color = {color: 'red'}
console.log(color)

for (var i  = 0; i < 5; i++) {
    console.log(i)
    setTimeout(function() {
        console.log(i)
    }, 2000)
}
console.log(i)

for (let i  = 0; i < 5; i++) {
    console.log(i)
    setTimeout(function() {
        console.log(i)
    }, 2000)
}

const HEX = '#FFAABB'

const array = [1, 2]

const obj = {a: 1}

array.unshift(4)

obj.b = 2

console.log(array)

console.log(obj)
//первый способ итерации объекта
var person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
}

// for (var key in person) {
//     if (person.hasOwnProperty(key)) //во избежание ключей прототипа
//         console.log(person[key])
// }

//второй способ итерации объекта - более современный 
var keys = Object.keys(person)
console.log(keys) //['name', 'age', 'job']

//пройдемся по объекту:
Object.keys(person).forEach(function(key) {
    console.log(person[key]) //Max, 28, Frontend 
})


//Object.keys не затрагивает прототип объекта
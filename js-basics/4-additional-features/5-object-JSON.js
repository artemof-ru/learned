//JSON - формат для отправки данных 

var person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    friends: ['Elena', 'Igor']
}

var str = JSON.stringify(person) //JSON.sringify - преобразует данные в JSON

console.log(str)
console.log(JSON.parse(str)) //JSON.parse - парсит в формат JavaScript данные
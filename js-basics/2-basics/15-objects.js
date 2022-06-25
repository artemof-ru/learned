var person = {
   //ключ: значение
   name: 'Василий',
   year: 1990,
   family: ['Елена', 'Игорь'],
   car: {
      year: 2010,
      model: 'Ford'
   },
   calculateAge: function () {
      // var age = 2021 - this.year
      // console.log('Возраст ', age)
      this.age = 2018 - this.year 
   }
}

console.log(person)
console.log(person.name)
console.log(person['year'])

var field = 'car'
console.log(person[field].year)

person.year = 1993

console.log(person)

person.calculateAge()

console.log(person)
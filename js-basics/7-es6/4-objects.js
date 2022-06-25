const createCar = (name, model) => ({name, model}) //оберули в круглые скобки для того, чтобы функция возвращала, лааайфхак

const ford = createCar('Ford', 'Focus')

console.log(ford)



const yearField = 'year'

const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    ['model' + Math.random()]: 'X6 Sport', //Динамически создается имя ключа
    [yearField]: 2018, //имя ключа из константы
    logFields() {
        console.log(this.name, this.model, this.year)
        //Тут много this, чтобы упростить в es6 есть деструктуризация 
        const {name, year, model} = this
        console.log(name, model, year)
    }
}

console.log(bmw)
bmw.logFields()

// const year = bmw.year // то же самое ниже:
const {year} = bmw

console.log(year)
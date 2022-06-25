// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1993))

const calculateAge = (year) => {
    const current = new Date().getFullYear()
    return current - year
}

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
//     return new Date().getFullYear() - year
// }

// const getAge = year => new Date().getFullYear() - year

// const logAge = year => console.log(new Date().getFullYear() - year)

// console.log(getAge(1940))

// logAge(2001)


const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout: function() {
        setTimeout(function() {
            console.log(this.firstName)
        }.bind(this), 1000) //передадим контекст person - вместо контекста setTimeout
    }
}

const person2 = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout: function() { // данная функция создает контекст объекта - person2
        window.setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
}

person2.logNameWithTimeout()

const person3 = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout() { // данная запись равносильная function() и создает контекст объекта - person2
        window.setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
}

person3.logNameWithTimeout()
//() => {}.bind() стрелочная функция не создает контекст и у нее не работает bind
//function(){}.bind() - создает контекст и bind работает
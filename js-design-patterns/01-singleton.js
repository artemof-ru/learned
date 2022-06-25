// Singleton - Одиночка

// Антипатерн
// Объект в одном экземляре, к нему есть глобальная точка доступа 
// Объект в едином экземпляре, к нему есть доступ из любой части программы

// 1.Вариант
// let instance
//Плохой тон задавать глобальную переменную(instance)
// class Counter {
//   constructor() {
//     if(!instance) instance = this
//     instance.count = 0
//     return instance
//   }

//   getCount() {
//     return instance.count
//   }

//   increaseCount() {
//     return instance.count++
//   }
// }

// 2.Вариант - более элегантное решиние
// сохранили ссылку на экземпляр в статическом свойстве конструктора
class Counter {
  constructor() {
    if(typeof Counter.instance === 'object') {
      return Counter.instance
    }
    this.count = 0
    Counter.instance = this
    return this
  }

  getCount() {
    return this.count
  }

  increaseCount() {
    return this.count++
  }

}

const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(myCount2.getCount()) // 4
console.log(myCount1.getCount()) // 4
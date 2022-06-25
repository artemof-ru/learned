// Prototype - Прототип
// Порождающий паттерн, который позволяет копировать объекты, не вдаваясь в подробности их реализации

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model
    this.price = price
    this.interior = interior
    this.autopilot = autopilot
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
  }
}

// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false)

// Clonning of base auto
const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

// Changes for particular auto
car1.interior = "white"
car1.autopilot = true

console.log(car1) 
// TeslaCar { model: 'S', price: 80000, interior: 'white', autopilot: true }

console.log(car2) 
// TeslaCar { model: 'S', price: 80000, interior: 'black', autopilot: false }

console.log(car3) 
// TeslaCar { model: 'S', price: 80000, interior: 'black', autopilot: false }
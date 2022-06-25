// Abstract Factory - Абстрактная Фабрика
// Это паттерн который создает интерфейс, группирующий другие фабрики, которые логически связанны друг с другом

// Abstract factory
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory
}

// Factories
function sportCarFactory() {
  return new Z4()
}
function familyCarFactory() {
  return new I3()
}

class Z4 {
  info() {
    return "Z4 is a Sport car!"
  }
}

class I3 {
  info() {
    return "I3 is a Family car!"
  }
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport')
// Car Producing (Factory)
const myCar = new produce()

console.log(myCar.info()) // "Z4 is a Sport car!"
var createCounter = function(counterName) {
    var counter = 0

    return function() {
        console.log(counterName, ++counter)
    }
}

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA() //1
counterA() //2
counterA() //3
counterB() //1






var createCounter2 = function(counterName) {
    var counter = 0

    return {
        increment: function() {
            counter++
        },
        decrement: function() {
            counter--
        },
        getCounter: function() {
            return counter
        }
    }
}

var counterC = createCounter2('Counter C')
var counterD = createCounter2('Counter D')

counterC.increment()
counterC.increment()
counterC.increment()
counterD.decrement()

counterC.getCounter() //3
counterD.getCounter() //-1

console.log(counterC.getCounter())
console.log(counterD.getCounter())
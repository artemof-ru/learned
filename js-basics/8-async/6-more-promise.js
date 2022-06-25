function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            
            resolve()
        }, ms)
    })
}

var p1 = sleep(1500).then(function() {
    return {
        name: 'Promise 1500'
    }
})

var p2 = sleep(3000).then(function() {
    return {
        name: 'Promise 3000'
    }
})

var p3 = sleep(4000).then(function() {
    return {
        name: 'Promise 4000'
    }
})

// Promise.all([p1, p2, p3]) //Отработает после самого долгого промиса
// .then(function(data) {
//     console.log('All', data)
// })

// Promise.race([p1, p2, p3]) //отработает после первого(самого быстрого) промиса
// .then(function(data) {
//     console.log('Race', data)
// })

async function start() {
    var dataAll = await Promise.all([p1, p2, p3]) //Отработает после самого долгого промиса

    var dataRace = await Promise.race([p1, p2, p3]) //отработает после первого(самого быстрого) промиса

    console.log('dataAll', dataAll)
    console.log('dataRace', dataRace)
}

start()

//.all() и .race() возвращают промисы 
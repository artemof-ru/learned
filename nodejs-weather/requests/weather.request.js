const rp = require('request-promise')

// делаем экспорт

//экспорт функции
// module.exports = function() {} 

//экспорт объекта
// module.exports = { 
//     request: function() {}
// } 

// экспортируем ассинхронную функцию
module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }
    // console.log('City: ', city)

    const KEY = '4bf82dcee2f97b52a103a9edb32e1470'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri, //uri: uri
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial', //для температуры в кельвинах
        },
        json: true
    }
    
    try {
        const data = await rp(options)
        const celsium = (data.main.temp - 32) * 5/9
        // console.log(data)

        return {
            weather: `${data.name}: ${celsium.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        console.log(error)
        return {
            weather: null,
            error: error.error.message
        }
    }
}
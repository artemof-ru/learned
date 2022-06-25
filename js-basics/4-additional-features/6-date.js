//для работы с датами есть более удобная библеотека - moment.js

var date = new Date();

console.log(date) //Sun Apr 18 2021 17:56:55 GMT+0600 (Омск, стандартное время)

//чтобы узнать какие есть методы, в консоли можно написать: new Date(). и выпадет список

// new Date(year, month[, day, hour[, minute[, second[, millisecond]]]]);

date.getSeconds() // получим секунды в которые был создан объект Date
date.getFullYear() // год
date.getDate()
date.getMonth()

date.setDate(19) //зададим день

date.getUTCDate() //получим данные без веременной зоны(то-есть 0 зона)

date.now() // Получим текущий таймштамп

var date2 = new Date(3600 * 24 * 1000) // получим 2 января 1970 года

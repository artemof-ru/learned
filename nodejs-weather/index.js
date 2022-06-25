/**
 * Приложение для определения погоды в заданном городе
 */
const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express() 

app.set('view engine', 'ejs') //по умолчанию теперь файлы ejs
app.use(express.static('public')) //статические файлы(css, ...)
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null}) //рендерим файл с названием index
})

app.post('/', async (req, res) => {
    // console.log(req.params) //отвечает за то - что идет после ? в адресной строке
    // console.log(req.body)
    const { city } = req.body

    const { weather, error } = await weatherRequest(city)
    console.log('Weather :', weather)
    console.log('Error: ', error)
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})


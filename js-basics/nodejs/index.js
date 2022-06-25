const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express() 

//получили ключ к сервису погоды
// 7d69eba36c44a449a2240859c8f6de5e


app.set('view engine', 'ejs') //Теперь по умолчанию файлы ejs
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => { //request, response
    res.render('index', {weather: null, error: null}) // рендерим файл index с разрешением ejs
})

app.post('/', async (req, res) => {
    const { city } = req.body

    const {weather, error} = await weatherRequest(city)
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
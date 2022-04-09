/**
 * Приложение для определения погоды в заданном городе
 */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs') //по умолчанию теперь файлы ejs
app.use(express.static('public')) //статические файлы(css, ...)
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index') //рендерим файл с названием index
})

app.post('/', (req, res) => {
    console.log(req.body)
    
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')

})
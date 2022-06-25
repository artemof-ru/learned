//node -v - версия
//node - переходим в интерактивную консоль
//в э интерактивном режиме можно писать js код и сразу видеть результат

//чтобы выйти из данного режима можно нажать CRTL + C или написать команду .exit


//запустить файл - node index.js
//так же можно запустить и без .js - node index


//cls - очистить консоль(clear)
//dir - содержимое папки(ls)




/* 2 =================================================================== */
const now = new Date().toLocaleString()

console.log(now)
console.log(Math.random())

//в Node.js не существует window и document - т.к. это api браузера

const fs = require('fs') //подключим модель

const data = `
    Hello from NodeJS
    I am random text!
`

fs.writeFileSync('nodejs.txt', data) //создадим файл

const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'}) //прочитать файл
//Приставка Sync - означает синхронно(по очереди)

console.log(result)

console.log(__dirname) //__dir - путь до текущей папки
console.log(__filename) //__dir - название текущего файла




/* 3 =================================================================== */
// npm -v   - версия т

// npm init  - инициализируем проект, задаем автора, версию и т.д., создает package.json

//установим вэб сервер express npm
// npm i express -s
// npm install express --save
// --save - сохранить данный пакет как зависимость для проекта


//nodemon - для постоянной перезагрузки сервера
// npm i nodemon -D
// npm install nodemon --save-dev
// --save-dev - устанавливаем данный пакет как зависимость для разработки, данный пакет не будет отвечать за функционал приложения, он будет отвечать за инфраструктуру приложения

// npm i nodemon -g   - установить глобально
// nodemon -v   - версия

// nodemon index   - запустится сервер и можно будет делать изменения в прямом эфире

// в файле package.json напишем:
/*
    "scripts": {
        "start": "nodemon index.js",
        "prod": "node index.js"
    },
 */
// npm run start   - запустится nodemon index.js

//В браузере можем написать localhost:3000



// npm i - установит нужные пакеты, которые прописаны в package.json




/* 4 =================================================================== */
const express = require('express')

const app = express() 

app.get('/', (request, response) => {
    response.end('Hello from nodejs')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
}) //1пар - порт / 2пар - callback


/* 5 =================================================================== */

//Установим ejs - специальный формат файлов, который позволяет шаблонизировать html
// npm i ejs


//чтобы распарсить данные отправленные на сервер с формы на странице
//npm i body-parser


// npm install request request-promise -S
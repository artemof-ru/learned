const form = document.querySelector('form')

form.addEventListener('submit', event => {

    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    // console.log(title, text, description)

    saveForm({title, text, description}) // === {title: title, text: text}

})

// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title: data.title,
//         text: data.text,
//         description: data.description
//     }
//     console.log('Form data:', formData)
// }

//упростим запись:
// function saveForm(data) {
//     const {title, text, description} = data
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log('Form data:', formData)
// }

//еще больше упростим запись:
// function saveForm(data) {
//     const {title, text, description} = data
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log('Form data:', formData)
// }

//еще больше упростим запись:
// function saveForm({title, text, description}) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log('Form data:', formData)
// }

//C помощью оператора spread - разворачивает объекты:
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }
//     console.log('Form data:', formData)
// }

//Оперптор Rest - применяется для сбора всех параметров
function saveForm(...args) {
    
    const [title, text, description] = args

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }
    console.log('Form data:', formData)
}
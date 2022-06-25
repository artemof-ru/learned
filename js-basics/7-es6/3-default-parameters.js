const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
    // date = date || new Date.toLocaleDateString() //старый способ определить параметры по умолчанию в es5
    // return {
    //     title: title,
    //     text: text,
    //     date: date
    // }
    // одно и то же что и ниже:
    return{title, text, date}
}

const post = createPost('Скоро новый год!')
console.log(post)
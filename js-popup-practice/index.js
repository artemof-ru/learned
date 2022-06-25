const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://im0-tub-ru.yandex.net/i?id=d7d70adffdc97f0a0396817e47389dc5&n=13&exp=1'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://cdn.pixabay.com/photo/2015/03/29/14/38/orange-697268_960_720.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://foodfriends.ru/assets/files/images/old/uploads/2018/11/62/4e202ddeabd142e3fb75e3dd5250b8b7.jpg'},
]

const modal = $.modal({
    title: 'Artemof modal',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ок', type: 'primary', handler(){
            console.log('Primari btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]

})
// modal.open()
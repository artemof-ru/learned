var p = document.querySelectorAll('p')

// for(var i = 0; i < p.length; i++) {
//    p[i].addEventListener('click', function(event) {
//       event.target.style.color = 'blue'
//    })
// }


//Делегирование
//Подход ниже намного эффективнее в плане производительности, чем подход который выше
document.getElementById('wrapper').addEventListener('click', function(event) {
   var tagName = event.target.tagName.toLowerCase()

   if (tagName === 'p') {
      event.target.style.color = 'blue'
   } 

   if (event.target.classList.contains('color')) {
      event.target.style.color = 'red'
   }

})


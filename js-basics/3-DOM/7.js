var divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++) {
   divs[i].addEventListener('click', function() {
      console.log(this.getAttribute('id'))
   }, true) //true - изменит поведение события клика вложенности на всплытие
   //по умолчанию false - вложенность идет на погружение
}
var carName = 'Ford'
var carYear = 2010
var personYear = 1990

function calculateAge(year) {
   var currentYear = 2018
   var result = currentYear - year
   return result
}

// if (calculateAge(carYear) < 10) {
//    console.log('Возраст меньше 10 лет')
// } else {
//    console.log('Возраст больше 10 лет')
// }

// if (calculateAge(personYear) < 10) {
//    console.log('Возраст меньше 10 лет')
// } else {
//    console.log('Возраст больше 10 лет')
// }



function checkAndLogAge(year, name, compareTo) {
   if (calculateAge(year) < compareTo) {
      console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
   } else {
      console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
   }
}
checkAndLogAge(carYear, 'машины', 8);
checkAndLogAge(personYear, 'человека', 30);
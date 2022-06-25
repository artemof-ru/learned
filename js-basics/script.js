function consoleTitle(srting){
  const textLength = 100;
  let text = '=====' + srting.toUpperCase();

  if(text.length < textLength){
    text += ' ';
    while(textLength - text.length){
      text += '=';
    }
  }
  console.log(text);
}


consoleTitle('//функция которая создает новые функции');
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

consoleTitle('//фунция которая изменяет другие функции');
function noisy(f){
  return (...args) => {
    console.log('Вызов для', args);
    let result = f(...args);
    console.log('Вызов для', args, ' возвращает', result);
    return result;
  }
}
noisy(Math.min)(3, 2, 1, 5, 9);


consoleTitle('//функция которая создает новые типы последовательности выполнения');
function unless(test, then){
  if(!test) then();
}
function repeat(n, action){
  for(let i = 0; i < n; i++){
    action(i);
  }
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, ' - четное число');
  });
});


let SCRIPT = [
  {name: 'Arial', ranges: '[[0,500][992,998]]', direction: 'ltr', year: '1998', living: false},
  {name: 'serif', ranges: '[[1101,1400][2000,2100]]', direction: 'rtl', year: '-1500', living: true},
  {name: 'sans-serif', ranges: '[[2100,2260]]', direction: 'ltr', year: '', living: true},
  {name: 'Roboto', ranges: '[[1501,1660][2261,2299]]', direction: 'rtl', year: '-1500', living: false},
  {name: 'Open Sans', ranges: '[[1661,1999][2300,2330][3000,3400]]', direction: 'ltr', year: '2004', living: false},
  {name: 'Montserrat', ranges: '[[501,600][701,991][999,1010]]', direction: 'rtl', year: '1899', living: true},
  {name: 'Ubuntu', ranges: '[[2331,2399][2900,2999]]', direction: 'ltr', year: '1994', living: true},
  {name: 'Times New Roman', ranges: '[[2400,2899]]', direction: 'ltr', year: '-100', living: true},
  {name: 'Consolas', ranges: '[[3401,3499][5500,5555][10000,12000][12100,12200]]', direction: 'rtl', year: '2006', living: false},
  {name: 'Verdana', ranges: '[[1011,1100][1401,1500]]', direction: 'ltr', year: '1985', living: true},
];
consoleTitle('//Фильтрация массивов')
function filter(array, test){
  let passed = [];
  for(let element of array){
    if(test(element)) passed.push(element);
  }
  return passed;
}
console.log(filter(SCRIPT, script => script.living));
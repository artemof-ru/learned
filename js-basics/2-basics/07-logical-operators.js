/*
   &&    | true  | false
   true  | true  | false
   false | false | false

   ||    | true  | false
   true  | true  | true
   false | true  | false

   && (и)   - true если все значения true
   || (или) - true если хоть одно true
   !  (нет) - инвертирует true или false

*/

console.log(true && true) //true
console.log(true && false) //false
console.log((false && true) || (true || false) || !true)
//false || true || false => true
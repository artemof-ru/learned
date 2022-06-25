// Типы данных

// В JavaScript данные хранятся либо в примитивных структурах, либо в объектах

/**
 * Примитивные типы данных:
 * - логический (Boolean),
 * - числа (Number),
 * - большие числа (Bigint),
 * - символы (Symbol),
 * - undefined,
 * - null.
 * 
 * Не примитивный тип:
 * - объект (Object).
 */

/**
 * Получить тип аргумента можно с помощью оператора typeof. Его можно запускать как функцию, так и как оператор:
 * - typeof arg.
 * - typeof(arg). 
 */ 

typeof undefined // "undefined"
typeof 0 // "number" 
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol" 
typeof Math // "object"
typeof null // "object" 
typeof alert // "function" 
typeof NaN // "number" 
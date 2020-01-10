/* 
    26. Напишите функция, которая принимает аргументом строку и 
    возврашает нам строку преобразуя последнюю букву строки в верхний регистр.
*/

function lastLetterToUpperCase(str) {
    return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
}

var string = 'i love programming';

console.log(lastLetterToUpperCase(string));
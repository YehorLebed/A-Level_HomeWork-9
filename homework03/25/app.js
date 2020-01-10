/* 
    25. Напишите функция, которая принимает аргументом строку 
    и возврашает нам строку преобразуя первую букву строки в верхний регистр. 
*/

function firstLetterToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

var string = 'i love programming!';

console.log(firstLetterToUpperCase(string));
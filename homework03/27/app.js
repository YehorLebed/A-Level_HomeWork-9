/* 
    27. Напишите функция, которая принимает аргументом строку и преобразуйте 
    например 'var_test_text' в 'varTestText'.
    Функция, конечно же, должен работать с любыми аналогичными строками.
*/

function strTransform(str) {
    // Переводит первый символ строки в верхний регистр
    function firstLetterToUpperCase(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    var strArr = str.split('_');
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = firstLetterToUpperCase(strArr[i]);
    }
    return strArr.join('');
}


var string = 'var_test_text';
console.log(strTransform(string));
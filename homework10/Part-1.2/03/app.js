/* 
    Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы,
    код которых больше 1103 или меньше 1040,
    Функция должна вернуть новую строку

    Применить эту функцию к строке
    "Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"
 */

function cleanString(string) {
    let arrString = string.split('');
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i].charCodeAt(0) > 1103 || arrString[i].charCodeAt(0) < 1040) {
            arrString.splice(i--, 1);
        }
    }
    return arrString.join('');
}

cleanString("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик");
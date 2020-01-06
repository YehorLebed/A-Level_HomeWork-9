/*
    Написать функцию сортировки массива

    Не использовать метод sort ()

    Использовать оператор цикла while

    Использовать методы работы с массивами и строками
*/

function arrSort(arr) {
    let array = arr.slice();
    let n = 0;

    while (n < array.length - 1) {
        let min = array[n];
        for(let i = n; i < array.length; i++) {
            if(array[i] < min) {
                min = array[i];
            }
        }

        let temp = array[n];
        array[array.lastIndexOf(min)] = temp;
        array[n] = min;
        n++;
    }
    return array;
}

let arrayNumb = [1, 2, 51, 1, 85, 23, 32, 2, 6, 9, 8];
let arrayLetter = ['z', 'w', 'g', 's', 'd', 'a'];

console.log(arrSort(arrayNumb));
console.log(arrSort(arrayLetter));
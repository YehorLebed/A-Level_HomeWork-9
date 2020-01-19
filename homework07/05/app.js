/* 
    5. Дан массив с числами. Запишите в новый массив только те числа, которые
    больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию
    isNumberInRange из предыдущей задачи.
*/

function isNumberInRange(numb) {
    return numb > 0 && numb < 10;
}

var arr = [123, 43, 3, -32, 0, 423, 8, 76, 6];
var arr2 = arr.filter((numb) => isNumberInRange(numb))

console.log(arr2);
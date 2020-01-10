/* 
    28. Создайте смешанный массив, например[1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
    Посчитайте сумму всех его чисел, включая строковые.
    Выведите сумму в alert. 
*/

function arrItemSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(+arr[i])) continue;
        sum += +arr[i];
    }
    return sum;
}

var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
console.log(arrItemSum(arr));
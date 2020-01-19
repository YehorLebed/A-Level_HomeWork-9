/* 
    4. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром
    принимает целое число и возвращает сумму его цифр.
*/

function getDigitsSum(numb) {
    let sum = 0;
    while (numb > 0) {
        sum += numb % 10;
        numb = Math.floor(numb / 10);
    }
    return sum;
}

console.log(getDigitsSum(123));
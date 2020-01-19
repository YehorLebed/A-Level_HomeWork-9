/* 
    7. Сделайте функцию getDivisors, которая параметром принимает число и
    возвращает массив его делителей (чисел, на которое делится данное число).
*/

function getDivisors(numb) {
    const arr = [];
    for (let i = numb; i > 0; i--) {
        if (numb % i == 0) arr.push(i);
    }
    return arr;
}

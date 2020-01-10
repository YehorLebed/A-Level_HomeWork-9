// 29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.Переберите
// массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не 
// используя функцию Math.pow().

function createRandomArray(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        let randomNumber = +(Math.random() * (100 - 1) + 1).toFixed(2);
        array.push(randomNumber);
    }
    return array;
}

function numberPow(number, pow) {
    if (pow === 1) return number;
    pow--;
    return number * numberPow(number, pow);
}

const array = createRandomArray(10);
console.log(array.map(value => value ** 5));
console.log(array.map(value => numberPow(value, 5)));
/* 31. Задание на МС.Создайте пустой массив.В цикле до n на каждой итерации запускайте
prompt для ввода любых символов, полученное значение добавляйте в конец созданного 
массива.После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert 
полученный результат */

const array = [];

for (let i = 0; i < 5; i++) {
    let value = prompt('Введите значение', '');
    if (!(isNaN(+value))) value = +value;
    array.push(value);
}

alert(array.reduce((sum, current) => {
    if (!isNaN(current)) sum += current;
    return sum;
}, 0));
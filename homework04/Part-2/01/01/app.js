/*
    Создайте объект, свойства которого описывают содержимое дамской сумочки
    Создайте метод объекта, позволяющий удалить что-то из сумочки
    Создайте метод объекта, позволяющий положить что-то в сумочку
*/
const handBag = {
    lipstick: 2,
    mirror: 1,
    putItem: function (item, number) {
        if (typeof number != 'number' || isNaN(number)) return;
        this.hasOwnProperty(item) ?
            this[item] += number :
            this[item] = number;
    },
    removeItem: function (item) {
        this.hasOwnProperty(item) ?
            this[item] -= 1 :
            console.log(`There is no ${item} in the bag`);
        if (this[item] == 0) delete this[item];
    }
}
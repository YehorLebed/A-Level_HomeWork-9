// 6. Дан объект obj.С помощью цикла for-in выведите на экран ключи и элементы 
// этого объекта.
var obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
};

for (var key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
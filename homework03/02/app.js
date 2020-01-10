// 2. Дан массив с элементами[1, 2, 3, 4, 5].С помощью цикла for выведите 
// все эти элементы на экран.Через for of
var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (var num of arr) {
    console.log(num);
}
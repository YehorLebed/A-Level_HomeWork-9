// 3.  Дан массив с элементами[2, 3, 4, 5].С помощью цикла for найдите 
// произведение элементов этого массива.Через for of
var arr = [2, 3, 4, 5];
var mult = 1;

for (var i = 0; i < arr.length; i++) {
    mult *= arr[i];
}

console.log(mult);
mult = 1;

for (var num of arr) {
    mult *= num;
}

console.log(mult);
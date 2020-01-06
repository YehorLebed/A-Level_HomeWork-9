/* var timer = makeProfileTimer()
doSomething();  // некий код, время выполнения которого мы хотим измерить с высокой точностью
alert(timer()); // alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(), 
                // т. е. измерить время выполнения doSomething */

function makeProfileTimer() {
    let timeStart = performance.now();
    return function () {
        let timeEnd = performance.now();
        return timeEnd - timeStart;
    }
}

let timer = makeProfileTimer();

for(let i = 0; i < 4000; i++) {
    Math.pow(9,6);
}

alert(timer());
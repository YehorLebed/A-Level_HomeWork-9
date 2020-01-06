function myBind(fn, context, params) {
    return function (...args) {
        let paramsCopy = params.slice();

        let i = 0;
        while (paramsCopy.includes(undefined)) {
            paramsCopy.splice(paramsCopy.indexOf(undefined), 1, args[i]);
            i++;
        }
        return fn.call(context, ...paramsCopy);
    }
}

var pow5 = myBind(Math.pow, Math, [undefined, 5]) // первый параметр - функция для биндинга значений по умолчанию, 
// второй - this для этой функции, третий - массив, в котором undefined означает
// параметры, которые должны передаваться при вызове,
// а другие значения являются значениями по умолчанию:
var cube = myBind(Math.pow, Math, [undefined, 3]) // cube возводит число в куб

console.log(pow5(2));// => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
console.log(cube(3)); // => 27


var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9])
console.log(chessMin(-1, -5, 3, 15)); // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5


var zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогично, только теперь задается "0" как текст по умолчанию в prompt, 
// а текст приглашения пользователя задается при вызове zeroPrompt
var someNumber = zeroPrompt("Введите число")
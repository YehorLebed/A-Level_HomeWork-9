/* Final Countdown
Напишите код, который будет делать обратный ежесекундный отсчёт в консоли, используя console.log. 
Используйте Self Invoked Function для создания замыкания и setTimeout для задержки вывода. 
Результатом должно быть:

   5 //пауза 1 секунда
   4 //пауза 1 секунда
   3 //пауза 1 секунда
   2 //пауза 1 секунда
   1 //пауза 1 секунда
   "поехали!" 
*/

(function (timer) {
    let count = timer;

    console.log(count--);   // что б первая цифра выводилась без задержки
    function timerCounter() {
        if (count > 0) {
            setTimeout(() => {
                console.log(count--);
                return timerCounter();
            }, 1000);
        } else if (count === 0) {
            setTimeout(() => {
                console.log('Поехали!');
            }, 1000);
        }
    }
    
    return timerCounter();
})(5);


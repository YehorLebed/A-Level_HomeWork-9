/* 11. Дошли ? Прекрасно.
Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце. */

var secondInHour = 60 * 60;
var secondInDay = secondInHour * 24;
var secondInWeek = secondInDay * 7;
var secondInMounth = secondInDay * 30;

var userAnswer = prompt('Введите число в формате 10h/10d/10w', '');
var dateFormat = userAnswer[userAnswer.length - 1];
var dateNumber = parseInt(userAnswer);

if (dateFormat == 'h') {
    alert(dateNumber * secondInHour);
}
if (dateFormat == 'd') {
    alert(dateNumber * secondInDay);
}
if (dateFormat == 'w') {
    alert(dateNumber * secondInWeek);
}
if (dateFormat == 'm') {
    alert(dateNumber * secondInMounth);
}
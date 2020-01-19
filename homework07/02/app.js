/* 
    2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
    опять сложите его цифры. И так, пока сумма не станет однозначным
    числом (9 и менее).
*/
function addNumbersOfNumber(numb) {
    let sum = 0;
    while (numb > 0) {
        sum += numb % 10;
        numb = Math.floor(numb / 10);
    }
    if (sum > 9) addNumbersOfNumber(sum);
    else console.log(sum);
}

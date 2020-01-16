/*
    7. Дан элемент #myunique. Добавьте ему класс www, если его нет и удалите -
    если есть. | Вы зарание не знаете, есть тамм этот класс или нету
*/

const elem = document.getElementById('myunique');
if(elem.classList.contains('www')) elem.classList.remove('www');
else elem.classList.add('www');
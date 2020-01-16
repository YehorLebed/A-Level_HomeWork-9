/*
    5. Дан элемент #myunique. Удалите у него класс www.
*/

const elem = document.getElementById('myunique');
elem.classList.remove('www');
if(!elem.getAttribute('class')) elem.removeAttribute('class');
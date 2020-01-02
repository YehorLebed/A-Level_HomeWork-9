/* 9. Дан элемент в вёрстке с id #myunique. Добавьте ему класс www.  при
нажатии через js естественно */
const elem = document.getElementById('myunique');
elem.onclick = () => elem.classList.add('www');
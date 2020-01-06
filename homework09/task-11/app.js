/* 11. Дан элемент #myunique. При нажатии добавляйте ему класс www, если
нету такого класса, а если есть, то убирайте */
const elem = document.getElementById('myunique');
elem.onclick = () => {
    elem.classList.toggle('www');
}
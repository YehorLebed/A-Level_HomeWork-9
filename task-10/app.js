/* 10. Дан элемент #myunique. Удалите у него класс www вместо с атрибутом
при нажатии. */
const elem = document.getElementById('myunique');
elem.onclick = () => {
    elem.classList.remove('www');
    elem.removeAttribute('class');
}
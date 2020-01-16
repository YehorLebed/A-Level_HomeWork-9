/*
    10. Дан элемент #myunique. По клику на него выведите название его тега в нижнем регистре.
*/

const elem = document.getElementById('myunique');
elem.onclick = () => console.log(elem.tagName.toLowerCase());
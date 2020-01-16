/*
    9. Дан элемент #myunique. По клику на него выведите название его тега.
*/

const elem = document.getElementById('myunique');
elem.onclick = () => console.log(elem.tagName);
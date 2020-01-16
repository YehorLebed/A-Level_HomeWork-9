/*
    11. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
*/

const elems = document.querySelectorAll('.www');

for(let item of elems) {
    item.innerText = item.tagName.toLowerCase();
}

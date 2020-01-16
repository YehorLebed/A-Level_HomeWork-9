/*
    Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
*/


const elem = document.getElementById('elem');
const prev = elem.previousElementSibling;
prev.innerHTML = prev.innerHTML + '!';

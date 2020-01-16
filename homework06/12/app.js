/*
    12. Дан ol. Вставьте ему в конец li с текстом 'HELLO WORLD!'.
*/

const list = document.querySelector('ol');
const li = document.createElement('li');
li.innerText = 'HELLO WORLD!';
list.appendChild(li);

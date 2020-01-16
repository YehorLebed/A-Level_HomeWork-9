/*
    13. Дан элемент ul, а в нем li #myunique. Вставьте перед элементом #myunique новую li с текстом '!!!'.
*/


const li = document.getElementById('myunique');
const newLi = document.createElement('li');
newLi.innerText = '!!!';
li.before(newLi);

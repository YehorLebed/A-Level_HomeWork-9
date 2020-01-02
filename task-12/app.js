/* 12. Дан элемент #myunique. Узнайте количество его классов при нажатии
и вставялйте в innerText. */
const elem = document.getElementById('myunique');
elem.onclick = () => elem.innerText = elem.classList.length;
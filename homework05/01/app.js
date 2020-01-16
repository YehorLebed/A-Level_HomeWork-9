/*
    1. Создайте сами в html Картинку img с айди myimg. Потом уже в js Сделать 2 prompt.
    Где вы будете спрашивать у человека ссылку на картинку. И так же на сколько градусов повернуть.
    Проверяете, чтобы в первом промте была ссылка. А во втором было только число.
    И вставялете пять раз картину с одним и тем же рисунком и каждый раз крутите эту
    картинку на тот градус, что указали в промт. Например ввёл человек 45, то первая
    картинка с поворотом на 45, вторая на 90, 3 - 135 и т.д.
    <img id=myimg src=ssilkaNaImgIzPrompt style=(vspomnite kak krutit v css)>
*/

var image = document.getElementById('myimg');
image.width = 150;

var src, deg;
do {
    src = prompt('Введите ссылку на картинку', '');
} while (!src.includes(':') || !src.includes('/'))

do {
    deg = parseInt(prompt('Введите угол поворота', ''));
} while (isNaN(deg))

image.setAttribute('src', src);
for (let i = 1; i < 5; i++) {
    let imageCopy = image.cloneNode();
    imageCopy.style.transform = `rotate(${deg*i}deg)`;
    document.body.appendChild(imageCopy);
}
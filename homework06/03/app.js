/*
    3. Проверка на номер. Создать input и каждый раз, когда пользователь
    печатает текст. Проверять на то, что внутри input только число.
    Если там только число, то светить текст зеленым, если не только число,
    то светить красным. PS. color: red, green | Проверять через setInterval
*/

const input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);

setInterval(() => {
    let text = input.value;
    if(!isNaN(+text)) input.style.color = "green";
    else input.style.color = "red";
}, 50);
/* 8. Проверка на номер. Создать input и каждый раз, когда пользователь
печатает текст. Проверять на то, что внутри у input только одни числа.
Если там только число, то светить текст зеленым, если не только число,
то светить красным. PS. color: red, green */
const input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.append(input);
input.onkeyup = () => {
    !isNaN(input.value) ? input.style.color = 'green' : input.style.color = 'red';
}
/* 5.  Привяжите всем ссылкам событие онклик - по клику на ссылку в конец
ее текста дописывается ее href в круглых скобках. Внутри href должно быть
по умолчанию https://google.com
Приветсвуется самый короткий код не больше 100 символов на одной строке */
const links = document.querySelectorAll('a');
for (let link of links) {
    link.onclick = (event) => {
        event.preventDefault();
        link.innerText = `${link.innerText}(${link.getAttribute('href')})`;
    }
}
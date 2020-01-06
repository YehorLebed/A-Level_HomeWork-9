/* 2. 5 ссылок. Привяжите всем ссылкам событие онклик - по клику на ссылку в
конец ее текста дописывается ее href в круглых скобках. Внутри href должно
быть по умолчанию https://google.com */
const links = document.querySelectorAll('a');
for (let link of links) {
    link.onclick = (event) => {
        event.preventDefault();
        let linkText = link.innerText;
        let hrefValue = link.getAttribute('href');
        link.innerText = `${linkText}(${hrefValue})`;
    }
}
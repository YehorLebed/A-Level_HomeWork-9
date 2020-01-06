/* 1. Даны ссылки. Привяжите всем ссылкам событие - каждый раз по наведению на
ссылку в конец атрибута title запишется её текст. */
const links = document.querySelectorAll('a');
for (let link of links) {
    link.onmouseover = () => {
        let titleText = link.getAttribute('title') === null ? '' : link.getAttribute('title');
        link.setAttribute('title', titleText + link.innerText);
    }
}
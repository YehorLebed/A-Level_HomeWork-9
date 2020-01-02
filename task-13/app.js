/* 13. Даны элементы с классом www$, $ - это инкремент. Добавьте каждому
элементу в конец название его тега в нижнем регистре при нажатии.
Каждый раз */
const elements = document.querySelectorAll('[class*="www"]');
elements.forEach((item) => {
    item.onmousedown = () => {
        const itemText = item.innerText;
        item.innerText = `${item.innerText} ${item.tagName.toLowerCase()}`;
    }
})
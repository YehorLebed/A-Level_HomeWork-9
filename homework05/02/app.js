/*
    2. Делаем функцию, которая принимает аргументом название тега и возварашает созданый тег.
    Потом Делаем функцию, которая принимает этот тег как аргумент и вставляет в body.
    PS. createEl..., append...
*/
function createElement(tagname) {
    return document.createElement(tagname);
}

function appendElement(nodeElement) {
    document.body.appendChild(nodeElement);
}
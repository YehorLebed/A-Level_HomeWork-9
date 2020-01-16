/*
    5. Нужно взять и сделать функцию getInnerTextOfElement, которая принимает в качестве
    аргумента название например '#name'. То внутри делает поиск по getElementById и берет
    innerText и возварашает. НЕ МОЖНО использовать querySelector. Првоверяете аргумент.
    Начинается на точку или на #, чтобы вызвать тот метод, который вам нужен.
*/
function getInnerTextOfElement(name) {
    var text;
    if (name.indexOf('#') === 0) {
        var idName = name.replace('#', '');
        text = document.getElementById(idName).innerText;
    }
    if (name.indexOf('.') === 0) {
        var className = name.replace('.', '');
        text = document.getElementsByClassName(className)[0].innerText;
    }
    return text;
}
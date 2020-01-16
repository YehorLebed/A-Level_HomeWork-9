/*
    6. Делаем функцию $(), которая может принимать аргументом название класса, айди или
    название просто тега.
    Если это тег, то ишем по тегу и выводим эти елементы, которые мы нашли. Если это айди,
    то ишем по айди. Если это класс. Тоооо, если на сайте несколько таких класов, возварашаем
    как массив елементов, который нашли, если только один клас, то возвараем просто один
    елемент не в массиве!
*/
function $(name) {
    if (name.indexOf('#') === 0) {
        let idName = name.replace('#', '');
        return document.getElementById(idName);
    }
    if (name.indexOf('.') === 0) {
        let className = name.replace('.', '');
        let findResult = document.getElementsByClassName(className);
        if (findResult.length === 1) return findResult[0];
        return findResult;
    }
    let findResult = document.getElementsByTagName(name)
    if (findResult.length === 1) return findResult[0];
    return findResult;
}
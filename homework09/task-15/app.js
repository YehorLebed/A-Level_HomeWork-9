/* 15. Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую
li эта li удалялась. */
const orderedList = document.querySelector('ol');
const liMustBeDeleted = orderedList.firstElementChild;
orderedList.childNodes.forEach((item) => {
    if (item != liMustBeDeleted) {
        item.onmousedown = () => orderedList.removeChild(liMustBeDeleted)
    }
})
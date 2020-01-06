/* 14. Дан ol. По нажатию на кнопку получите его последнего потомка и
удалите его. */
const btn = document.querySelector('button');
btn.onmousedown = () => {
    const orderedList = document.querySelector('ol');
    const listLastChild = orderedList.lastElementChild;
    orderedList.removeChild(listLastChild);
}
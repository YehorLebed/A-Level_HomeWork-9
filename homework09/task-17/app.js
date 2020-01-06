/* 17. Высота body 2000px; По нажатию на кнопку прокрутите страницу до
самого низа */
const btn = document.getElementById('btn');
btn.onmousedown = () => {
    window.scrollBy(0, document.body.offsetHeight);
}
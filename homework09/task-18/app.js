/* 18. Дан элемент #myunique. По клику на него увеличьте его ширину и
высоту и шрифт в 2 раза. Делайте это анимировано */
const uniqueElem = document.getElementById('myunique');
uniqueElem.style.transition = '0.3s';
uniqueElem.onmousedown = () => {
    let elemHeight = uniqueElem.offsetHeight;
    let elemWidth = uniqueElem.offsetWidth;
    let elemFontSize = !uniqueElem.style.fontSize ?
        16 : parseInt(uniqueElem.style.fontSize);

    uniqueElem.style.height = `${elemHeight * 2}px`;
    uniqueElem.style.width = `${elemWidth * 2}px`;
    uniqueElem.style.fontSize = `${elemFontSize * 2}px`;
}
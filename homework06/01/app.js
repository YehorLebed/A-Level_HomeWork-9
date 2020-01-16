/*
    1. Высота body 4000px; Через каждые 3 секунды плавно крутите "ползунок" вниз
    и так же через секунду вверх. И так бесконечно раз  
*/

window.onload = () => {
    var curPosition = 0;
    setTimeout(() => {
        scrollDown(curPosition);
    }, 3000);
}

function scrollDown(curPosition) {
    if (curPosition < 4000) {
        curPosition += 25;
        setTimeout(() => {
            window.scrollTo(0, curPosition);
            scrollDown(curPosition);
        }, 20);
    } else {
        curPosition = 4000;
        setTimeout(() => {
            scrollUp(curPosition);
        }, 1000);
    }
}

function scrollUp(curPosition) {
    if (curPosition > 0) {
        curPosition -= 25;
        setTimeout(() => {
            window.scrollTo(0, curPosition);
            scrollUp(curPosition);
        }, 20);
    } else {
        curPosition = 0;
        setTimeout(() => {
            scrollDown(curPosition);
        }, 3000);
    }
}

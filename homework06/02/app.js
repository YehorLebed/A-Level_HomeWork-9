// 2. Дан ol.Через 3 секунды получите его последнего потомка и удалите его.

window.onload = ()=>{
    setTimeout(() => {
        const list = document.getElementsByTagName('ol')[0];
        const listLastChild = list.lastElementChild;
        list.removeChild(listLastChild);
        console.log('3s');
    }, 3000);
}


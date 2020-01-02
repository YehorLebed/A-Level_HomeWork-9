/* 3. 5 ссылок как и в задаче 2. Только после трех кликов на ссылку следует 
убрать от нее событие, которое добавляет href в конец текста как в предыдушей 
задачи */
const links = document.querySelectorAll('a');
for (let link of links) {
    link.clickCounter = 0;
    link.onclick = (event) => {
        link.clickCounter++;
        if (link.clickCounter < 3) {
            event.preventDefault();
            let linkText = link.innerText;
            let hrefValue = link.getAttribute('href');
            link.innerText = `${linkText}(${hrefValue})`;
        } else {
            link.onclick = null;
        }
    }
}
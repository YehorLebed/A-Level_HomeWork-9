const a = {
    name: "Ivan",
    surname: "Jimson"
}

const b = {
    name: "Misha",
    surname: "Mishkin"
}

const c = {
    name: "Vova",
    surname: "Vovkin",
    fathername: "Pupkin"
}

const persons = [a, b, c];
persons.push({ name: "Noname", surname: "Unknown" });

/*
    HTML optional fields
    Сделайте цикл, который выводит весь массив persons, 
    в форме HTML-таблицы. Имя и Фамилия, а так же другие 
    поля при наличии.
*/

var str = '<table border="1">';

for (let person of persons) {
    str += '<tr>';
    for (let key in person) {
        str += `<td>${person[key]}</td>`;
    }
    str += '</tr>';
}
str += '</table>';
document.write(str);
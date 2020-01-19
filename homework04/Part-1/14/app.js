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
    HTML th optional
    Переработайте вывод persons в HTML с поиском всех 
    возможных колонок во всех записях, выводом названий 
    колонок в заголовок HTML-таблицы. Для решения этой 
    задачи вначале узнайте множество полей (ключей) во 
    всех записях, выведите HTML-заголовок используя тэги 
    <th>, а потом выводите все записи.
*/

var str = '<table border="1">';
var keysArr = [];

for (let person of persons) {
    for (let key in person) {
        if (!keysArr.includes(key)) keysArr.push(key);
    }
}

str += '<tr>'
for (let i = 0; i < keysArr.length; i++) {
    str += `<th>${keysArr[i]}</th>`;
}
str += '</tr>';

for (let i = 0; i < persons.length; i++) {
    if (i % 2 === 1) {
        str += '<tr style="background-color: #aaa">';
    } else {
        str += '<tr>';
    }
    for (let key in persons[i]) {
        str += `<td>${persons[i][key]}</td>`;
    }
    str += '</tr>';
}
str += '</table>';
document.write(str);
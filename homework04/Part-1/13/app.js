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
    HTML tr color
    Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
*/

var str = '<table border="1">';

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
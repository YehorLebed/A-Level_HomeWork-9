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
    deserialize
    HTML
    Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. 
    Имя и Фамилия - колонки. Таблицы в HTML Пример кода:
        
        var str = "<table border='1'>"
        for (let i=0;i<1;i++){
            str += `<tr><td>${i}</td><td>адын</td></tr>`
        }
        str += "</table>"

        console.log(str)
        document.write(str)
    
    Модифицируйте код так, что бы он выводил массив persons
*/

var str = '<table border = "1"><tr><th>Name</th><th>Surname</th></tr>';

for (let person of persons) {
    str += `<tr><td>${person.name}</td><td>${person.surname}</td></tr>`;
}
str += '</table>';
document.write(str);
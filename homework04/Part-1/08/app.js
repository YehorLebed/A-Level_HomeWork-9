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
    fullName
    Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО.
    Учтите, что поле fathername не является обязательным.
*/

for (let person of persons) {
    if ("name" in person && "surname" in person) {
        person.fullName = person.name + " " + person.surname;
        if("fathername" in person) {
            person.fullName += " " + person.fathername;
        }
    }
}
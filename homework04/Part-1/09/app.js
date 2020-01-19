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
    serialize
    Создайте JSON-строку из persons
*/

let jsonString = JSON.stringify(persons);
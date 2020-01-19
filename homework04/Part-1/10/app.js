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
    Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
*/

const e = JSON.parse(`{
    "name": "NewBoy",
    "surname": "b-b-b-boy"
}`);
persons.push(e);
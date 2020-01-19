/*
    array of persons
    Добавьте несколько ассоциативных массивов с персонами в обычный массив persons,
    например a,b,c. Так же добавьте персону литерально ({...}).
    Получится обычный массив с элементами-ассоциативными массивами с персонами.
*/

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
    surname: "Vovkin"
}

const persons = [a, b, c];
persons.push({ name: "Noname", surname: "Unknown" });

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

/*
    loop of name and surname
    Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.
*/

for(let person of persons) {
    console.log(`Name: ${person.name}; Surname: ${person.surname}`);
}
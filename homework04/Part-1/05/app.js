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
    loop of persons
    Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])
*/

for(let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}
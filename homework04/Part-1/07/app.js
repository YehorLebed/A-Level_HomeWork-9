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
    loop of loop of values
    Сделайте цикл, который выводит весь массив persons,
    но только значения всех полей из объектов. Используйте вложенный цикл
*/

for(let person of persons) {
    for(let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    console.log('\n');
}
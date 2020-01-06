/*
    Есть два массива, в первом - имена, во втором - фамилии

    Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой

    names [ i ] ="Сергей",
    lastNames [ i ] = "Коломенцев"
    Результат:

    newArray [ i ] = "Сергей Коломенцев"
*/

function makeFullName(firstNames, lastNames) {
    let fullNames = [];
    for (let i = 0; i < firstNames.length && i < lastNames.length; i++) {
        fullNames.push(`${firstNames[i]} ${lastNames[i]}`);
    }
    return fullNames;
}

let firstNames = ['John', 'Andry', 'Mike'];
let lastNames = ['Adams', 'Linkoln', 'Vasovski'];

makeFullName(firstNames, lastNames);
/*
    Работа с предыдущим массивом group

    Объявить функцию, которая добавляет нового студента в массив group

    Формальные параметры - данные студента

    function addNewStudent ( name, lastName, age, notebook ... ) {
        ...
    }
    Вызвать функцию addNewStudent, передав ей фактические данные нового студента

    После этого вызвать предыдущую функцию ( getStudentsList ), чтобы убедиться, что студент добавлен в группу
*/

function getStudentsList(arrayOfStudents) {
    for (let obj of arrayOfStudents) {
        let objInfo = '';
        for (let key in obj) {
            objInfo += `${key}: ${obj[key]} `;
        }
        console.log(objInfo + '\n');
    }
}

function addNewStudent(name, age, isPhone) {
    arr.push({
        'name': name,
        'age': age,
        'isPhone': isPhone
    });
}

const arr = [
    {
        name: 'Aren',
        age: 23,
        isPhone: true,
    },
    {
        name: 'John',
        age: 12,
        isPhone: false,
    },
    {
        name: 'Jim',
        age: 1222,
        isPhone: true,
    }
];

getStudentsList(arr);

console.log('------------------------- \n\n\n')

addNewStudent('Mike', 54, true); 
getStudentsList(arr);
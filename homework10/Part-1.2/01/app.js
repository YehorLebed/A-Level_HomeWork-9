/*
    Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы

    Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )

    var group = [
            {
                    name: "...",
                    lastName: "...",
                    age: ...,
                    notebook: false,
                    ...
    ]
    Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой

    ( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )

    function getStudentsList ( arrayOfStudents ) {
            ...
    }
    Можно вернуть новый массив ( массив строк, а не объектов ) и вывести его в консоль
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
/* 32. Задание на МС.Напишите объект, описывающий модель телефона, заполнив все свойства
значениями, прочитанными из prompt(например: brand, model, resolution, color...).  */

const obj = {
    brand: "",
    model: "",
    resolution: "",
    color: "",
    price: ""
}

for(let key of Object.keys(obj)) {
    obj[key] = prompt(`Введите '${key}' телефона:`, '');
}
console.log(obj);


const obj2 = {
    brand: "",
    model: "",
    resolution: "",
    color: "",
    price: ""
}

let value = prompt('Введите бренд, модель, разширение экрана, цвет и цену телефона через запятую', '');
const arrValue = value.split(', ');
let i = 0;
for (let key of Object.keys(obj2)) {
    obj2[key] = arrValue[i++];
}
console.log(obj2);
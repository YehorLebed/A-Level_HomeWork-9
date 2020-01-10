/* 
    30. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
    a.Добавьте в начало массива значение ‘Backbone.js’
    b.Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
    c.Добавьте в массив значение ‘CommonJS’ вторым элементом
    d.Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами 
    “Это здесь лишнее”
    z.Сделайте массив и назовите dlyaLyudshix, перебирает массив, где только удалили 
    ‘jQuery’, и перебирайте этот массив и если вы найдёте там значние ‘Vue.js’, то положите 
    в массив с названием dlyaLyudshix 
*/

const array = ['AngularJS', 'jQuery'];

// a.Добавьте в начало массива значение ‘Backbone.js’
array.unshift('Backbone.js');

// b.Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
array.push('ReactJS', 'Vue.js');

// c.Добавьте в массив значение ‘CommonJS’ вторым элементом
array.splice(1, 0, 'CommonJS');

/* d.Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами 
“Это здесь лишнее” */
alert(array.splice(array.indexOf('jQuery'), 1) + ' - это здесь лишнее');

/* z.Сделайте массив и назовите dlyaLyudshix, перебирает массив, где только удалили
‘jQuery’, и перебирайте этот массив и если вы найдёте там значние ‘Vue.js’, то положите
в массив с названием dlyaLyudshix */
const dlyaLyudshix = array.filter(value=>value=='Vue.js');



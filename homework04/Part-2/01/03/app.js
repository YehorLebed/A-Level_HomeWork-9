/* 
Объявите конструктор, который создает экземпляры с унаследованным методом addProperty

Метод addProperty должен принимать два аргумента:

имя свойства
значение свойства
и добавлять экземпляру новое свойство с указанным именем и значением */

const obj = {
    addProperty: function(key, value) {
        this[key] = value;
    }
}

function B() {
    this.name = 'B';
}
B.prototype = obj;

const b = new B();
console.log(b);
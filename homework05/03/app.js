/*
    4. Делаем функцию, которая принимает в качестве аргумента id тега и если этого тега
    нету внутри body, то возврашает, что нельзя удалить этот тег, потому что в вёрстке
    этого тега нету. Если этот тег в вёрстке, то удаляет
*/
function deleteIdTag(id) {
    var elementWithCurrentId = document.getElementById(id);
    elementWithCurrentId ? 
    elementWithCurrentId.parentNode.removeChild(elementWithCurrentId) :
        console.log('нельзя удалить этот тег, потому что в вёрстке этого тега нету');
}
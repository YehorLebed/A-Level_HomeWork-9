/*
Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

📦 Приватные свойства объекта:
    🔑 title ( название книги ),
    🔑 year ( год издания ),
    🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
    🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
        внесение изменений в свойства:
            🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию о наличии книги
       ( вывести в консоль readerData )
    📋 getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки
       ( приватное свойство readerName
         должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод
       giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
       сбросить значения приватных свойств
       readerName, readerData
*/
function LibraryBook() {
    // private
    var title = "В поисках сокровищ",
        year = 2002,
        author = "Вильмонт Екатерина Николаевна",
        readerName = null,
        readerData = null;

    function giveTheBook(client) {
        readerName = client;
        readerData = new Date();
    }

    // public
    this.getBookInfo = function () {
        readerData ? console.log(readerData) : console.log('In stock');
    }
    this.getTheBook = function (client) {
        if (readerName) return null;
        giveTheBook(client);
        return title;
    }
    this.returnBook = function () {
        readerName = null;
        readerData = null;
    }
}
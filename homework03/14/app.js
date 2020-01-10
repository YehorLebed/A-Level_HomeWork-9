/* 
    14. В переменной date лежит дата в формате '2025-12-31'.
    Преобразуйте эту дату в формат '31/12/2025'. 
*/

var date = '2025-12-31';

var dateArr = date.split('-');
dateArr.reverse();
date = dateArr.join('/');

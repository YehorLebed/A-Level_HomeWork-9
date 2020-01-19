const a = {
    name: "A",
    surname: "A-lphabet"
}
const b = {
    name: "B",
    surname: "B-lphabet"
}
const c = {
    name: "C",
    surname: "C-lphabet"
}

a.age = 14;
b.fathername = "upper-B";
c.sex = "IT";

/* fields check
Проверьте наличие необязательных полей у каждого из этих массивов.
Если поле найдено, выведите его с помощью alert.
Проверку делайте по typeof или in в if. */

function checkOptionlanFields(object) {
    if ("age" in object) alert("It has age");
    if ("sex" in object) alert("It has age");
    if ("futhername" in object) alert("It has age");
}

/* 
    18. Дана строка 'я учу javascript!'.Вырежите из нее слово 'учу' 
    и слово 'javascript' тремя разными способами(через substr, substring, slice). 
*/

function substrMethod(str, substr) {
    return str.substr(str.indexOf(substr), substr.length);
}

function substringMethod(str, substr) {
    return str.substring(str.indexOf(substr), str.indexOf(substr) + substr.length);
}

function sliceMethod(str, substr) {
    return str.slice(str.indexOf(substr), str.indexOf(substr) + substr.length);
}

var str = 'я учу javascript!';
var substr1 = 'учу';
var substr2 = 'javascript';

// substr
console.log(substrMethod(str, substr1));
console.log(substrMethod(str, substr2));

// substring
console.log(substringMethod(str, substr1));
console.log(substringMethod(str, substr2));

// slice
console.log(sliceMethod(str, substr1));
console.log(sliceMethod(str, substr2));
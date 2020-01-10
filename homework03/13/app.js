/* 
    13. Дана строка 'aaa bbb ccc'.
    Вырежите из нее слово 'bbb' тремя разными способами
    (через substr, substring, slice). 
*/

var str = 'aaa bbb ccc';
var substr = 'bbb';

var start = str.indexOf(substr);
var length = substr.length;

var str1 = str.substr(start, length);
var str2 = str.substring(start, start + length);
var str3 = str.slice(start, start + length);
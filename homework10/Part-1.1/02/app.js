function makeSaver(param) {
    let funcToExecute = param;
    let result = undefined;
    let isExecuted = false;
    return function () {
        if (!isExecuted) {
            result = funcToExecute();
            isExecuted = true;
        }
        return result;
    }
}


// test #1
var saver = makeSaver(Math.random);

var value1 = saver();
var value2 = saver();

console.log(value1 === value2);

// test #2
var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random() * 6)])

var value3 = saver2();
var value4 = saver2();

console.log(value3 === value4);
function sampleFunc() {
    console.info(`Symbols in my code: ${arguments.callee + 0}`);
}

function modificator(func) {
    let length = String(func).length;
    console.info(`Symbols in my code: ${length}`);
}

modificator(sampleFunc);

sampleFunc();
// в консоль было выведено число символов в коде функции sampleFunc, т.е.:
// Symbols in my code: 93
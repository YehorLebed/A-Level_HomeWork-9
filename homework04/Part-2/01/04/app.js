function sampleFunc() {
    console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`);
}

function modificator(func) {
    return function() {
        sampleFunc('test', 'sample');
    }
}

const testFunc = modificator(sampleFunc)

testFunc();

/* sampleFunc: test | sample */

function testArguments() {
    function generateError(numArgs) {
        const err = new Error();
        err.name = 'Application';
        err.message = 'Invalid arguments';
        err.stack = `Function needs 3 arguments, but only ${numArgs} present`;
        throw err;
    }
    try {
        arguments.length >= 3 ? null : generateError(arguments.length)
    }
    catch (err) {
        console.error(`${err.name}: ${err.message}\n${err.stack}`)
    }
}

testArguments("Google")
// в консоли было сообщение от ошибке:
// ► Application: Invalid arguments
// Function needs 3 arguments, but only 1 present
const generate = require('./generate');

const printTestResult = (expected, actual, message) => {
    console.log(message, actual === expected ? 'success' : `failure: expected ${expected}; actual ${actual}`);
}

const test_nextChar = () => {
    const test_a = () => {
        const input = 'a';
        const expected = 'b';
        const actual = generate.nextChar(input);
        printTestResult(expected, actual, 'test_nextChar.test_a');
    }
    const test_z = () => {
        const input = 'z';
        const expected = 'z';
        const actual = generate.nextChar(input);
        printTestResult(expected, actual, 'test_nextChar.test_z');
    }
    test_a();
    test_z();
}

const test_generateLowerCaseCharacterRange = () => {
    const expected = 'abcdefghijklmnopqrstuvwxyz';
    const actual = generate.generateLowerCaseCharacterRange();
    printTestResult(expected, actual, 'test_generateLowerCaseCharacterRange');
}
(function () {
    test_nextChar();
    test_generateLowerCaseCharacterRange();
})();
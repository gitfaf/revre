const generate = require('./generate');

const printTestResult = (expected, actual) => {
    console.log(actual === expected ? 'success' : `failure: expected ${expected}; actual ${actual}`);
}

const test_nextChar = () => {
    const test_a = () => {
        const input = 'a';
        const expected = 'b';
        const actual = generate.nextChar(input);
        printTestResult(expected, actual);
    }
    const test_z = () => {
        const input = 'z';
        const expected = 'z';
        const actual = generate.nextChar(input);
        printTestResult(expected, actual);
    }
    test_a();
    test_z();
}

(function () {
    test_nextChar();
})();
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

const test_generateCharacterRange = () => {
    const test_az = () => {
        const expected = 'abcdefghijklmnopqrstuvwxyz';
        const actual = generate.generateCharacterRange('a-z');
        printTestResult(expected, actual, 'test_generateCharacterRange.test_az');
    }
    const test_px = () => {
        const expected = 'pqrstuvwx';
        const actual = generate.generateCharacterRange('p-x');
        printTestResult(expected, actual, 'test_generateCharacterRange.test_px');
    }
    test_az();
    test_px();
}

(function () {
    test_nextChar();
    test_generateCharacterRange();
    test_generateLowerCaseCharacterRange();
})();
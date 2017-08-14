const nextChar = (ch) => {
    if (ch >= 'a' && ch <= 'z') {
        return ch === 'z' ? 'z' : String.fromCharCode(ch.charCodeAt(0) + 1);
    } 
}

const generateCharacterRangeBetween = (start, end) => {
    let out = '';
    for(let c = start; c < end; c = nextChar(c)) {
        out += c;
    }
    return out + end;
}

const generateCharacterRange = (rangeSymbol) => {
    const rangeEnds = rangeSymbol.split('-');
    return generateCharacterRangeBetween(rangeEnds[0], rangeEnds[1]);
}

const generateLowerCaseCharacterRange = () => {
    return generateCharacterRangeBetween('a', 'z');
}

module.exports = {
    generateCharacterRange,
    generateCharacterRangeBetween,
    nextChar,
    generateLowerCaseCharacterRange
};

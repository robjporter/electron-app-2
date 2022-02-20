import { stringRemoveNonASCII, stringReverse, stringStripHTMLTags, stringPadStart, stringPadEnd, stringPad, stringTruncate, stringRemoveWhitespace, stringNormalise, stringContains, stringCapitalize, stringCapitalizeEveryWord } from './index';

const str = "this is a TEST";
const str2 = "test";
const str3 = "    test    ";
    
test('stringCapitalize: Capitalize first word of string ignore the rest', () => {
    expect(stringCapitalize(str)).toBe("This is a TEST");
})
       
test('stringCapitalize: Capitalize first word of string lowercase the rest', () => {
    expect(stringCapitalize(str, true)).toBe("This is a test");
})
    
test('stringCapitalizeEveryWord: Capitalize all words of string', () => {
    expect(stringCapitalizeEveryWord(str)).toBe("This Is A TEST");
})
 
test('stringContains: String Contains', () => {
    expect(stringContains(str, str2)).toBeTruthy();
})

test('stringNormalise: Normalise string contents', () => {
    expect(stringNormalise("cafe\u0301")).toBe("cafe");
})

test('stringRemoveWhitespace: Remove double or more whitespace', () => {
    expect(stringRemoveWhitespace(str3)).toBe(" test ");
})

test('stringTruncate: Truncate string with default settings', () => {
    expect(stringTruncate(str)).toBe("this is a T...");
})

test('stringTruncate: Truncate string with length set to 9', () => {
    expect(stringTruncate(str,9)).toBe("this i...");
})

test('stringPad: Pad string to 20 characters', () => {
    expect(stringPad(str, 20)).toBe("   this is a TEST   ")
})

test('stringPad: Pad string to 20 * characters', () => {
    expect(stringPad(str, 20, '*')).toBe("***this is a TEST***")
})

test('stringPadStart: Pad start of string to 20 characters', () => {
    expect(stringPadStart(str, 20)).toBe("      this is a TEST")
})

test('stringPadStart: Pad start of string to 20 * characters', () => {
    expect(stringPadStart(str, 20, '*')).toBe("******this is a TEST")
})

test('stringPadEnd: Pad end of string to 20 characters', () => {
    expect(stringPadEnd(str, 20)).toBe("this is a TEST      ")
})

test('stringPadEnd: Pad end of string to 20 * characters', () => {
    expect(stringPadEnd(str, 20, '*')).toBe("this is a TEST******")
})

test('stringRemoveNonASCII: Pad end of string to 20 * characters', () => {
    expect(stringRemoveNonASCII(str + "~")).toBe("thisisaTEST")
})

test('stringReverse: Pad end of string to 20 * characters', () => {
    expect(stringReverse(str)).toBe("TSET a si siht")
})

test('stringStripHTMLTags: Pad end of string to 20 * characters', () => {
    expect(stringStripHTMLTags("<html>" + str + "</html>")).toBe("this is a TEST")
})

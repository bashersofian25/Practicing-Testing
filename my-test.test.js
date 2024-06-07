const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const cipher = require('./caeserCipher');
const myCalculator = calculator();

describe('testing capitalization', () => {  
    // Tests for the 'capitalize' method
    test("capitalization of multiple lowercase words", () => {
        expect(capitalize("hello world")).toBe("Hello world");
    });

    test("capitalization of multiple words with mixed cases", () => {
        expect(capitalize("hELLO wORLD")).toBe("HELLO wORLD");
    });

    test("capitalization of multiple words with leading spaces", () => {
        expect(capitalize("   hello world")).toBe("   hello world");
    });

    test("capitalization of multiple words with trailing spaces", () => {
        expect(capitalize("hello world   ")).toBe("Hello world   ");
    });

    test("capitalization of sentence with punctuation", () => {
        expect(capitalize("hello, world!")).toBe("Hello, world!");
    });

    test("capitalization of a sentence with numbers", () => {
        expect(capitalize("123 hello world")).toBe("123 hello world");
    });

    test("capitalization of a sentence with special characters", () => {
        expect(capitalize("@hello world")).toBe("@hello world");
    });

    test("capitalization of a sentence with a mix of letters and special characters", () => {
        expect(capitalize("hello@world")).toBe("Hello@world");
    });

    test("capitalization of sentence with non-Latin alphabet characters", () => {
        expect(capitalize("привет мир")).toBe("Привет мир");
    });

    test("capitalization of a sentence starting with an emoji", () => {
        expect(capitalize("😀 hello world")).toBe("😀 hello world");
    });

    // Tests for edge cases
    test("capitalization of an empty string", () => {
        expect(capitalize("")).toBe("");
    });

    test("capitalization of a single lowercase letter", () => {
        expect(capitalize("a")).toBe("A");
    });

    test("capitalization of a single uppercase letter", () => {
        expect(capitalize("A")).toBe("A");
    });

    test("capitalization of a single special character", () => {
        expect(capitalize("@")).toBe("@");
    });

    test("capitalization of a string with only spaces", () => {
        expect(capitalize("   ")).toBe("   ");
    });
}); 

describe ("testing reversing string", () => {
    // Basic test for reversing a string
    test("reversing string with numbers", () => {
        expect(reverseString("123456789")).toBe("987654321");
    });

    // Tests for reversing strings with different cases
    test("reversing lowercase string", () => {
        expect(reverseString("abcdef")).toBe("fedcba");
    });

    test("reversing uppercase string", () => {
        expect(reverseString("ABCDEF")).toBe("FEDCBA");
    });

    test("reversing mixed case string", () => {
        expect(reverseString("aBcDeF")).toBe("FeDcBa");
    });

    // Tests for reversing strings with spaces
    test("reversing string with leading and trailing spaces", () => {
        expect(reverseString("  hello  ")).toBe("  olleh  ");
    });

    test("reversing string with spaces in between", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    // Tests for reversing strings with special characters
    test("reversing string with special characters", () => {
        expect(reverseString("!@#$%^&*()")).toBe(")(*&^%$#@!");
    });

    test("reversing alphanumeric string with special characters", () => {
        expect(reverseString("a1b2c3!")).toBe("!3c2b1a");
    });

    // Tests for reversing strings with non-Latin characters
    test("reversing string with non-Latin characters", () => {
        expect(reverseString("абвгд")).toBe("дгвба");
    });
    // Edge cases
    test("reversing empty string", () => {
        expect(reverseString("")).toBe("");
    });

    test("reversing single character string", () => {
        expect(reverseString("a")).toBe("a");
    });

    test("reversing single special character string", () => {
        expect(reverseString("!")).toBe("!");
    });

    test("reversing string with spaces only", () => {
        expect(reverseString("     ")).toBe("     ");
    });
});
test("reversing string", () => {expect(reverseString("123456789")).toBe("987654321")});
describe('testing calculator', () => {
    // Tests for the 'add' method
    test('adding positive numbers', () => {
        expect(myCalculator.add(2, 5)).toBe(7);
    });

    test('adding negative numbers', () => {
        expect(myCalculator.add(-2, -5)).toBe(-7);
    });

    test('adding positive and negative numbers', () => {
        expect(myCalculator.add(-2, 5)).toBe(3);
    });

    test('adding zeros', () => {
        expect(myCalculator.add(0, 0)).toBe(0);
    });

    // Tests for the 'multiply' method
    test('multiplying positive numbers', () => {
        expect(myCalculator.multiply(2, 5)).toBe(10);
    });

    test('multiplying negative numbers', () => {
        expect(myCalculator.multiply(-2, -5)).toBe(10);
    });

    test('multiplying positive and negative numbers', () => {
        expect(myCalculator.multiply(-2, 5)).toBe(-10);
    });

    test('multiplying with zero', () => {
        expect(myCalculator.multiply(2, 0)).toBe(0);
    });

    // Tests for the 'subtract' method
    test('subtracting positive numbers', () => {
        expect(myCalculator.subtract(10, 5)).toBe(5);
    });

    test('subtracting negative numbers', () => {
        expect(myCalculator.subtract(-10, -5)).toBe(-5);
    });

    test('subtracting positive and negative numbers', () => {
        expect(myCalculator.subtract(10, -5)).toBe(15);
    });

    test('subtracting zeros', () => {
        expect(myCalculator.subtract(0, 0)).toBe(0);
    });

    // Tests for the 'divide' method
    test('dividing positive numbers', () => {
        expect(myCalculator.divide(10, 2)).toBe(5);
    });

    test('dividing negative numbers', () => {
        expect(myCalculator.divide(-10, -2)).toBe(5);
    });

    test('dividing positive and negative numbers', () => {
        expect(myCalculator.divide(-10, 2)).toBe(-5);
    });

    test('dividing by one', () => {
        expect(myCalculator.divide(10, 1)).toBe(10);
    });

    test('dividing by zero', () => {
        expect(() => myCalculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
        // Tests for the 'add' method with floating-point numbers
    test('adding floating-point numbers', () => {
        expect(myCalculator.add(1.1, 2.2)).toBeCloseTo(3.3, 5);
    });

    test('adding negative floating-point numbers', () => {
        expect(myCalculator.add(-1.1, -2.2)).toBeCloseTo(-3.3, 5);
    });

    test('adding positive and negative floating-point numbers', () => {
        expect(myCalculator.add(1.1, -2.2)).toBeCloseTo(-1.1, 5);
    });

    // Tests for the 'multiply' method with floating-point numbers
    test('multiplying floating-point numbers', () => {
        expect(myCalculator.multiply(1.1, 2.2)).toBeCloseTo(2.42, 5);
    });

    test('multiplying negative floating-point numbers', () => {
        expect(myCalculator.multiply(-1.1, -2.2)).toBeCloseTo(2.42, 5);
    });

    test('multiplying positive and negative floating-point numbers', () => {
        expect(myCalculator.multiply(1.1, -2.2)).toBeCloseTo(-2.42, 5);
    });

    // Tests for the 'subtract' method with floating-point numbers
    test('subtracting floating-point numbers', () => {
        expect(myCalculator.subtract(2.2, 1.1)).toBeCloseTo(1.1, 5);
    });

    test('subtracting negative floating-point numbers', () => {
        expect(myCalculator.subtract(-2.2, -1.1)).toBeCloseTo(-1.1, 5);
    });

    test('subtracting positive and negative floating-point numbers', () => {
        expect(myCalculator.subtract(2.2, -1.1)).toBeCloseTo(3.3, 5);
    });

    // Tests for the 'divide' method with floating-point numbers
    test('dividing floating-point numbers', () => {
        expect(myCalculator.divide(2.2, 1.1)).toBeCloseTo(2, 5);
    });

    test('dividing negative floating-point numbers', () => {
        expect(myCalculator.divide(-2.2, -1.1)).toBeCloseTo(2, 5);
    });

    test('dividing positive and negative floating-point numbers', () => {
        expect(myCalculator.divide(2.2, -1.1)).toBeCloseTo(-2, 5);
    });

    test('dividing floating-point numbers resulting in a fraction', () => {
        expect(myCalculator.divide(1.1, 2.2)).toBeCloseTo(0.5, 5);
    });

});

describe ("caeser cipher", () => {
        // Basic test for Caesar cipher with a shift of 3
    test("Caesar cipher with shift 3", () => {
        expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    // Tests for Caesar cipher with different shifts
    test("Caesar cipher with shift 1", () => {
        expect(cipher('abc', 1)).toBe('bcd');
    });

    test("Caesar cipher with shift 5", () => {
        expect(cipher('xyz', 5)).toBe('cde');
    });

    test("Caesar cipher with shift 13 (ROT13)", () => {
        expect(cipher('Hello, World!', 13)).toBe('Uryyb, Jbeyq!');
    });

    test("Caesar cipher with negative shift", () => {
        expect(cipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
    });

    // Tests for Caesar cipher wrapping around the alphabet
    test("Caesar cipher wrapping around end of alphabet", () => {
        expect(cipher('xyz', 3)).toBe('abc');
    });

    test("Caesar cipher wrapping around start of alphabet with negative shift", () => {
        expect(cipher('abc', -3)).toBe('xyz');
    });

    // Tests for Caesar cipher with non-alphabetic characters
    test("Caesar cipher with numbers", () => {
        expect(cipher('123', 4)).toBe('123');
    });

    test("Caesar cipher with special characters", () => {
        expect(cipher('!@#$', 2)).toBe('!@#$');
    });

    // Edge cases
    test("Caesar cipher with empty string", () => {
        expect(cipher('', 3)).toBe('');
    });

    test("Caesar cipher with single character", () => {
        expect(cipher('a', 1)).toBe('b');
    });

    test("Caesar cipher with single uppercase character", () => {
        expect(cipher('A', 1)).toBe('B');
    });

    test("Caesar cipher with large shift", () => {
        expect(cipher('abc', 29)).toBe('def'); // 29 % 26 = 3
    });
});
  
  


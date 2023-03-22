import { Calculator } from './test';

describe('calculator', () =>  {
    it('should add two numbers', () => {
        const calculator = new Calculator();
        expect(calculator.add(2, 2)).toBe(4);
    });
    it('should subtract two numbers', () => {
        const calculator = new Calculator();
        expect(calculator.sub(2, 2)).toBe(0);
    });
    it('should multiply two numbers', () => {
        const calculator = new Calculator();
        expect(calculator.mult(2, 2)).toBe(0);
    });
}
)
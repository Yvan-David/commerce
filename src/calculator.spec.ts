import { expect } from 'chai';
import Calculator from '../src/calculator'

describe("Test calculator", () => {
    it("should return sum", ()=>{
        //arrange
        const calc = new Calculator();

        // act
        const result = calc.add(2,3);

        //assert
        expect(result).to.equal(5);
    })
    it("should return substract", ()=>{
        //arrange
        const calc = new Calculator();

        // act
        const result = calc.substract(5,3);

        //assert
        expect(result).to.equal(2);
    })
    it("should return multiply", ()=>{
        //arrange
        const calc = new Calculator();

        // act
        const result = calc.multiply(2,3);

        //assert
        expect(result).to.equal(6);
    })
})

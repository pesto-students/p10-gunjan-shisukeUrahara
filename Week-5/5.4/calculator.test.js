const calculator = require('./calculator.js')

test('testing sum function',()=>{
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.add(1,null)).toBe(1);
    expect(calculator.add(null,null)).toBe(0);
    expect(calculator.add(1,undefined)).toBeNaN();
    expect(calculator.add(undefined,undefined)).toBeNaN();
    expect(calculator.add(1,-1)).toBe(0);
    expect(calculator.add(1,"1")).toBe("11");

})

test('testing subtraction function',()=>{
    expect(calculator.sub(2,1)).toBe(1);
    expect(calculator.sub(1,null)).toBe(1);
    expect(calculator.sub(null,null)).toBe(0);
    expect(calculator.sub(1,undefined)).toBeNaN();
    expect(calculator.sub(undefined,undefined)).toBeNaN();
    expect(calculator.sub(1,-1)).toBe(2);
    expect(calculator.sub(-1,-1)).toBe(0);
    expect(calculator.sub(1,"1")).toBe(0);
    expect(calculator.sub(1,"10")).toBe(-9);

})

test('testing  multiply function',()=>{
    expect(calculator.mul(2,2)).toBe(4)
    expect(calculator.mul(1,null)).toBe(0);
    expect(calculator.mul(null,null)).toBe(0);
    expect(calculator.mul(1,undefined)).toBeNaN();
    expect(calculator.mul(undefined,undefined)).toBeNaN();
    expect(calculator.mul(1,-1)).toBe(-1);
    expect(calculator.mul(-1,-1)).toBe(1);
    expect(calculator.mul(1,"1")).toBe(1);
    expect(calculator.mul(1,"10")).toBe(10);
})

test('testing  divide function',()=>{
    expect(calculator.div(2,2)).toBe(1)
    expect(calculator.div(1,null)).toBe(Infinity);
    expect(calculator.div(1,0)).toBe(Infinity);
    expect(calculator.div(null,null)).toBeNaN();
    expect(calculator.div(1,undefined)).toBeNaN();
    expect(calculator.div(undefined,undefined)).toBeNaN();
    expect(calculator.div(1,-1)).toBe(-1);
    expect(calculator.div(-1,-1)).toBe(1);
    expect(calculator.div(1,"1")).toBe(1);
    expect(calculator.div(1,"10")).toBe(0.1);
})

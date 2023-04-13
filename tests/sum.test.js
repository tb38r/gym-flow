const sum = require('./sum')

describe("Suite for Sum", ()=>{ 
    
test('properly adds two numbers', ()=>{
    expect(
        sum(1,2)
        ).toBe(3)

})

test('only accepts integers', ()=>{
    expect(
        sum('A',2)
        ).toBe(undefined)

})

})
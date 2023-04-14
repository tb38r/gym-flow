import { subtract } from "./subtract"

test('properly subtracts two numbers', ()=>{
    expect(
        subtract(1,2)
        ).toBe(-1)

})
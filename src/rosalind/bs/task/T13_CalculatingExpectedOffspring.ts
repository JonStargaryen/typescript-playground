export {}

const offspringPerGeneration = 2;

let input = "17949 18642 19489 18332 16660 19473";
// for some reason parseInt return NaN for one value
let couples: number[] = input.split(" ").map(i => +i);

let offspring = couples[0] * offspringPerGeneration +
    couples[1] * offspringPerGeneration +
    couples[2] * offspringPerGeneration +
    couples[3] * offspringPerGeneration * 0.75 +
    couples[4] * offspringPerGeneration * 0.5;

console.log(offspring);
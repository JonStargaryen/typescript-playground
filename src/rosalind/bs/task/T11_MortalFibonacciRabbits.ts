import bigDecimal = require('js-big-decimal');

const numberOfMonths: number = 86;
const monthsToLive: number = 19;

let population: string[] = new Array(monthsToLive + 1)
    .join('0')
    .split('')
    .map(number => bigDecimal.add(number, "0"));

population[0] = "1";
console.log("month 1 : " + population + " : " + population.reduce((l, r) => l + r));

for (let month = 2; month <= numberOfMonths; month++) {
    // offspring is the sum of all mature rabbits (i.e. age > 1 month)
    let offspring: string = population.slice(1).reduce((l, r) => bigDecimal.add(l, r));
    console.log(offspring);
    // let oldest rabbits die
    population.pop();
    // add offspring as youngest generation
    population.unshift(offspring);
    console.log("month " + month + " : " + population + " : " + population.reduce((l, r) => bigDecimal.add(l, r)));
}
import {choose} from "../math";

let p = 0.25;
let g = 7;
let N = 38;
let populationSize = Math.pow(2, g);

let P = 0;
for (let k = N; k < populationSize + 1; k++) {
    let partial = choose(populationSize, k) * Math.pow(p, k) * Math.pow(1 - p, populationSize - k);
    console.log(`${ k } of ${ populationSize } belong to the Aa Bb genotype: ${ partial }`);
    P += partial;
}

console.log(P);
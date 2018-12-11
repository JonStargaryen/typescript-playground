export {}

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

// http://www.nogray.com/api/math/choose.php

function factorial(x: number): number {
    if (isNaN(x)) return 1;

    // if x below 0, return 1
    if (x <= 0) return 1;
    // if x above 170, return infinity
    if (x > 170) return Infinity;
    // calculating the factorial
    let y = 1;
    for (let i = x; i > 0; i--) {
        y *= i;
    }
    return y;
}

function choose(n: number, k: number): number {
    // validating the input
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0;

    if (isNaN(k)) k = 0;
    if (k < 0) k = 0;
    if (k > n) k = n;

    return (factorial(n)) / (factorial(k) * factorial(n - k));
}
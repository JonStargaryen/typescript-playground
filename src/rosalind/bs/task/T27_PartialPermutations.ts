export {}

let n = 92;
let k = 8;
let partial = 1;

for (let i = 0; i < k; i++) {
    partial *= (n - i);
    partial %= 1_000_000;
}

console.log(partial);

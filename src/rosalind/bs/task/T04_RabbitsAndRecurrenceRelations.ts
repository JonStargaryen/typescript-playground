export {}

// number of months
let n: number = 29;
// number of offspring per pair
let k: number = 3;

// starts with 1 pair
let f: number[] = [1, 1];

for (let i = 2; i < n; i++) {
    f[i] = k * f[i - 2] + f[i - 1];
}

console.log(f);
console.log([...f].pop());
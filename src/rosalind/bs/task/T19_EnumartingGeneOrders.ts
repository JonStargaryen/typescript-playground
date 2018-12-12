import {factorial} from "../math";

let n = 7;

console.log(factorial(n));

let elements: number[] = Array.from({ length: n }, (v, k) => k +1);
permute(elements)
    .map(permutation => permutation.join(" "))
    .forEach(permutation => console.log(permutation));

// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
function permute(permutation: Array<any>): Array<Array<any>> {
    let length = permutation.length;
    let result = [permutation.slice()];
    let c = new Array(length).fill(0);
    let i = 1;
    let k;
    let p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

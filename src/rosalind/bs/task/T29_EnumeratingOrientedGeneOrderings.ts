import {factorial} from "../math";

let n = 6;
let fac = factorial(n);
let perm = fac * (2 ** n);

console.log(perm);


let elements: number[] = [];
for (let i = 1; i <= n; i++) {
    elements.push(i);
}

for (let permutation of permute(elements)) {
    for (let signs of product(["", "-"], n)) {
        let output = [];
        for (let i = 0; i < permutation.length; i++) {
            output.push(signs[i] + permutation[i]);
        }
        console.log(output.join(" "));
    }
}

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

// https://gist.github.com/cybercase/db7dde901d7070c98c48
function product(iterables: string[], repeat: number): string[] {
    var argv = Array.prototype.slice.call(arguments), argc = argv.length;
    if (argc === 2 && !isNaN(argv[argc - 1])) {
        var copies = [];
        for (var i = 0; i < argv[argc - 1]; i++) {
            copies.push(argv[0].slice()); // Clone
        }
        argv = copies;
    }
    return argv.reduce(function tl(accumulator: string[], value: string[]) {
        var tmp: string[] = [];
        accumulator.forEach(function(a0: string) {
            value.forEach(function(a1: string) {
                tmp.push(a0.concat(a1));
            });
        });
        return tmp;
    }, [[]]);
}
export {}

let alphabet: string[] = "A B C D E F G H".split(" ");
let length: number = 3;

let combinations: string[] = [];
permute(alphabet, length, "", combinations);
combinations.forEach(combination => console.log(combination));

function permute(alphabet: string[], length: number, prefix: string, combinations: string[]) {
    if(length === 0) {
        combinations.push(prefix);
    } else {
        for (let c of alphabet) {
            permute(alphabet, length - 1, prefix + c, combinations);
        }
    }
}
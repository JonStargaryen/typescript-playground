export {}

let sequence = "TCCTCTAGGTTGGTAATTCTCCATCTTTGCCTGTGGCGAATCTCTTATGGAAAAGAGCCCGATAAGGCCTAAGGTGGCACCCTCCCAAATTGTT";
let length = sequence.length;
let gcContents: number[] = "0.110 0.169 0.247 0.292 0.326 0.412 0.494 0.512 0.571 0.670 0.708 0.782 0.838 0.891".split(" ")
    .map(it => Number(it));
let prob: number[] = [];

for (let gcContent of gcContents) {
    let p = 1;
    let p_at = (1 - gcContent) / 2;
    let p_cg = gcContent / 2;
    for (let i = 0; i < length; i++) {
        let char = sequence.charAt(i);
        if (char === "A" || char === "T") {
            p *= p_at;
        } else {
            p *= p_cg;
        }
    }
    prob.push(p);
}

let output = prob.map(it => Math.log10(it)).join(" ");

console.log(output);
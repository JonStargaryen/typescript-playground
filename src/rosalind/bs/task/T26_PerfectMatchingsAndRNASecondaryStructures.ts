import {RNASequence} from "../sequence";
import {factorial} from "../math";

let sequence: RNASequence = RNASequence.parseFastaFile(">Rosalind_3199\n" +
    "UAUUAUCGUCCAGAUGACUGCAUAUUAGCUUCCGUCGACCGAGUUGCUUGCAGCAAACCA\n" +
    "GGAGUCACGGAGGCCUGACG")[0];

let aCount = sequence.sequence.split("")
    .filter(it => it === "A")
    .length;
let cCount = sequence.sequence.split("")
    .filter(it => it === "C")
    .length;

console.log("A/T: " + aCount + " => " + factorial(aCount));
console.log("C/G: " + cCount + " => " + factorial(cCount));
console.log(factorial(aCount) * factorial(cCount));
console.log("use e.g. WolframAlpha to compute with necessary precision");

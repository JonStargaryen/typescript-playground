import {DNASequence} from "../sequence";

//TODO: does not transpile
let sequences: DNASequence[] = DNASequence.parseFastaFile(">Rosalind_1\n" +
    "GATTACA\n" +
    ">Rosalind_2\n" +
    "TAGACCA\n" +
    ">Rosalind_3\n" +
    "ATACA");

console.log("sequences: " + sequences.length);

let referenceSequence: DNASequence = sequences.reduce((l, r) => l.sequence.length < r.sequence.length ? l : r);

sequences.splice(sequences.indexOf(referenceSequence), 1);

f1:for (let fragmentSize = referenceSequence.sequence.length; fragmentSize > 0; fragmentSize--) {
    f2:for (let position = 0; position < referenceSequence.sequence.length - fragmentSize + 2; position++) {
        let candidate = referenceSequence.sequence.substr(position, fragmentSize);

        for (let sequence of sequences) {
            if(sequence.sequence.indexOf(candidate) === -1) {
                continue f2;
            }
        }

        console.log(candidate);
        break f1;
    }
}
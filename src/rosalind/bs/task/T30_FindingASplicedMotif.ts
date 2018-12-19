import {DNASequence} from "../sequence";

let sequences = DNASequence.parseFastaFile(">Rosalind_5867\n" +
    "AAAAATTATGAGTATCGAAAAGACCCATACAGTTACTATGCGTACCCAACGGGATAAAGT\n" +
    "AAATTAAAGAATCGAGTAAATACGCGGACGTACACATAGCCTGGTATGCCATACGTATCA\n" +
    "GGAGTGTGGCCCAACCCACCCGCTTCCAACCCGTTTCAGACCCGTCTAGGCATGCTCACT\n" +
    "GGGAAATAGAGCACTGGAATTCAGAATTCGCGGTCAGTACCCGAAGTCCCCCTGGAAGGG\n" +
    "CCTAGGTCACCATCCCTTACGTCGCCTCCATGTGACTCGAGTAGTACGCTGGTCCGTCAA\n" +
    "GGGCTTCCTTGCGCCTGTGGAGAATGAACACAATTCCAATCAACAGCACTGCGAAGCAGG\n" +
    "TCGCTGCTGGGGGTCGGAAGCACTAAACGTAGCCTACAGACTCAGGTTGACAGCTGCTGA\n" +
    "TGACCTGTATACGCATAGTCTGTTTCTTGGAATAGGAGAACGGGAGGGGAGCCATTGTGT\n" +
    "ACTTGCTGCAAAACATGACCTCCTGATAGTTAAACCAGTTTGCGAGTTATTCCACGATGG\n" +
    "CATATGAACGTGAGGGGCTACGGCCACATCGAGGGTTATATTGGGCCATCCTGATTTTAA\n" +
    "TGCGAGGTTTACCACGGGAAGTCAGTCGCGCCTTTCTCTCTTCCGTGTGAAAAGGAGCTG\n" +
    "GGTGCACGACGAGATAGATCCAACCGAGCTGATGAGTTATCTACAGTCAACAACTGTTAC\n" +
    "TACCTTTAACCGGCGTTCTATTCCTTCTATGCTGGTGCCTGCTATCATTTGAGCTGATCC\n" +
    "CACGGTGCGGCCGATACTTCAGCCCAGTCCTAAGGCCCTCGCTGGTTTGACTGCCTGCAA\n" +
    "GTCATAAGCTAGC\n" +
    ">Rosalind_7665\n" +
    "GTACGAGCGGACTTCTCCA");
let s = sequences[0].sequence;
let t = sequences[1].sequence;

let positions = [];
f1: for (let position = 0; position < s.length; position++) {
    let tStillToMatch = t.split("");
    let workingPosition = position;

    if (tStillToMatch[0] !== s.charAt(position)) {
        continue;
    }

    while (workingPosition < s.length) {
        if (tStillToMatch[0] === s.charAt(workingPosition)) {
            // console.log(`t and s match in ${ workingPosition }: ${ s.charAt(workingPosition) } and ${ tStillToMatch[0] }`);
            positions.push(workingPosition + 1);
            // first element of t consumed
            tStillToMatch.shift();
        }
        // matched t completely
        if(tStillToMatch.length === 0) {
            break f1;
        }
        workingPosition++;
    }
}

console.log(positions.join(" "));
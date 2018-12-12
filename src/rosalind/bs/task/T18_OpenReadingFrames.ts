import {DNASequence, RNASequence} from "../sequence";

let dnaSequence: DNASequence = new DNASequence("CATTCCGAGGGCTCTTGGTTACGAAGGGGTTCGACAGACCCGACAGCGAATCTGTGTTATCGCATGTCCGGGGATCTCAGAGTAGATTAACTAGTGACAGACCTCGGGTAGGGTGATTGTTAACATCTTTCAAGTGAACTTGGAAGTAGAGCTTAATAGGATCCGGGAGATAGAATTGCTGACATTAACCTGCCTCCGGCAAGGTAGGCGTGCGTGACCTAGCCCCAGTTGTGGAGGCACTACTTCCCGCCTCAGGGGTCTAAAAGAAACCTCTAATCCCCTCACAATGGCTCAGCTACGCCAACGCGCACCTACTACCAACTCAGATAATGGCTGCGAAGTCCCATGTAGACGTATCAGCACGTATTGTGTCTGAACAGGCAGATTCAGAAACGTATGCGCACCAGTTGACCGGGCAATACTTCACCATCCACGCCGTCTTCAAGTGGACGATGACCAGAAAGAATAAAATGAGCCTATAGCTATAGGCTCATTTTATTCTTTCTGGTCATCCACTCTGGTGCCACCCAGTTGGTGACTCTTCTTTACGTGTCTTGCTACATATGCATGAGGAAAGAAAGCTACGAAGGAATCATTCTTATCAAAGTTGGCTGACCTTCGGACTTACACTACCCTATCGGTCATGGCTATAACAAGACCGTCACGTATCCGGGTGGCCAGCAAGGGAAAGTACGACATTTTGTAGCCATCTGCCCCGTCTATGTCCTTACGACCCCTCTCTGCACCTCTGGTGACCATCTACGTCCTTTAATTATAACTATTCCAAACGCGCGTTACGACCACATCCGGAGAAGTCCCTTACATTGAGCGACCAAACGAACTCGGGAAACCTCAGTAATACTACTAAAAAGCCTGAGGAGAGGCATCAGCCCTAGAAAGGGTGGAAGTTGGCCTGATCGAGCTTGCGTCTTTTCAGCGGGCAAACGACGAATAGCGATGCCGG");
let rnaSequence: RNASequence = dnaSequence.RNATranscript();
let reverseRnaSequence: RNASequence = rnaSequence.reverseComplement();

let readingFrames: RNASequence[] = [rnaSequence,
    new RNASequence(rnaSequence.sequence.substr(1)),
    new RNASequence(rnaSequence.sequence.substr(2)),
    reverseRnaSequence,
    new RNASequence(reverseRnaSequence.sequence.substr(1)),
    new RNASequence(reverseRnaSequence.sequence.substr(2))];

let proteins: Set<string> = new Set();
for(let sequence of readingFrames) {
    let translation: string = sequence.ProteinTranslation(true).sequence;

    if (translation.indexOf("M") === -1 || translation.indexOf("Stop") === -1) {
        continue;
    }

    for (let i = 0; i < translation.length; i++) {
        if (translation.charAt(i) !== "M") {
            continue;
        }

        let endIndex = translation.substr(i).indexOf("Stop");
        // if no stop codon is present, no further substring can be valid
        if (endIndex === -1) {
            break;
        }

        let protein = translation.substr(i, endIndex);
        if(protein.length > 0) {
            proteins.add(protein);
        }
    }
}

proteins.forEach(protein => console.log(protein));
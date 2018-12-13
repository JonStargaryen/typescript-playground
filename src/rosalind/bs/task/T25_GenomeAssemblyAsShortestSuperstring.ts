import {DNASequence} from "../sequence";

let sequences = DNASequence.parseFastaFile(">Rosalind_56\n" +
    "ATTAGACCTG\n" +
    ">Rosalind_57\n" +
    "CCTGCCGGAA\n" +
    ">Rosalind_58\n" +
    "AGACCTGCCG\n" +
    ">Rosalind_59\n" +
    "GCCGGAATAC");

for(let sequence1 of sequences) {
}
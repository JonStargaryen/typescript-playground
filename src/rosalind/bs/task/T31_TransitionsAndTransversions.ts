import {DNASequence} from "../sequence";

let sequences = DNASequence.parseFastaFile(">Rosalind_2638\n" +
    "TTCCCCGCTGTATGTCTATGAGTCTACGAGCAAGGTGCAGCCAATGAAGGTTTAAATGGC\n" +
    "ACAACAGATACTAGAAAGGAGCCTCCCCTAATCCAAATTCCGCGCCTGCAGCTCAGCCTT\n" +
    "GCCTGTGAAGTATATGAGTACCTATGTTGTAGGCTTATCACACTTATGAGAGCACAGAGA\n" +
    "GTCGACGATGCACTCTATAGTCGCTAATCGACTTCCTTGGCTAGTGGTCTGTTAACGGTG\n" +
    "TAGACGCTACGCAGATCAGGTGCTTAAGTTCGCACCTATATATAGTCTAGCACAAGTGAA\n" +
    "GTGCGTGAGGTCGCAATTATTCTCTCCGAAAGCGCGTGACAGAGAACCTCACGCTAACCA\n" +
    "TCCCATTGTGAAATCGTTCGGACCTCTAAAACGTCTGGAGATAGTGCATCCTTGACGACA\n" +
    "CGACCTTCTTGCCTTACCGGAACTCGGGGACTGTATTTGCAGTGGAACCTGTCCCTCCCA\n" +
    "CTGGAATCCACCATGAGTTAGCAGGTGGCTGCTCTCCCACTAGACTCACAATACCGAGTG\n" +
    "TCATAGGCCTCGGGGCAACTGCCGTTTGCTGATTCGGCCTAACGCGCACCAAGCTGCAAC\n" +
    "TGACGACCTCATCCGTGGAAGCCGACGGGTTCTTAGAGAAAAGACTATTATGTCTCGGAT\n" +
    "CCTTTACTCGGTTATTTCTGCCTACCTGCGCCAGCTATAGTTCTGAACACGACGCTGCTT\n" +
    "CGTTACACACATCGCTGGAGATGATGTTATCCGAGATAGCGCGAGCCAGCCCTACAAGGT\n" +
    "TATTATGCAATTTTGTGCTGATGCTTCTGTTTGTCAGAGATACGATTATAAACTGGGTTC\n" +
    "CCGACGCGGACGA\n" +
    ">Rosalind_3142\n" +
    "TGCCCCTCCGCAAGTCTGTGAGCCTACGAGCAAAATACTGCGAACGGCGGTTTGAGTAGC\n" +
    "ACAACAGGCCCTAAGATGAGGCCTCCATTGATTCGAAATCCACGCCTACAGTTCACACTT\n" +
    "GCCTGTAAAGTATATGCGTACCCGTATTAAAGACCTATCGTAGTTACGGAAGCTCGAAGA\n" +
    "GCCGCTACTGTACTTTGTAGATAACAAACTACTCGCTCGGCTATCGGCTTATTAGTGGCG\n" +
    "CGTACGTTACGTAGCTCAAATACGTAAGTTCATACCTATATGTAGTCTAGCATAAGGGAA\n" +
    "GCGCATGAAGTCACAATTATTTACTTCGAAAGCGTGCGAAAGGGAACCTCACGCTAACCA\n" +
    "TTCCATTGTGAAACTGTTTGGACCTCTACAATGTCTGCAAATAATGCGCCTATAACGATA\n" +
    "TGGCATTGTTGCCTTACCTGACCTTAGATACTGTGTGTGCCGTGGAACATGTCTCGCCCA\n" +
    "TTAGAGTCCACCGCAAGTCCGCAGGGGGCTGCGCTCTCCCTAGGGTCATGATACCGAGTA\n" +
    "GCGTAACCCCCGTGCCACTTGATGCCCGCTCGTTCGGTTTAGCGCGTGCCAGACTGCATC\n" +
    "TGATGATTTCACTCAAGAGAGTCGACGGGGTCTCGGAGATAAGACTGTCATGTCTCGGTT\n" +
    "CCATCAGCCGGTTACTTCCGTCTACCTGCGTAGCCTATGGCTCCGTAAATGCTACTGCTT\n" +
    "CGCTACACACATCGCTGCGGATGACATTTAACGCAACAGTGCAAGCCAACGCTATACGGT\n" +
    "CATGATGTAGTATTGAGCCAGCGCTTCTATTTATCAGCGAAACGGAGACAGACTGGTAAC\n" +
    "TCGGCACAGGCGA");

let transitions = 0;
let transversions = 0;
for (let position = 0; position < sequences[0].sequence.length; position++) {
    let char1 = sequences[0].sequence.charAt(position);
    let char2 = sequences[1].sequence.charAt(position);
    if (char1 === char2) {
        continue;
    } else if ((char1 === "A" && char2 === "G") || (char1 === "G" && char2 === "A") || (char1 === "C" && char2 === "T") || (char1 === "T" && char2 == "C")) {
        transitions++;
    } else {
        transversions++;
    }
}

console.log(transitions / transversions);
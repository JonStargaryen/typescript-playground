import {DNASequence, Sequence} from "../sequence";

let rnaSequence: Sequence = new DNASequence("GATGGAACTTGACTACGTAAATT").RNATranscript();
console.log(rnaSequence.sequence);

let rnaSequence2: Sequence = new DNASequence("GATACCAAGCTGTCTTTATCCGCGACCTACCGACGGGTAGATGTGCCTAGATATTGTGACACCTGTCCCCCTTCCTTTTTTTGATTGTAGCGACTATCCGTCGTCAAATCGCCCATAGCGCGAGGCTGCATAAGTTGCGTCGTATGATTCCATTGACCCAATTGGTTTAGTATAAATACTCAATCGGCAGGCTCTAGTTTATCGCCTGTAGAAATTAACCTTTTTCTTACCGTCATCGTTGCACCTCAGTCATTAGGGATGAGAGGATTCAACGGTCTTTTTTGGTGTCGGGAGCGTAGCGACAGTTTACGTGAGCCGGGCAAGTCCCTTGAGTTGATACGTAGCTTACTTAGTGTTTTGCTCTTTGTCTCTACCACCCGAGGGTTTGTATGAGCTGCACGTATTGCGTTGGCATGGTCGACGTACCCTAATGGACTTCCTTAGTACATTTATGACCGGGTCCGGCTATGAATCCTCAGGTACCCATTAAGGTTTATCCCTGTGCCGAGTAGGATCTAGTATGTACATCCGCCCCCGAATTTCGAAGTGACTTGTCGGAGGTGAACCCAATTCGTGTTGCTCAAATGTGTGTCCAGAGTTACGTTTCAGGTTGCAGCCTGCTGCTAACAGGTAGCGATAATCATACAAGGATGTGGCTGACAAGGCTGATTTGCATTGGAGGTGTTAATGGGTCTATGCATAGGCAGCACTGCGAAAAAAAAGATTATGTTTGTAATTTGCCACGCTGAAGCTTCCCTACATGCGGCCGGGAGATTAAGACGTGTCCGCCCAAGCGTCTTCGCTGGAACCGTGCCCTAAAGTCCGCCAAACGCGATCGTCTAGAACTTTGCCTCCGGCTTGTGGTTTCGAGGAGTAATTATGAGGAAGTCATCGGTAGCCGGATATCCCTTTATAGTCAGGATACTATCCACTGCCGTCTACG").RNATranscript();
console.log(rnaSequence2.sequence);
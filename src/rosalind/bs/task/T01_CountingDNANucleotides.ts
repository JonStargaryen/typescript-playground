import {DNASequence} from "../sequence";

// test case: 20 12 17 21
new DNASequence("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC").printNucleotideCount();

// real dataset:
new DNASequence("CCTCTTCTGCATACGTCACATCTTTATCACTGTGTTGAGTTCGCTAGGAAGGCATGACGTACTAGTACAATCTGGAATATCGGTCGCCCAAAGTCCCACCTAATAGTTCGCCGAAATGCGGCGCACAGGAAGGTGAGCTGGATTCGAAACAACGCATGCAACCTTGCCGAAGTCGGGCACAAGACGTCGCCGCGGCGATCCCTGCTTCTATATGACGCAGTCCTAAACATATGTGAGAACATCGCTGAGCATATTCATGTTGTGTCACGCTGCGGCACCTTACTTGTGGTCAGCGCCAGGGAAGAAGCCGACGAGTTCAAGTAATAAACTCTGCTAACGGTCTTTTCACTACCCCTGAGACTATCACGGCGCCACGCTGATGGTAATCACAGAGTCAGTTCTCCTGATATCAGCAAGTTAGTAATCATCGCTGGAGGCTATCATTCACCTATAGCCTAACGGAGATTGATAACCGGGTCTTTGCAGTTTGCCCAGCTTGAACCCCTACCTCTCGTCGCTCTGAAGACGTAATCTGAACCTTCGGGGGTCACCGTATTCGAGAATATATCGGAACGCTTCCGCTGCCGGTACCAGCCCAGTTCATGTTGTCTAGAAAAGCTGGATAGAAGTGACTAGAAAGCGGTGGGCTAGATTGGATGTCGTGGTGGCCCGGATAGTGTGACTTATCAGCTTATGGGGAGATGGAAGGCGAGTTTGGCTCAAGCAATAAACGGAGAAAGAGCTTAACAATAGAGTCCCGACTCCACGGCGATATTCTGTGCGTCGTTAGTTTGATACGCTAGCCGAAACTAAGTATTGCCTAACTTTTGTGTACTTTTGTGCACTTTCACATCTTCGACAGGAGATGATTACGCCGACTGCACCACGGCTGGTCAATGTTAGCGCCCTGTGAATAAAGTTAAATTAGCGATAATGTAAGTCGACCTAGATGCTAATGTGTACGGATCCTG").printNucleotideCount();
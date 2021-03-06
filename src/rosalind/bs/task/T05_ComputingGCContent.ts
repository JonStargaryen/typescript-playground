import {DNASequence} from "../sequence";

let data: string = ">Rosalind_9145\n" +
    "CTATCACCCACAGTATGTTTCCGACTTAAAATTATCGACATAAGCGAAGCGATAAAGTAG\n" +
    "TTAAAACCTACTTACCCACGAGAACGGGCGATTTATGAGGGCCCTAGAAGTACTCAAAGC\n" +
    "TGGGGTAGCAGATTCGTGGGCTCGCGAGCACTTTAATGTGACTCGCTTCGTGGCGTCCTT\n" +
    "TGCGTCCCTGGACGGCCTTTTACTAGTCACCTATACTTAAATCAGCGTGGGAGAAAAGTT\n" +
    "CCCCTATAACTTATGCCGGGCGACGAGGAAGTGCCCCATCTACCACTGGACTGTAAAATA\n" +
    "CCAGATGCTGCAGGTGGGGACAAGATCTGCGATTCCTACTCTCCTTCAGATGACATAAGC\n" +
    "TCACAAACGGGGATTTGTAGTCAGAGAACCAACGTGGCGCCTTTGTAAATCTAGAAAGTG\n" +
    "TGATAAGCCTCTGGCCATACGATGTGCGACATACTTGGGAAGCTATTAAAGGCGAAGCCG\n" +
    "TCTTTCAGGTCTCTTTATAAGGACTACAAAAGTGGAAAAACCAGCCTAAAAACGCCCTCT\n" +
    "ATTCCGTTATGCATCCACGTTTAAAGACGGGACGGAGAGAGCCCCAAGTAGCGAATGACA\n" +
    "ACCTATCGACCAACGTCTAGTGAAACAAGCCTTACATGGGAAGAGTTCAAACTCGCCGGG\n" +
    "AACACCACTTACAGCTGCGCGTCAAACCACATTTCAGCTATTTAGGGTGGGGTGCGGAAA\n" +
    "AGAATCTACGCATTTTCTAGTCTGCGAACCCCTTTTCTTACCGTCGATCACCTATGAGTT\n" +
    "ACCGCGTCGCTAGCCTGGAAAATTTTTGCCGTAAGGTCCTCATGGACACGACGTGCATCG\n" +
    "GTAGCACCTTCGAGCTTGCCGGTGCTTGAAAGGCCAATTTCCGT\n" +
    ">Rosalind_4997\n" +
    "TTTCGTTTAAATAAGGACCGCAAGGGAATTCAGAAGGGACTCGCTATTCCACGCCCACCG\n" +
    "CTGTTGGAGAACACTGAAACTTGACACCTCGCCGTCGCGTAATTCGATTCCATGGCTTGA\n" +
    "CCCGGGTTGCGCTAACTACAGGAAGCCCACCAGGGCGAAGAGATTACATGGCAATCTGAC\n" +
    "GGTTCGCGATTCGACATCTTCCGTTCCCTCCATCGTCCGGGCCATGACCCGCTTCGGCCA\n" +
    "TTATGTTACACGTCGTCACATAAAAAAGGCGTTCCGTGGTAAAGATGACTGGTTTTGTCC\n" +
    "TCCGGTGTTCCATAATCCGGCTCACTTGTATCAGTTACGGCGGTCGGAGTTATAACATCG\n" +
    "AGTCGATGTCCAAGATGAGCTATCCCTAGGGGACCCTTTTCAGGGTCAGTAACAGGATGT\n" +
    "CCTGGCGGATAACTAGAGGATACGCGTGCTTTGAACTTTGCAAGAGCGCGTTCGCTACAT\n" +
    "GATTACTATTTGTGTAGGTTTGATGCCAGAACCGGTCCCTGCTACTTGCCTGAGGATCCA\n" +
    "ATGTCGAATCCCTCTCCCGTCTGTGACTCAGGGACGTTAGATATCTACGAGCTATTTTGC\n" +
    "ATGTTACACCCTTCGGGCCAGTTGCGCGGCCCCCGAATTGGGCTGTCGCAGGCCCTAAGC\n" +
    "TTCCGTGGTCATACCGACGTATCGGGATCAAACTCGAGGCTCTTGATGTATTTAGTCGCG\n" +
    "TAATTGGGCTCTTGATGGGGTCCATCAACCGGCGCCATAAACGGCGGCTTGGTGTTCGAA\n" +
    "GCGAGTATAGATGCCTTCAGAACGCCACGTGATTTGGTCATGTGGAATACGTGCAGTCTA\n" +
    "ATTGCATCTGAGACCAAGCTGGCAGGAGAACAGAGATTCCAACTAAGGCGGCAGGCTGCT\n" +
    "GACATAAGCGCTCCTGTCCGGTGCCCTTTGCATTATGACGAGTGTGAAT\n" +
    ">Rosalind_4676\n" +
    "ATGATTCAGCCTGAAGGGGTGGTCGCAAGAATCCATCGTGTTAAGAGGAGCCATAAGCTC\n" +
    "CTGTCGCTAGAGCGTGAAGGTGCATCGCCTCGGTTCTCTTATACAAACAACCGGCTACGA\n" +
    "TAACGATGCGCGGTAATCAGATGTAAACGGCGTGACGTATTGGGTTCAAAAATCCGCCCA\n" +
    "ATGACAAGTGCCAGACGGTAATGTCCGAGAATGGATGTTACAACGCAGTAAAGCTACGAG\n" +
    "TGATGGAGCTTGGTTCTGTCTTGTTCCGTTAGGCGAGCTTACCCATCTAGACAATAGCAA\n" +
    "ATAGGGTTAGGGAATTGACATGTCAACATGACGGAGACATTAATTACAAGAGAATATTTT\n" +
    "AGTCTTAATCGCCCTGATAGCGCTTGTTTACCCATTTATCCCCTAACGGCTCTACGAATC\n" +
    "AGGGTGACGAGGTTTTCGTTCTCCGGCTCAAGCGGCTACCCAGCAATACGCCGTGTCACA\n" +
    "TACATAGCGGATAGCTAGCGGTAGTCATTAAAGCCCCTACGCACGCTTTTGGTTGTTTCG\n" +
    "ACATACGACGCTTACTGATGTGGAATATAACCAACGCAATCAAATCAGGCCCCAAGATCG\n" +
    "CTCTCACCACCAATTTAGTGATCGGTTAGAGTTATATGCGCGTGCCTATATAAGGTCTAC\n" +
    "GAGCACCCAGGTTCTAGCGAAAAAAACCACACCTTCGCTTCAAACCCTAGCTCCTGAGTT\n" +
    "GAAACGTTTGCGCTTTTGCGAAAAACTCGCGTGTCCTTACGCCACACCGATGGTACCTTT\n" +
    "ATGTATTGAACCACGTGCATGAAGCTGATGTGGAATATGGAAAATGGCGTCCTCTTGTCA\n" +
    "GGCGTGTGATAGACCCCACGAGAAGGAATATTTACGGGGTAGCAATGGCTGAATGTCGTG\n" +
    "AGTGAATCGTTTGGC\n" +
    ">Rosalind_8495\n" +
    "TCGCCAAGTGAATAGCCAACACGCGTGTTCAGTTTAATCTGTCGAAATTCAATGGGTTCA\n" +
    "CCGACGCGGATACTCCTTGGCACGGGTGCAGACAGGCTTGTAAAAGAAGTACGCACAGGA\n" +
    "ACTAACGCGGCCCCATACCGGGGGTATAACCTACTACATGGTGACTTGGCCCACACCAAA\n" +
    "TACGGTTGTGACTACGATCCTATGATCGAAACTCGATGCGAATGGTGTAGGCTCACTCGG\n" +
    "CGCGATCATGTAACTTATTCATATTAGCGAAATTGATGCAAGGACAGGTGGGTTGTGCTG\n" +
    "CGCGTTATAAACTGAGTCGGAATGTGCCACCCCGACCTGATTACTGCGCTTTCTCAATTG\n" +
    "GGTTTTAATTAGGCCCGCTGCACCACTGTCAAGACACAAGGCGGTGCGGGGAGGACGTGG\n" +
    "TGAGTATATACCGTCAAGATTATAAAGTGAATGAGCCGTAGAAGCCTGAACAAGCTGTTT\n" +
    "AGCAACGGGACCATCCTGGCTGCATACCGAATGACGAATGTAACGCTGTAGTCTTACCGC\n" +
    "CCGTCACGGAGACTGGGATACCGTAAATCGGCGGATGCCTGTCGACCCAGAGTATAGCGA\n" +
    "AGCACTCGTTGTAAACTGAGTTACCACGTCCTTCAAGAGCGAAGTTGTTCACTACCCTTC\n" +
    "ATAAGTGACCAGTAGCGCTCCTGCGACTTATAAAAGTGACTTACATTGTTAGTTGAACGG\n" +
    "TGTTTACCTCTGACTCCAGCGTCACGGACACGTCAGTTATCTACAAAATACACGTAAAGG\n" +
    "TTCACAGCAGGCGACGGAGTACGGATGACGCCAGGATGGTAACCCCATAGAAATGACATT\n" +
    "TCGACTTCGGACCTCATCTAGAATATACGTCACTCCGCTTAGAGGGGCCGCCATGTACTT\n" +
    "GGCCTCGACCGGAATACCTG\n" +
    ">Rosalind_3948\n" +
    "TCACGAAAAGACACCCATATCTTCTGTCACCGAACCCACGAGATCTAGAAAACGACGGGA\n" +
    "CAGATTAGGACTGCAGGATGTTTGGGGTCGTCTTCAATGTTTTCAGTAAGATCCTCACAA\n" +
    "CGGTATATATCGTGGAGAAACGCCGTATCTGTGCTCCACCCCCGGGAGTTCGTTCGGACC\n" +
    "CACAACTCTGGCTTGAGTGTTTTCTTGAGCCATTACCGTACCGTTTTCCGGAGTGGCTTT\n" +
    "GCATAGTTGCGAGGGACTCGTGATTTATTAGTCAAACGAAGTTTGGTTGTCCCAATCAGA\n" +
    "CATGTGAGTATGAGAACATATTACAGGTGGCACTTCCCCTTTAGATTGGGGAATAAACTG\n" +
    "CCTCTGGATGGATGGCGCCGCACGTCCCCCATGCCAACGTAGCGGCCCTGCTAGAAAGTC\n" +
    "TCACCCCCACAGGTTGAACCAAATCCGCATGTCGCCTCCTACCCGTTCAGGGTGTCTCGG\n" +
    "TCTTGGTGCTTTCATTTCTCATTTTATTGCGACCATTGGCAATCTCTGCCTTCCTTATTT\n" +
    "CAGGCATGGCCGCTAATGTAGCCCCTTTATCTCTCATGGGTGGCAAGCCACGTCAAAGCA\n" +
    "CATATCGACGAGTGAAACCGAAAAATGTGTATCAGGCGCTGCTACGTCCCTAAGCAGTGA\n" +
    "AACAGAACAGACGCCGCAAAAGGTTCTGTCTCACGACGCGAAAGACAGCGGAATACTTCA\n" +
    "CGGCGTGGGTACTCTTGAGATTCTTATTAAGACATCAAGGTACGCCCGTAGATCGGGCGA\n" +
    "ATGTCATGTGTTTATTAGAAGACTGTTTCTATGTGGATGAGCCGCTGTAGGCAGACGTGG\n" +
    "GCTAATATTACCCGAGGCGCTCACAACTATCGAGTTGTACCTCTTTAAACGGATGGGAAA\n" +
    "CGAGGTTCATGAAGGAGCACCTGTTCTATACCCTGTGCCGGGCATAGGATGAGAATCCTC\n" +
    "AATTGCTGATTGGCTTATGCTGAAG\n" +
    ">Rosalind_8370\n" +
    "AGCCTGCCGAATAGTGTGATCACCTGTTCGCCGACCGGGCGTCCGGCTGGAGTCCATAAA\n" +
    "CTGGACTCTGGACATTTGTGTCTTTGCCCTCGCTAGATACCACACACAGAGATGACCTAA\n" +
    "CTCTGTGCTCGTGCGTCCTGCCTTTATGCGTACTACTAGCAGTGACTCAGCCGGTTAGGT\n" +
    "AACTCATAGGGATACAATACGCCGTGTCCTTCAAGTGTTATATGGCGTACCCCCCGTAGG\n" +
    "TACGCTTGTATCGTAACCTAGCGTGCAGAAATATCATACTATTACCATTTATACCAAACG\n" +
    "TCGGCAATTCACATCAAGCGCCAGGTGAGGTTCTCAAATCACTGTTAGAGGCAGTATACA\n" +
    "ATATGACAGGCCTCGCGGCATTCCGCAGGTACAATTGACGATGGAGATAGCTAAAAACTC\n" +
    "ACAGTCTAGAAGCGATGCATACTTGGTGGCACCTGGCGCCGGTGTGCCCACGGATCCTGT\n" +
    "ATTCATGCAGTGCGGGCTTTGTGAGTTCGATAGGGTGTGCGACTATCCTATGGACGCATT\n" +
    "CGCTCTGATGTAGTGGAAGATTCGTGGGTCTTCTATACGACAATCTAGTACAAAGTTGCA\n" +
    "AGACTCAACTCTTTGGCAGCGCAGGTTCTTAAAGCTACTTGCCATAATTTAGTTACCCAT\n" +
    "CATTGTAGACCCGTTTCCAGTCCTGTATTCTCACGGTAATACTATAATGCTCCCGGCCCT\n" +
    "GAGAATGTTGGCAAGGCCTTCAGGGGAAAGCAGGTTCTTGAAGTTCTGAATTGGCGATAA\n" +
    "CGTCTCCAGCGGACATGCAGTGACTCCCGTGCTTAGATCCGGCTCGGTTGCGCTACGCTG\n" +
    "CACCTCCACGGCTAGGAGTACCGACTTTGCAGAGAGATGATATGCCATGTTAAGGGGCGA\n" +
    "ACCTCCAAATTCCTTCCTTGCCCTTTGAGGTCGTTTCGCTAGTCCGCG\n";

let largestGCContent = DNASequence.parseFastaFile(data)
    .reduce((left, right) => left.computeGCContent() > right.computeGCContent() ? left : right);
console.log(largestGCContent.identifier);
console.log(largestGCContent.computeGCContent());
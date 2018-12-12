import * as request from "request-promise-native";
import {ProteinSequence} from "../sequence";

const pattern: RegExp = /(?:N[^P][ST][^P])/;
const input: string = "A2Z669\n" +
    "B5ZC00\n" +
    "P07204_TRBM_HUMAN\n" +
    "P20840_SAG1_YEAST";

async function handleUniprotId(uniprotId: string) {
    let url = `http://www.uniprot.org/uniprot/${ uniprotId }.fasta`;

    try {
        let html = await request.get({uri: url});
        let sequence = ProteinSequence.parseFastaFile(html)[0].sequence;

        let hits: number[] = [];

        for (let i = 0; i < sequence.length; i++) {
            let substring = sequence.substr(i);
            let match = pattern.exec(substring);
            if (match && match.index == 0) {
                hits.push(i + 1);
            }
        }

        if (hits.length > 0) {
            console.log(uniprotId);
            console.log(hits.join(" "));
        }
    } catch(err) {
        console.log(`failed to load UniProt data for ${ uniprotId }`);
        console.log(err.message);
    }
}

input.split("\n").forEach(handleUniprotId);


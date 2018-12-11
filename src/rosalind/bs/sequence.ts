export interface Sequence {
    readonly sequence: string,
    readonly identifier: string | undefined
}

function reverse(s: string): string {
    return s.split("").reverse().join("");
}

export interface NucleotideSequence extends Sequence {
    reverse: ()=>NucleotideSequence,
    complement: ()=>NucleotideSequence,
    reverseComplement: ()=>NucleotideSequence,
    printNucleotideCount: ()=>void,
    computeGCContent: ()=>number
}

export function computeHammingDistance(sequence1: Sequence, sequence2: Sequence): number {
    if(sequence1.sequence.length !== sequence2.sequence.length) {
        throw new Error("sequence must match in length!");
    }

    let mismatchCount = 0;
    for(let i = 0; i < sequence1.sequence.length; i++) {
        if(sequence1.sequence.charAt(i) !== sequence2.sequence.charAt(i)) {
            mismatchCount++;
        }
    }

    return mismatchCount;
}

export class DNASequence implements NucleotideSequence {
    private readonly _sequence: string;
    private readonly _identifier: string | undefined;

    constructor(source: string | RNASequence, identifier?: string) {
        if(typeof source === "string") {
            this._sequence = source;
        } else {
            this._sequence = source.sequence.split("")
                    .map(c => (c === "U") ? "T" : c)
                    .join("");
        }
        this._identifier = identifier;
    }

    get sequence(): string {
        return this._sequence;
    }

    get identifier(): string | undefined {
        return this._identifier;
    }

    printNucleotideCount(): void {
        let a: number = 0;
        let c: number = 0;
        let g: number = 0;
        let t: number = 0;

        for(let char of this._sequence) {
            switch (char) {
                case 'A':
                    a++;
                    break;
                case 'C':
                    c++;
                    break;
                case 'G':
                    g++;
                    break;
                case 'T':
                    t++;
                    break;
                default:
                    throw new Error(`unknown DNA nucleotide ${ char }`);
            }
        }

        console.log(`${a} ${c} ${g} ${t}`);
    }

    RNATranscript(): RNASequence {
        return new RNASequence(this);
    }

    reverse(): DNASequence {
        return new DNASequence(reverse(this._sequence));
    }

    complement(): DNASequence {
        return new DNASequence(this._sequence.split("")
            .map(c => c === "A" ? "t" : c)
            .map(c => c === "C" ? "g" : c)
            .map(c => c === "G" ? "c" : c)
            .map(c => c === "T" ? "a" : c)
            .join("")
            .toUpperCase());
    }

    reverseComplement(): DNASequence {
        return this.reverse().complement();
    }

    computeGCContent(): number {
        let gc: number = this._sequence.split("")
            .filter(c => c === "C" || c === "G")
            .length;
        return gc / this._sequence.length * 100;
    }

    static parseFastaFile(data: string): DNASequence[] {
        let split: string[] = data.split("\n");

        let structuredData: [string, string][] = [];

        // create some structured representation of data
        for(let line of split) {
            if(line.indexOf(">") === 0) {
                let identifier: string = line.substr(1);
                structuredData.push([identifier, ""]);
            } else {
                structuredData[structuredData.length - 1][1] += line;
            }
        }

        // convert to model
        return structuredData.map(([identifier, sequence]) => new DNASequence(sequence, identifier));
    }
}

export class RNASequence implements NucleotideSequence {
    private readonly _sequence: string;
    private readonly _identifier: string | undefined;

    constructor(source: string | DNASequence, identifier?: string) {
        if(typeof source === "string") {
            this._sequence = source;
        } else {
            this._sequence = source.sequence.split("")
                .map(c => c === "T" ? "U" : c)
                .join("");
        }
        this._identifier = identifier;
    }

    get sequence(): string {
        return this._sequence;
    }

    get identifier(): string | undefined {
        return this._identifier;
    }

    printNucleotideCount(): void {
        let a: number = 0;
        let c: number = 0;
        let g: number = 0;
        let u: number = 0;

        for(let char of this._sequence) {
            switch (char) {
                case 'A':
                    a++;
                    break;
                case 'C':
                    c++;
                    break;
                case 'G':
                    g++;
                    break;
                case 'T':
                    u++;
                    break;
                default:
                    throw new Error(`unknown RNA nucleotide ${ char }`);
            }
        }

        console.log(`${a} ${c} ${g} ${u}`);
    }

    DNATranscript(): DNASequence {
        return new DNASequence(this);
    }

    reverse(): RNASequence {
        return new RNASequence(reverse(this._sequence));
    }

    complement(): RNASequence {
        return new RNASequence(this._sequence.split("")
            .map(c => c === "A" ? "u" : c)
            .map(c => c === "C" ? "g" : c)
            .map(c => c === "G" ? "c" : c)
            .map(c => c === "U" ? "a" : c)
            .join("")
            .toUpperCase());
    }

    reverseComplement(): RNASequence {
        return this.reverse().complement();
    }

    computeGCContent(): number {
        let gc: number = this._sequence.split("")
            .filter(c => c === "C" || c === "G")
            .length;
        return gc / this._sequence.length * 100;
    }

    ProteinTranslation(): ProteinSequence {
        return new ProteinSequence(this);
    }
}

export class ProteinSequence implements Sequence {
    private readonly _sequence: string;
    private readonly _identifier: string | undefined;
    private static readonly _codonTable: { [ key: string ]: string } = ProteinSequence.initializeCodonTable();

    private static initializeCodonTable(): { [ key: string ]: string } {
        let rawInput: string = "UUU F      CUU L      AUU I      GUU V\n" +
            "UUC F      CUC L      AUC I      GUC V\n" +
            "UUA L      CUA L      AUA I      GUA V\n" +
            "UUG L      CUG L      AUG M      GUG V\n" +
            "UCU S      CCU P      ACU T      GCU A\n" +
            "UCC S      CCC P      ACC T      GCC A\n" +
            "UCA S      CCA P      ACA T      GCA A\n" +
            "UCG S      CCG P      ACG T      GCG A\n" +
            "UAU Y      CAU H      AAU N      GAU D\n" +
            "UAC Y      CAC H      AAC N      GAC D\n" +
            "UAA Stop   CAA Q      AAA K      GAA E\n" +
            "UAG Stop   CAG Q      AAG K      GAG E\n" +
            "UGU C      CGU R      AGU S      GGU G\n" +
            "UGC C      CGC R      AGC S      GGC G\n" +
            "UGA Stop   CGA R      AGA R      GGA G\n" +
            "UGG W      CGG R      AGG R      GGG G ";
        let codonTable: { [ key: string ]: string } = {};
        rawInput.split("\n")
            .forEach(line => {
                line.split("  ")
                    .map(split => split.trim())
                    .filter(split => split.length > 0)
                    .map(split => split.split(" "))
                    .forEach(split => {
                        codonTable[split[0]] = split[1];
                    });
            });
        return codonTable;
    }

    constructor(source: string | RNASequence, identifier?: string) {
        if(typeof source === "string") {
            this._sequence = source;
        } else {
            this._sequence = "";
            for (let i: number = 0; i < source.sequence.length / 3; i++) {
                let codon: string = source.sequence.substr(i * 3, 3);
                let aminoAcid: string = ProteinSequence._codonTable[codon];
                if(aminoAcid && aminoAcid !== "Stop") {
                    this._sequence += aminoAcid;
                }
            }
        }
        this._identifier = identifier;
    }

    get sequence(): string {
        return this._sequence;
    }

    get identifier(): string | undefined {
        return this._identifier;
    }
}

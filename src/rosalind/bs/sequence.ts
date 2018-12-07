export interface Sequence {
    sequence: string,
    identifier: string | undefined
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
}
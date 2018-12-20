export {}

let input = "10\n" +
    "1 2\n" +
    "2 8\n" +
    "4 10\n" +
    "5 9\n" +
    "6 10\n" +
    "7 9";
let split: string[] = input.split("\n");
let n = Number(split.shift());

let clusters: number[][] = [];
for (let line of split) {
    let [first, second] = line.split(" ").map(it => Number(it));

    let match = [];
    for (let i = 0; i < clusters.length; i++) {
        let cluster = clusters[i];
        let matchFirst = cluster.indexOf(first) !== -1;
        let matchSecond = cluster.indexOf(second) !== -1;

        if (matchFirst) {
            console.log(`${ second } associated to ${ cluster }`);
            cluster.push(second);
            match.push(i);
        }
        if (matchSecond) {
            console.log(`${ first } associated to ${ cluster }`);
            cluster.push(first);
            match.push(i);
        }
    }

    if (match.length === 0) {
        console.log(`creating new cluster of ${ [first, second] }`);
        clusters.push([first, second]);
    }
    if (match.length > 1) {
        let mergedCluster: number[] = [];
        let filteredClusters: number[][] = [];
        console.log(`merging clusters ${ match }`);
        for (let i = 0; i < clusters.length; i++) {
            if (match.indexOf(i) === -1) {
                filteredClusters.push(clusters[i]);
            } else {
                console.log(`consuming ${ clusters[i] }`);
                clusters[i].filter(it => mergedCluster.indexOf(it) === -1)
                    .forEach(it => mergedCluster.push(it));
            }
        }
        clusters = filteredClusters;
        console.log(`new merged cluster: ${ mergedCluster }`);
        clusters.push(mergedCluster);
    }
}

// ensure each node is present in a cluster
for (let i = 1; i <= n; i++) {
    let missing = clusters.filter(it => it.indexOf(i) !== -1).length === 0;
    if (missing) {
        console.log(`creating dedicated cluster for ${ i }`);
        clusters.push([i]);
    }
}
console.log(clusters.length - 1);
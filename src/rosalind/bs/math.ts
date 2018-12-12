// http://www.nogray.com/api/math/choose.php
export function factorial(x: number): number {
    if (isNaN(x)) return 1;

    // if x below 0, return 1
    if (x <= 0) return 1;
    // if x above 170, return infinity
    if (x > 170) return Infinity;
    // calculating the factorial
    let y = 1;
    for (let i = x; i > 0; i--) {
        y *= i;
    }
    return y;
}

export function choose(n: number, k: number): number {
    // validating the input
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0;

    if (isNaN(k)) k = 0;
    if (k < 0) k = 0;
    if (k > n) k = n;

    return (factorial(n)) / (factorial(k) * factorial(n - k));
}
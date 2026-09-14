export function fact(x: number): number {
    let i = x;
    while (i != 0) {
        x *= i;
        i--;
    }

    return x;
}

export function facts (xs: number[]): number[] {
    return xs.map(fact);
}